const db = require('../database/connection');

const findUserById = (id) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT * FROM staff,department WHERE staff.dept_id=department.dept_id AND staff_id=?",id,(err,result)=>{
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
}

//done
const DetailsSem = (id) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT cs.course_id,s.sem,c.sec FROM semstaff s,class c,course cs WHERE c.sem_id=s.sem_id and s.course_id=cs.course_id and s.staff_id=?",id,(err,result)=>{
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        } catch (e) {
            reject(e);
        }
    });
}

//done
const Details_attendence = (sec,course_id) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT a.usn,s.stud_name,round(100*avg(status),2) as perc FROM attendence a,student s WHERE a.usn=s.usn and s.section=? and course_id=? GROUP BY a.usn ORDER BY usn",[sec,course_id],(err,result)=>{
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        } catch (e) {
            reject(e);
        }
    });
};

//done
const Details_status = (course_id,sec,date) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT s.usn,stud_name,status FROM student s,attendence a WHERE s.usn=a.usn AND course_id=? AND section=? AND date=? ORDER BY usn",[course_id,sec,date],(err,result)=>{
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        } catch (e) {
            reject(e);
        }
    });
};

//done
const DetailsOfStud = (sem,sec) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT usn,stud_name as name FROM student WHERE cur_sem=? AND section=? ORDER BY usn",[sem,sec],(err,result)=>{
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        } catch (e) {
            reject(e);
        }
    });
};
//done
const update_att = (sem,sec,date,course_id,present) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT usn FROM student WHERE cur_sem=? AND section=? ORDER BY USN",[sem,sec],(err,result)=>{
                if(err){
                    reject(err);
                }
                var msg = 'Updated attendence';
                for (i = 0; i < result.length; i++)
                {
                    var status = 0;
                    if (present && present.indexOf(result[i].usn) != -1)
                    {
                        status = 1;
                    }
                    db.query("UPDATE attendence SET usn=?,date=?,course_id=?,status=? WHERE usn=? AND date=? AND course_id=?",[result[i].usn,date,course_id,status,result[i].usn,date,course_id],(err1, resUpdate) => {
                        if (err1)
                        {
                            msg='Attendence not updated';
                            resolve(msg);
                        }
                        else{
                            resolve(msg)
                        }
                    });
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

//done
const updateAttendence = (sem,sec,date,course_id,present) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT usn FROM student WHERE cur_sem=? AND section=? ORDER BY USN",[sem,sec],(err,result)=>{
                if(err){
                    reject(err);
                }
                var msg = 'Updated attendence';
                for (i = 0; i < result.length; i++)
                {
                    var status = 0;
                    if (present && present.indexOf(result[i].usn) != -1)
                    {
                        status = 1;
                    }
                    db.query("INSERT INTO attendence VALUES(?,?,?,?)",[result[i].usn, date, course_id, status],(err1, resUpdate) => {
                        if (err1)
                        {
                            msg='Attendence already marked for this date '+date;
                            resolve(msg);
                        }
                        else{
                            resolve(msg)
                        }
                    });
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    findUserById : findUserById,
    DetailsSem : DetailsSem,
    Details_attendence: Details_attendence,
    DetailsOfStud : DetailsOfStud,
    Details_status: Details_status,
    updateAttendence : updateAttendence,
    update_att:update_att,
}
