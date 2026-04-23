class Employee {
    constructor(id,name,salary,department){
        this.id = id;
        this.name=name;
        this.salary = salary;
        this.department = department;
    }
    work(){
        console.log("Employee Working");
    }

    showDetails(){
        console.log(this.id);
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}

class Developer extends Employee {
    @overridden
    work(){
        console.log("Developer is working");
    }

    
}