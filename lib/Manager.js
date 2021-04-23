const Employee = require('../lib/Employee');

function Manager(name, id, email, office){
    Employee.call(this, name, id, email);
    this.office = office;
    
    Manager.prototype.getInfo = function(){
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            office: this.office
        }

    }

    Manager.prototype.getRole = function(){
        return 'Manager';
    }
};

module.exports = Manager;