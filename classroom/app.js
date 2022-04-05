const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const cookieParser  = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const connectFlash = require('connect-flash');
const initPassportLocal = require('./controllers/passportLocal');
const loginController = require('./controllers/loginController');
const homeController = require('./controllers/homeController');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(cookieParser("secret"));
app.use(session({
  cookieName:'rakshith',
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  cookie: {
      maxAge: 1000 * 60 * 60 * 24 
  }
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(connectFlash());


app.use(passport.initialize());
app.use(passport.session()); 

initPassportLocal();

app.get('/login_student',loginController.checkLoggedOutStudent,loginController.getStudentLoginPage);
app.get('/login_teacher',loginController.checkLoggedOut,loginController.getTeacherLoginPage);

app.get('/students',loginController.checkLoggedInStudent,homeController.getStudentPage);


app.get('/teachers',loginController.checkLoggedIn,homeController.getTeacherPage); 
app.get('/teachers/attendence',loginController.checkLoggedIn,homeController.Attendence);

app.get('/teachers/report',loginController.checkLoggedIn,homeController.view);
app.get('/teachers/view_attendence',loginController.checkLoggedIn,homeController.view_attendence);

app.post('/teachers/update_att',loginController.checkLoggedIn,homeController.update_att);
app.post('/teachers/update',loginController.checkLoggedIn,homeController.update);
app.post('/teachers/updateAttendence',loginController.checkLoggedIn,homeController.markAttendence);
app.post('/teachers/attendence',loginController.checkLoggedIn,homeController.updatedAttendence);
app.post('/teachers/view_stud',loginController.checkLoggedIn,homeController.view_stud);
app.post('/teachers/view_status',loginController.checkLoggedIn,homeController.view_status);
app.post('/logout', homeController.postLogOut);


app.post('/teachers',passport.authenticate("local",{
        successRedirect:"/teachers",
        failureRedirect:"/login_teacher",
        successFlash: true,
        failureFlash: true
    }));
  
app.post('/students',passport.authenticate("local",{
      successRedirect:"/students",
      failureRedirect:"/login_student",
      successFlash: true,
      failureFlash: true
  }));

app.listen(5000, (req, res) => {
  console.log('Listening at port 5000 .');
});