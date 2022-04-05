const db = require('../database/connection');

//done
const findUserById = (id) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT * FROM student,department WHERE student.dept_id=department.dept_id and usn=?;",id,(err,result)=>{
                if(err){
                    reject(err);
                }
                let user=result[0];
                resolve(user);
            });
        } catch (e) {
            reject(e);
        }
    });
};
  
//done
const findUserAttendence = (id) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT usn,substring(date,1,10) as date,course_id,status FROM attendence WHERE usn=?",id,(err,result)=>{
                if(err){
                    reject(err);
                }
                let user=result;
                resolve(user);
            });
        } catch (e) {
            reject(e);
        }
    });
};
 
//done
const findAttendence = (id) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT a.course_id,course_name,sum(status) as num,count(status) as demo,round(100*avg(status),2) as per from attendence a,course c WHERE usn=? and a.course_id=c.course_id group by course_id;",id,(err,result)=>{
                if(err){
                    reject(err);
                }
                let user=result;
                resolve(user);
            });
        } catch (e) {
            reject(e);
        }
    });
};

//done
const TotalAttendence = (id) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT round(100*avg(status),2) as avg FROM attendence WHERE usn=?;",id,(err,result)=>{
                if(err){
                    reject(err);
                }
                let user=result[0];
                resolve(user);
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    TotalAttendence:TotalAttendence,
    findAttendence:findAttendence,
    findUserAttendence:findUserAttendence,
    findUserById:findUserById
};