const db = require('./connection');


db.connect(function (err) {
  if (err) throw err;
  console.log('connected to database .');
});

db.query('CREATE TABLE IF NOT EXISTS department (dept_id INT PRIMARY KEY,dept_name VARCHAR(50))',
  (err, result) => {
    if (err) throw err;
    console.log('created DEPARTMENT table.');
  }
);


db.query('CREATE TABLE IF NOT EXISTS student(usn VARCHAR(30) PRIMARY KEY,stud_name VARCHAR(50),gender VARCHAR(6),dob DATE,email VARCHAR(50),address VARCHAR(100),contact INTEGER(20),password VARCHAR(50),cur_sem INT,section CHAR,dept_id INT,FOREIGN KEY(dept_id) REFERENCES department(dept_id))',
  (err, result) => {
    if (err) throw err;
    console.log('created STUDENT table.');
  }
);



db.query('CREATE TABLE IF NOT EXISTS staff (staff_id VARCHAR(30) PRIMARY KEY,staff_name VARCHAR(50),gender VARCHAR(6),email VARCHAR(50),contact INTEGER(20),password VARCHAR(50),dept_id INT,FOREIGN KEY(dept_id) REFERENCES department(dept_id))',
  (err, result) => {
    if (err) throw err;
    console.log('created STAFF table.');
  }
);

db.query(
  'CREATE TABLE IF NOT EXISTS course (course_id VARCHAR(20) PRIMARY KEY,course_name VARCHAR(50),sem INT,dept_id INT,FOREIGN KEY(dept_id) REFERENCES department(dept_id))',
  (err, result) => {
    if (err) throw err;
    console.log('created COURSE table .');
  }
);

db.query('CREATE TABLE IF NOT EXISTS semstaff (sem_id INT PRIMARY KEY,sem INT,course_id VARCHAR(20),staff_id VARCHAR(30),FOREIGN KEY(course_id) REFERENCES course(course_id),FOREIGN KEY(staff_id) REFERENCES staff(staff_id))',
  (err, result) => {
    if (err) throw err;
    console.log('created SEMSTAFF table .');
  }
);

db.query('CREATE TABLE IF NOT EXISTS class (class_id int PRIMARY KEY,sec CHAR,sem_id INT,FOREIGN KEY(sem_id) REFERENCES semstaff(sem_id))',
  (err, result) => {
    if (err) throw err;
    console.log('created CLASS table . ');
  }
);

db.query('CREATE TABLE IF NOT EXISTS attendence (usn VARCHAR(20),date DATE,course_id VARCHAR(20),status INT,PRIMARY KEY(usn,date,course_id),FOREIGN KEY(course_id) REFERENCES course(course_id),FOREIGN KEY(usn) REFERENCES student(usn))',
  (err, result) => {
    if (err) throw err;
    console.log('created ATTENDENCE tabel .');
  }
);

db.query(
  'CREATE TABLE IF NOT EXISTS user (id VARCHAR(20) PRIMARY KEY,email VARCHAR(40),password VARCHAR(40),access int)',
  (err, result) => {
    if (err) throw err;
    console.log('created USER tabel .');
  }
);

var department = [
  [1, 'Computer Science and Engineering'],
  [2, 'Information Science and Engineering'],
  [3, 'Electronics Communications and Engineering'],
];

var course = [
  ['18CS53', 'Database Management System', 5, 1],
  ['18CS56', 'Unix Programming', 5, 1],
  ['18CS55', 'Application Development Using Python', 5, 1],
  ['18CS54', 'Automata Theory and Computability', 5, 1],
  ['18CS52', 'Computer Networks and Security', 5, 1],
  ['18CS51', 'Management, Entrepreneurship for IT industry', 5, 1],
];

var staff = [
  ['1STCS01','Kartheek G C R','M','kartheek@cmrit.ac.in',953534298,'1234',1],
  ['1STCS02', 'Sagarika Behera', 'F', 'sagarika@gmail.com', 4567765, '1234', 1],
  ['1STCS03', 'Smitha N', 'F', 'smitha@cmrit.ac.in', 2345654, '1234', 1],
  ['1STCS04', 'Shivaraj B', 'M', 'shivaraj@cmrit.ac.in', 9876677, '1234', 1],
  ['1STCS05', 'Shanthi M B', 'F', 'shanthi@cmrit.ac.in', 98765456, '1234', 1],
  ['1STCS06', 'Sherly Noel', 'F', 'sherly@cmrit.ac.in', 98778899, '1234', 1],  
];

var user = [
  ['1STCS01','kartheek@cmrit.ac.in','1234',0],
  ['1STCS02','sagarika@gmail.com','1234', 0],
  ['1STCS03','smitha@cmrit.ac.in', '1234',0],
  ['1STCS04','shivaraj@cmrit.ac.in', '1234',0],
  ['1STCS05','shanthi@cmrit.ac.in', '1234',0],
  ['1STCS06','sherly@cmrit.ac.in','1234', 0],

  ['1CR19CS12','abhi19cs@cmrit.ac.in','1234',1],
  ['1CR19CS11','abhikumar19cs@cmrit.ac.in','1234',1],
  ['1CR19CS02','aditee19cs@cmrit.ac.in','1234',1],
  ['1CR19CS18','bhumika19cs@cmrit.ac.in','1234',1],
  ['1CR19CS38','deppu19cs@cmrit.ac.in','1234',1],
  ['1CR19CS24','devika19cs@cmrit.ac.in','1234',1],
  ['1CR19CS41','girish19cs@cmrit.ac.in','1234',1],
  ['1CR19CS99','raj19cs@cmrit.ac.in','1234',1],
  ['1CR19CS109','jayashree19cs@cmrit.ac.in','1234',1],
  ['1CR19CS101','komal19cs@cmrit.ac.in','1234',1],

  ['1CR19CS132','rakr19cs@cmrit.ac.in','1234',1],
  ['1CR19CS121','prah19cs@cmrit.ac.in','1234',1],
  ['1CR19CS123','prat19cs@cmrit.ac.in','1234',1],
  ['1CR19CS124','prav19cs@cmrit.ac.in','1234',1],
  ['1CR19CS126','visk19cs@cmrit.ac.in','1234',1],
  ['1CR19CS091','man19cs@cmrit.ac.in','1234',1],
  ['1CR19CS122','pratb19cs@cmrit.ac.in','1234',1],
  ['1CR19CS134','ranj19cs@cmrit.ac.in','1234',1],
  ['1CR19CS120','pooj19cs@cmrit.ac.in','1234',1],
  ['1CR19CS116','nara19cs@cmrit.ac.in','1234',1],

  ['1CR19CS162','zain19cs@cmrit.ac.in','1234',1],
  ['1CR19CS161','yuvr19cs@cmrit.ac.in','1234',1],
  ['1CR19CS160','yashit19cs@cmrit.ac.in','1234',1],
  ['1CR19CS148','yashnegi19cs@cmrit.ac.in','1234',1],
  ['1CR19CS158','viskumar19cs@cmrit.ac.in','1234',1],
  ['1CR19CS144','vigesh19cs@cmrit.ac.in','1234',1],
  ['1CR19CS151','trip19cs@cmrit.ac.in','1234',1],
  ['1CR19CS149','varunkc19cs@cmrit.ac.in','1234',1],
  ['1CR19CS168','ullasmis19cs@cmrit.ac.in','1234',1],
  ['1CR19CS145','tarun19cs@cmrit.ac.in','1234',1],
];

var semstaff = [
  [1, 5, '18CS53', '1STCS01'],
  [2, 5, '18CS56', '1STCS03'],
  [3, 5, '18CS55', '1STCS06'],
  [4, 5, '18CS54', '1STCS02'],
  [5, 5, '18CS52', '1STCS04'],
  [6, 5, '18CS51', '1STCS05'],
];

var class_staff = [
  [1, 'A', 1],
  [2, 'B', 1],
  [3, 'C', 1],
  [4, 'A', 2],
  [5, 'B', 2],
  [6, 'C', 2],
  [7, 'A', 3],
  [8, 'B', 3],
  [10, 'A', 4],
  [11, 'B', 4],
  [12, 'C', 4],
  [13, 'B', 5],
  [14, 'C', 5],
  [15, 'B', 6],
];

var student = [
  ['1CR19CS12','Abhinav Kumar','M','2001-01-21','abhi19cs@cmrit.ac.in','Bangalore',9987665,'1234',5,'A',1],
  ['1CR19CS11','Abhishek Kumar','M','2001-10-23','abhikumar19cs@cmrit.ac.in','Bangalore',99857665,'1234',5,'A',1],
  ['1CR19CS02','Aditee Kumari','F','2001-12-12','aditee19cs@cmrit.ac.in','Delhi',987665,'1234',5,'A',1],
  ['1CR19CS18','Bhumika A','F','2000-11-02','bhumika19cs@cmrit.ac.in','Kolar',998765,'1234',5,'A',1],
  ['1CR19CS38','Deepu M','M','2001-12-07','deppu19cs@cmrit.ac.in','Bangalore',98987665,'1234',5,'A',1],
  ['1CR19CS24','Devika S','F','2001-02-12','devika19cs@cmrit.ac.in','Chitradurga',91123322,'1234',5,'A',1],
  ['1CR19CS41','Girish G S','M','2000-12-12','girish19cs@cmrit.ac.in','Bangalore',9980065,'1234',5,'A',1],
  ['1CR19CS99','Harsh Raj','M','2000-12-18','raj19cs@cmrit.ac.in','Bangalore',9007665,'1234',5,'A',1],
  ['1CR19CS109','Jayshree','F','2001-02-01','jayashree19cs@cmrit.ac.in','Bangalore',99832111,'1234',5,'A',1],
  ['1CR19CS101','Komal','F','2001-09-11','komal19cs@cmrit.ac.in','Bangalore',9987665,'1234',5,'A',1],

  ['1CR19CS132','Rakshith R','M','2001-07-20','rakr19cs@cmrit.ac.in','Bangalore',9987665,'1234',5,'B',1],
  ['1CR19CS121','Prashanth N','M','2001-09-13','prah19cs@cmrit.ac.in','Bangalore',99857665,'1234',5,'B',1],
  ['1CR19CS123','Prathik Kumar Mishra','M','2001-03-02','prat19cs@cmrit.ac.in','Delhi',987665,'1234',5,'B',1],
  ['1CR19CS124','Praveen Kumar E S','M','2001-01-02','prav19cs@cmrit.ac.in','Kolar',998765,'1234',5,'B',1],
  ['1CR19CS126','Vishal R S','M','2001-03-07','visk19cs@cmrit.ac.in','Bangalore',98987665,'1234',5,'B',1],
  ['1CR19CS091','Manu T','M','2001-02-21','man19cs@cmrit.ac.in','Chitradurga',91123322,'1234',5,'B',1],
  ['1CR19CS122','Prathiba M','F','2001-09-18','pratb19cs@cmrit.ac.in','Bangalore',9980065,'1234',5,'B',1],
  ['1CR19CS134','Ranjana H S','F','2001-12-13','ranj19cs@cmrit.ac.in','Bangalore',9007665,'1234',5,'B',1],
  ['1CR19CS120','Poojitha','F','2001-09-21','pooj19cs@cmrit.ac.in','Bangalore',99832111,'1234',5,'B',1],
  ['1CR19CS116','Nara Suma','M','2001-07-11','nara19cs@cmrit.ac.in','Bangalore',9987665,'1234',5,'B',1],

  ['1CR19CS162','Zain Ahmed','M','2001-01-20','zain19cs@cmrit.ac.in','Bangalore',9987665,'1234',5,'C',1],
  ['1CR19CS161','Yuvraj Sooraj','M','2001-09-23','yuvr19cs@cmrit.ac.in','Bangalore',99857665,'1234',5,'C',1],
  ['1CR19CS160','Yashitha','F','2001-12-02','yashit19cs@cmrit.ac.in','Delhi',987665,'1234',5,'C',1],
  ['1CR19CS148','Yash Negi','M','2000-01-02','yashnegi19cs@cmrit.ac.in','Kolar',998765,'1234',5,'C',1],
  ['1CR19CS158','Vivek Kumar','M','2001-09-07','viskumar19cs@cmrit.ac.in','Bangalore',98987665,'1234',5,'C',1],
  ['1CR19CS144','Vignesh B','M','2001-02-01','vigesh19cs@cmrit.ac.in','Chitradurga',91123322,'1234',5,'C',1],
  ['1CR19CS151','Vedant Tripathi','M','2000-12-18','trip19cs@cmrit.ac.in','Bangalore',9980065,'1234',5,'C',1],
  ['1CR19CS149','Varun K C ','M','2000-12-13','varunkc19cs@cmrit.ac.in','Bangalore',9007665,'1234',5,'C',1],
  ['1CR19CS168','Ullas Mishra','M','2001-02-21','ullasmis19cs@cmrit.ac.in','Bangalore',99832111,'1234',5,'C',1],
  ['1CR19CS145','Tarun S N','M','2001-07-11','tarun19cs@cmrit.ac.in','Bangalore',9987665,'1234',5,'C',1],
];


db.query('INSERT INTO department VALUES ?', [department], (err, res) => {
  if (err) throw err;

  console.log('Department data updated.');
});

db.query('INSERT INTO student VALUES ?', [student], (err, res) => {
  if (err) throw err;

  console.log('Student data updated.');
});

db.query('INSERT INTO staff VALUES ?', [staff], (err, res) => {
  if (err) throw err;

  console.log('Staff data updated.');
});

db.query('INSERT INTO course VALUES ?', [course], (err, res) => {
  if (err) throw err;

  console.log('Course data inserted.');
});

db.query('INSERT INTO semstaff VALUES ?', [semstaff], (err, res) => {
  if (err) throw err;

  console.log('Semstaff data inserted.');
});

db.query('INSERT INTO class VALUES ?', [class_staff], (err, res) => {
  if (err) throw err;

  console.log('Class data inserted.');
});

db.query('INSERT INTO user VALUES ?', [user], (err, res) => {
  if (err) throw err;

  console.log('User data inserted.');
});
