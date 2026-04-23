let student = {
    name: "Girish",
    age: 23,
    cgpa: 9.0,

    study: function() {
        console.log(this.name,"Studying.");
    },

    sleep: function() {
        console.log(this.name,"sleep.");
    }
};

console.log(student.name);
console.log(student.age);
console.log(student.cgpa);
student.sleep();
student.study();