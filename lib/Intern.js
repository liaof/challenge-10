const Employee = require('../lib/Employee');

function Intern(name, id, email, school){
    Employee.call(this, name, id, email);
    this.school = school;
    
    Intern.prototype.getInfo = function(){
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            school: this.school
        }
    }

    Intern.prototype.getRole = function(){
        return 'Intern';
    }

    Intern.prototype.getSchool = function(){
        return this.school;
    }


};

module.exports = Intern;