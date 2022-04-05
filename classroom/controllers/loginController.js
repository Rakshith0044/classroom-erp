const getTeacherLoginPage = (req, res) => {
    return res.render("login/login_teacher", {
        errors: req.flash("errors")    });
};

const checkLoggedIn = (req, res, next) => {
    var val;
    try {
         val = req.user.access;
    } catch (error) {
         val=1;
    }
    if (!req.isAuthenticated() || val==1) {
        if(val==1) return res.redirect("/login_student");
        return res.redirect("/login_teacher");
    } 
    next();
};

const checkLoggedInStudent = (req, res, next) => {
    var val;
    try {
         val = req.user.access;
    } catch (error) {
        val=0;
    }
    if (!req.isAuthenticated() || val==0) {
        if(val==0) return res.redirect("/login_teacher");
        return res.redirect("/login_student");
    }
    next();
};

const checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/teachers");
    }
    next();
};

const checkLoggedOutStudent = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/students");
    }
    next();
};

const getStudentLoginPage = (req, res) => {
    res.render('login/login_student');
};

module.exports = {
    checkLoggedIn:checkLoggedIn,
    checkLoggedInStudent:checkLoggedInStudent,
    getTeacherLoginPage:getTeacherLoginPage,
    getStudentLoginPage:getStudentLoginPage,
    checkLoggedOut:checkLoggedOut,
    checkLoggedOutStudent:checkLoggedOutStudent,
};