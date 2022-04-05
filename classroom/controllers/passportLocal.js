const passport = require('passport');
const passportLocal = require('passport-local');
const loginService = require('../services/loginServices');

const LocalStrategy = passportLocal.Strategy;

const initPassportLocal = () =>{
    passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'password',
        passReqToCallback:true
    },async  (req,email,password,done)=>{
        try {
            await loginService.findUserByEmail(email).then(async (user)=>{
                if (!user) {
                    return done(null, false, req.flash("errors", `This user email "${email}" doesn't exist`));
                }
                if(user){
                    const match=await loginService.comparePassword(password,user);
                    if(match==true){
                        return done(null,user,null);
                    }else{
                        return done(null,false,req.flash("errors","Invalid email or password."));
                    }
                }
            });
        } catch (e) {
          return done(null,false,{message:e});  
        }
    }));
};

passport.serializeUser(function(user, done) {
    return done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
    loginService.findUserById(id).then((user)=>{
        return done(null,user);
    }).catch(error=>{
        return done(error,null)
    });
  });
  

module.exports = initPassportLocal;