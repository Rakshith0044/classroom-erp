const db = require('../database/connection');
const studServices = require('../services/studentServices');
const staffServices = require('../services/teacherServices');

const getTeacherPage = (req, res) => {
  staffServices.findUserById(req.user.id).then(async (user) => {
    if (user) {
      return res.render('teacher/teacher_dashboard', user);
    }
  });
};

const view = (req, res) => {
  staffServices.DetailsSem(req.user.id).then(async (result) => {
    if (result) {
      return res.render('teacher/report', {
        semsec: result,
        data: null,
        errors: req.flash('errors'),
      });
    }
  });
};

const update = (req, res) => {
  const arr = req.body.sem.split(' ');
  const sec = arr[arr.length - 6];
  const sem = parseInt(arr[arr.length - 3]);
  const course_id = arr[0];
  const date = req.body.date;

  staffServices.Details_status(course_id, sec, date).then(async (result) => {
    if (result) {
      return res.render('teacher/update_attendence', {
        data: result,
        date: date,
        semsec: req.body.sem,
      });
    }
  });
};

const update_att = (req, res) => {
  const arr = req.body.semsec.split(' ');
  const sec = arr[arr.length - 6];
  const sem = parseInt(arr[arr.length - 3]);
  var date = req.body.date;
  let course_id = arr[0];

  staffServices
    .update_att(sem, sec, date, course_id, req.body.present)
    .then(async (msg) => {
      if (msg) {
        staffServices.DetailsSem(req.user.id).then(async (result) => {
          staffServices
            .Details_status(course_id, sec, date)
            .then(async (detail) => {
              if (detail) {
                return res.render('teacher/view_attendence', {
                  semsec: result,
                  sec: req.body.semsec,
                  date: date,
                  data: detail,
                });
              }
            });
        });
      }
    });
};

const view_attendence = (req, res) => {
  staffServices.DetailsSem(req.user.id).then(async (result) => {
    if (result) {
      return res.render('teacher/view_attendence', {
        semsec: result,
        data: null,
        errors: req.flash('errors'),
      });
    }
  });
};

const view_status = (req, res) => {
  const arr = req.body.sem.split(' ');
  const sec = arr[arr.length - 6];
  const sem = parseInt(arr[arr.length - 3]);
  const course_id = arr[0];
  const date = req.body.date;

  staffServices.DetailsSem(req.user.id).then(async (result) => {
    staffServices.Details_status(course_id, sec, date).then(async (detail) => {
      if (detail) {
        return res.render('teacher/view_attendence', {
          semsec: result,
          sec: req.body.sem,
          date: date,
          present: req.body,
          data: detail,
        });
      }
    });
  });
};

const view_stud = (req, res) => {
  const arr = req.body.sem.split(' ');
  const sec = arr[arr.length - 6];
  const sem = parseInt(arr[arr.length - 3]);
  const course_id = arr[0];

  staffServices.DetailsSem(req.user.id).then(async (result) => {
    staffServices.Details_attendence(sec, course_id).then(async (detail) => {
      if (detail) {
        return res.render('teacher/report', {
          semsec: result,
          present: req.body,
          data: detail,
          errors: req.flash('errors'),
        });
      }
    });
  });
};

const Attendence = (req, res) => {
  staffServices.DetailsSem(req.user.id).then(async (result) => {
    if (result) {
      return res.render('teacher/attendence', {
        semsec: result,
        errors: req.flash('errors'),
      });
    }
  });
};

const markAttendence = (req, res) => {
  const arr = req.body.sem.split(' ');
  const sec = arr[arr.length - 6];
  const sem = parseInt(arr[arr.length - 3]);
  var date = req.body.date.split('-').reverse().join('-');

  staffServices.DetailsOfStud(sem, sec).then(async (result) => {
    if (result) {
      return res.render('teacher/markAttendence', {
        date: date,
        semsec: req.body.sem,
        value: result,
      });
    }
  });
};

const updatedAttendence = (req, res) => {
  const arr = req.body.semsec.split(' ');
  const sec = arr[arr.length - 6];
  const sem = parseInt(arr[arr.length - 3]);
  var date = req.body.date.split('-').reverse().join('-');
  let course_id = arr[0];

  staffServices
    .updateAttendence(sem, sec, date, course_id, req.body.present)
    .then(async (msg) => {
      if (msg) {
        staffServices.DetailsSem(req.user.id).then(async (result) => {
          if (result) {
            return res.render('teacher/attendence', {
              semsec: result,
              errors: msg,
            });
          }
        });
      }
    });
};

const getStudentPage = (req, res) => {
  let user = studServices.findUserById(req.user.id).then(async (user) => {
    if (user) {
      studServices.findUserAttendence(user.usn).then(async (status_info) => {
        studServices.findAttendence(user.usn).then(async (attendece_info) => {
          studServices.TotalAttendence(user.usn).then(async (total) => {
            const x = {
              user: user,
              total: total,
              status: status_info,
              attendence: attendece_info,
            };
            return res.render('student/student_dashboard', x);
          });
        });
      });
    }
  });
};

const postLogOut = (req, res) => {
  req.session.destroy((err) => {
    return res.redirect('/login_teacher');
  });
};

module.exports = {
  getStudentPage: getStudentPage,
  getTeacherPage: getTeacherPage,
  view: view,
  view_attendence: view_attendence,
  view_stud: view_stud,
  view_status: view_status,
  Attendence: Attendence,
  update: update,
  update_att: update_att,
  markAttendence: markAttendence,
  updatedAttendence: updatedAttendence,
  postLogOut: postLogOut,
};
