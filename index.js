const Employee = require('./lib/Employee.js');
const generateHtml = require('./lib/GenerateHtml.js');
var prompting = true;

const employee = new Employee('xyz','3','xyz.email.com');
employee.getName();


// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs= require('fs');
const { number } = require('yargs');

 const util = require('util');



 const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input

const promptUser = () => {
    const data = inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is team manager's name?",
      },
      {
        type: 'input',
        name: 'managerId',
        message: "What is team manager's id",
      },{
        type: 'input',
        name: 'managerEmail',
        message: "What is team manager's email?",
        validate: inputValidator ,
         validate: emailValidator  

        
    },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is your manager's office number?",
        validate: inputValidator ,
      validate: numberValidator
      }
    ]);
    return data;
    };


   const promptForTeamMember = async() =>{
      console.log("I am inside prompt for team member");
    const teamMemberData = await inquirer.prompt([
        {
            type: 'list',
          message: 'Which type of team member would you like to add',
          name: 'teamMember',
          choices: ['Engineer', 'Intern', "I don't want to add any team member"]
          }
    ]);
    console.log("srdfdf "+teamMemberData.teamMember );
    if(teamMemberData.teamMember === "I don't want to add any team member"){
        prompting = false;
        console.log("value inside propmting is "+prompting);
        return teamMemberData;
    } 
    else{
      console.log("This will append team member data");
      
      promptForTeamMember();
    }
    
  } 


  const promptEngineerQuestions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "What is your engineer's name?",
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "What is your engineer's id",
      },{
        type: 'input',
        name: 'engineerEmail',
        message: "What is your engineer's email?",
        validate: inputValidator ,
         validate: emailValidator  

        
    },
      {
        type: 'input',
        name: 'github',
        message: "What is your engineer's github username?",
        validate: inputValidator 
      //validate: numberValidator
      },{
        type: 'list',
      message: 'Which type of team member would you like to add',
      name: 'teamMember',
      choices: ['Engineer', 'Intern', "I don't want to add any team member"],
      }
    ]);
  };

  
  const inputValidator=async (input) => {
    {
        if (input) {
            
            return true;
            
        } else {
            console.log("You need to provide manager's email id  to continue!");
            return false;
        }
    }
  }
 

  const emailValidator =async(input)=> {
  
    //using regex for email validation
     valid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(input);

     if (valid) {
       console.log("   The email id is valid,you can continue!");
         return true;
     } else {
         console.log(".  Please enter a valid email")
         return false;
     }
 }


 const numberValidator = async(input) => {
  
    //using regex for email validation
     valid = /^(0|\+?[1-9]\d*)$/.test(input);

     if (valid) {
       console.log("   The number is valid,you can continue!");
         return true;
     } else {
         console.log("  Please enter a positive integer");
         return false;
     }
 }


 
 
  



const init = async () => {
  
   promptUser()
   .then((answers)=>{
    const myAnswer = generateHtml.renderhtml(answers);
    writeFileAsync('./index.html', myAnswer);
   
   })
   .then(()=>promptForTeamMember())

    
  .then (()=>console.log("This is a success")) 
  .catch((err)=>console.error(err)) 
}; 

// Function call to initialize app
 init();