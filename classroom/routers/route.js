const express = require('express');
const passport = require('passport');
const initPassportLocal = require('../controllers/passportLocal');
const loginController = require('../controllers/loginController');
const db = require('../database/connection');

initPassportLocal();
const router = express.Router();

const webRouter = (app) => {
  router.get('/login_student', loginController.getStudentLoginPage);

  router.get(
    '/login_teacher',
    loginController.checkLoggedOut,
    loginController.getTeacherLoginPage
  );

  router.post(
    '/login_teacher',
    passport.authenticate('local', {
      successRedirect: '/teachers',
      failureRedirect: '/login_teacher',
      successFlash: true,
      failureFlash: true,
    })
  );

  router.get('/students', loginController.getStudentPage);

  router.get(
    '/teachers',
    loginController.checkLoggedIn,
    loginController.getTeacherPage
  );

  // router.get('/teachers/attendence', (req, res) => {

  //     db.query('SELECT cs.course_id,s.sem,c.sec FROM semstaff s,class c,course cs WHERE c.sem_id=s.sem_id and s.course_id=cs.course_id and s.staff_id=?',req.user.staff_id, (err, result) => {

  //       if (err) throw err;

  //       res.render('attendence', {
  //         semsec: result,
  //         message:" "
  //       });

  //     });
  // });

  // var staff = [];
  // staff.push('1STCS01')

  //     // console.log(req.body);
  //     // db.query(
  //     //   'SELECT staff_id,staff_name FROM staff WHERE email=? AND password=?',
  //     //   [req.body.email, req.body.password],
  //     //   (err, result) => {
  //     //     if (err) throw err;

  //     //     if (result.length == 0) {
  //     //       res.status(401).render('login/login_teacher',{
  //     //         message:"Incorrect username or password",
  //     //       });
  //     //     } else {
  //     //       staff.push(result[0].staff_id);
  //     //       res.render('teacher_dashboard');
  //     //     }
  //     //   }
  //     // );

  // router.post('/login-student', (req, res) => {
  //     console.log(req.body);
  //     res.redirect('teachers');
  //   });

  // router.post('/attendence', (req, res) => {
  //     console.log(req.body);
  //     const arr = req.body.sem.split(" ");
  //     const sec=arr[arr.length-6];
  //     const sem=parseInt(arr[arr.length-3]);
  //     var date = req.body.date.split("-").reverse().join("-")

  //     db.query('SELECT usn,stud_name as name FROM student WHERE cur_sem=? AND section=? ORDER BY usn',[sem,sec],(err,result) =>{
  //       if (err) throw err;

  //       res.render('markAttendence',{
  //         date : date,
  //         semsec : req.body.sem,
  //         value: result
  //       });
  //     });
  // });

  // router.post('/mark',(req,res) =>{
  //     const arr = req.body.semsec.split(" ");
  //     const sec=arr[arr.length-6];
  //     const sem=parseInt(arr[arr.length-3]);
  //     var date = req.body.date.split("-").reverse().join("-");
  //     let course_id = arr[0];

  //     db.query('SELECT usn FROM student WHERE cur_sem=? AND section=? ORDER BY USN',[sem,sec],(err,result) =>{
  //       if (err) throw err
  //       var msg="Updated attendence"

  //       for(i=0;i<result.length;i++)
  //       {
  //         var status=0;
  //         if(req.body.present && req.body.present.indexOf(result[i].usn)!=-1)
  //         {
  //          status=1;
  //         }

  //         db.query('INSERT INTO attendence VALUES(?,?,?,?)',[result[i].usn,date,course_id,status],(err,resUpdate) =>{
  //           if (err){
  //             msg="Not updated"
  //           };
  //         });

  //       }
  //     db.query('SELECT cs.course_id,s.sem,c.sec FROM semstaff s,class c,course cs WHERE c.sem_id=s.sem_id and s.course_id=cs.course_id and s.staff_id=?',req.user.staff_id, (err, result) => {

  //       if (err) throw err;

  //       res.render('attendence', {
  //         semsec: result,
  //         message: msg
  //       });

  //     });
  //   });
  // });

  return app.use('/teachers', router);
};

module.exports = webRouter;
