const fs = require('fs');
const inquirer = require('inquirer');

const managerQuestions = function(employeeRoster){

    if(!employeeRoster){
        employeeRoster = [];
    }
 
    return inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: "Enter the team manager's name"
        },{ 
            type: 'input',
            name: 'id',
            message: "Enter the team manager's employee ID"
        },{ 
            type: 'input',
            name: 'email',
            message: "Enter the team manager's email address"
        },{ 
            type: 'input',
            name: 'office',
            message: "Enter the team manager's office number"
        }
    ]).then(managerData =>{
        employeeRoster.push(managerData);
        console.log(employeeRoster[0]);
        return employeeRoster
    });
};

const engineerQuestions = function(employeeRoster){

    if(!employeeRoster){
        employeeRoster = [];
    }
    return inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name"
        },{ 
            type: 'input',
            name: 'id',
            message: "Enter the engineer's employee ID"
        },{ 
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email address"
        },{ 
            type: 'input',
            name: 'github',
            message: "Enter the engineer's github username"
        },{
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add more engineers',
            default: false
        }
    ]).then(data =>{
        employeeRoster.push(data);
        if(data.addAnother){
            return engineerQuestions(employeeRoster);
        } else {
            return employeeRoster;
        }
    });
};

const internQuestions = function(){
    return inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: "Enter the intern's name"
        },{ 
            type: 'input',
            name: 'id',
            message: "Enter the intern's employee ID"
        },{ 
            type: 'input',
            name: 'email',
            message: "Enter the intern's email address"
        },{ 
            type: 'input',
            name: 'school',
            message: "Enter the intern's school"
        },{
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add more interns',
            default: false
        }
    ]).then(data =>{
        employeeRoster.push(data);
        if(data.addAnother){
            return internQuestions(employeeRoster);
        } else {
            return employeeRoster;
        }
    });
};



managerQuestions().then(engineerQuestions).then(internQuestions);