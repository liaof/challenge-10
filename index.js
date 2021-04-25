const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateCard = require('./src/generateCardHTML');
const { writeFile, copyFile } = require('./utils/generateSite.js');
var employeeRoster;

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
    ]).then(data =>{
        const manager = new Manager(data.name, data.id, data.email, data.office);
        employeeRoster.push(manager);
        console.log(employeeRoster[0].getRole());
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
        const engineer = new Engineer (data.name, data.id, data.email, data.github);
        employeeRoster.push(engineer);
        if(data.addAnother){
            return engineerQuestions(employeeRoster);
        } else {
            return employeeRoster;
        }
    });
};

const internQuestions = function(employeeRoster){
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
        const intern = new Intern(data.name, data.id, data.email, data.school);
        employeeRoster.push(intern);
        if(data.addAnother){
            return internQuestions(employeeRoster);
        } else {
            return employeeRoster;
        }
    });
};



managerQuestions().then(engineerQuestions).then(internQuestions)
.then(employeeRoster=>{
    return generateCard(employeeRoster);
    
}).then(pageHTML =>{
    return writeFile(pageHTML);
}).then((writeFileReply)=>{
    console.log(writeFileReply);
    return copyFile();
}).then((copyfileReply)=>{
    console.log(copyfileReply);

}).catch(err=>{
    console.log(err);
});