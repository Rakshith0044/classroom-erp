const db = require('../database/connection')

const handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        let user = await findUserByEmail(email);
        if(user){
          return done(null,user,null);    
        }
    });
};

const findUserByEmail = (email) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT * FROM user WHERE email=?",email,(err,result)=>{
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

const comparePassword  = (password,userObject) =>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT password FROM user WHERE id=? AND password=?",[userObject.id,password],(err,result)=>{
                if(err){
                    reject(err);
                }
                if(result.length==0)
                {
                    resolve(false)
                }else{
                    resolve(true);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

const findUserById  = (id)=>{
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT * FROM user WHERE id=?",id,(err,result)=>{
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

module.exports= {
    comparePassword:comparePassword,
    findUserByEmail :findUserByEmail ,
    findUserById:findUserById,
    handleLogin:handleLogin,  
};