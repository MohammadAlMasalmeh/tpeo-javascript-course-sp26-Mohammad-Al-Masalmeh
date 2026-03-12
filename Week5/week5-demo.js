// WEEK 5 DEMO: 
/* 
Let's create a constructor for a Student, which takes in their first name, 
last name, university, major, and graduation year. 
*/ 
function Student(firstName, lastName, university, major, gradYear){
    this.firstName = firstName;
    this.lastName = lastName;
    this.university = university;
    this.major = major;
    this.gradYear = gradYear;
}

let Joyce = new Student("Joyce", "Zou", "UT Austin", "CS + Neuro", "2029");



/*
Now, create a constructor for a Course, which will take in a student taking the class, 
the class name, and the class location. 
*/ 

function Course(student, className, classLocation){
    this.student = student;
    this.className = className;
    this.classLocation = classLocation;
}

let Keondre = new Student("Keondre", "Reese", "UT Austin", "Informatics", "2028");
let keondreCourse = new Course(Keondre, "TPEO Javascript", "GDC");

console.log(keondreCourse);
console.log(keondreCourse.student.university);