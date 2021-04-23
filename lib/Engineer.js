const Employee = require('../lib/Employee');

function Engineer(name, id, email, github){
    Employee.call(this, name, id, email);
    this.github = github;
    
    Engineer.prototype.getInfo = function(){
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            github: this.github
        }
    }

    Engineer.prototype.getRole = function(){
        return 'Engineer';
    }

    Engineer.prototype.getGitHub = function(){
        return this.github;
    }


};

module.exports = Engineer;