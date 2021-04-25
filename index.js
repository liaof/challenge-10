const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateCard = require('./src/html-template');
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
            message: "Enter the team manager's employee ID",
            validate: input => {
                if (!isNaN(input)) {
                  return true;
                } else {
                  console.log('    Error: Please enter an ID number');
                  return false;
                }
            }
        },{ 
            type: 'input',
            name: 'email',
            message: "Enter the team manager's email address",
            validate: input => {
                if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)){
                    return true;
                } else {
                    console.log('   Error:Please enter a valid email address');
                    return false;
                }
            }
        },{ 
            type: 'input',
            name: 'office',
            message: "Enter the team manager's office number",
            validate: input => {
                if (!isNaN(input)) {
                  return true;
                } else {
                  console.log('    Error: Please enter an office number');
                  return false;
                }
            }
        }
    ]).then(data =>{
        const manager = new Manager(data.name, data.id, data.email, data.office);
        employeeRoster.push(manager);
        //console.log(employeeRoster[0].getRole());
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
            message: "Enter the engineer's employee ID",
            validate: input => {
                if (!isNaN(input)) {
                  return true;
                } else {
                console.log('    Error: Please enter an ID number');
                  return false;
                }
            }
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
            return menuQuestions(employeeRoster);
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
            message: "Enter the intern's employee ID",
            validate: input => {
                if (!isNaN(input)) {
                  return true;
                } else {
                  console.log('    Error: Please enter an ID number');
                  return false;
                }
            }
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
            return menuQuestions(employeeRoster);
        }
    });
};

const menuQuestions = function(employeeRoster){
   
    return inquirer.prompt({
        type: 'checkbox',
        name: 'next',
        message: 'Which role would you like to enter next? Both choices to end the program and generate your html',
        choices: ['Engineer','Intern'] 
    }).then(data=>{
        if (JSON.stringify(data)==='{"next":["Engineer"]}')return engineerQuestions(employeeRoster);
        else if (JSON.stringify(data)==='{"next":["Intern"]}')  return internQuestions(employeeRoster) ;
        else if (JSON.stringify(data)==='{"next":["Engineer","Intern"]}') return employeeRoster;
        //no option was selected
        else {console.log("Please select an option to proceed or both to terminate the program"); return menuQuestions(employeeRoster);}
    })
};


managerQuestions().then(menuQuestions)//.then(internQuestions)
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