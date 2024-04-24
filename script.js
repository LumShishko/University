function Student(name, surname, dateofbirth, id, level){
    this.name = name;
    this.surname = surname;
    this.dateofbirth = dateofbirth;
    this.id = id;
    this.level = level;

};

Student.prototype.displayDetails = function(){
    console.log("Name: " + this.name)
    console.log("Surname: " + this.surname)
    console.log("Date of birth: " + this.dateofbirth)
    console.log("Id: " + this.id)
    console.log("Level: " + this.level)
}


function University() {
    this.students = [];
}

University.prototype.addStudent = function(student) {
    this.students.push(student);
}

University.prototype.removeStudent = function(student) {
    this.students.pop(student);
}





University.prototype.displayStudents = function() {
    console.log("Studentet ne universitetin tone jane: ");
    for(var i = 0;i < this.students.length; i++) {
        console.log("Students:" + (i + 1) + " : ");
        this.students[i].displayDetails();
    }
}

var university = new University();

var student1 = new Student("George", "Orwell", 1994 , 21 , 32);
var student2 = new Student("John", "Doe", 1999 , 42 , 42);
var student3 = new Student("Joseph", "Parker", 1992 , 56 , 24);


university.addStudent(student1);
university.addStudent(student2);
university.addStudent(student3);

university.displayStudents();
