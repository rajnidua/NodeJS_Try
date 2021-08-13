const Employee = require('./lib/Employee.js');
const generateHtml = require('./lib/GenerateHtml.js');
var prompting = true;
var oldString=``;
const employee = new Employee('xyz','3','xyz.email.com');
employee.getName();



// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs= require('fs');
const { number } = require('yargs');

 const util = require('util');



 const writeFileAsync = async(finalString)=>await util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input

const promptUser = async() => {
    const data = await inquirer.prompt([
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
    console.log(data);
    return data;
    };


   const promptForTeamMember = async(managerData,oldString) =>{
      console.log("I am inside prompt for team member");
      console.log("My manager data is  ------"+managerData);
      //let oldString =``;
      const managerData1 = managerData;
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
        const finalString = generateHtml.renderhtml(managerData,oldString);
        console.log(finalString);
        return finalString;
        //return generateHtml.renderhtml(managerData,oldString);
    } 
    else{
      console.log("This will append team member data");

       oldString = generateHtml.renderHtml2(teamMemberData);
    //writeFileAsync('./index.html', myAnswer);
    console.log(oldString);
      promptForTeamMember(managerData,oldString);
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
   //.then((answers)=>generateHtml.renderhtml(answers))
   
    //.then((myAnswer)=>{//writeFileAsync('./index.html', myAnswer)
   
   
  .then((answers)=>promptForTeamMember(answers,oldString))
  .then((finalString)=>writeFileAsync('./index.html', finalString))

    
  .then (()=>console.log("This is a success")) 
  .catch((err)=>console.error(err)) 
}; 

// Function call to initialize app
 init();