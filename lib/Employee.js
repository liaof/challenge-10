function Employee(name,id,email){
    this.name = name;
    this.id = id;
    this.email = email;

    Employee.prototype.getInfo = function (){
        return{
            name: this.name,
            id: this.id,
            email: this.email
        }
    }

    Employee.prototype.getRole = function (){
        return 'Employee';
    }


    
};

module.exports = Employee;