const Manager = require('./lib/Manager.js');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const generateHtml = require('./lib/GenerateHtml.js');
var prompting = true;
var oldString=``;
var engineerArray=[];
var internArray = [];






// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs= require('fs');
const { number } = require('yargs');

 const util = require('util');
const { resolve } = require('path');



 const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input

const promptUser = async() => {
    const data = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is team manager's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is team manager's id",
      },{
        type: 'input',
        name: 'email',
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
     const employee = new Employee(data.name,data.id,data.email);
    const manager = new Manager(data.name,data.id,data.email,data.officeNumber); 
    console.log("My employee name is ==="+employee.name+"My employee email is ===+"+manager.name);
    console.log(data);
    return manager;
    };


   const promptForTeamMember = async(manager) =>{
      console.log("I am inside prompt for team member");
      console.log("My manager data is  ------"+manager);
      
    //const manager = new Manager(data.officeNumber);
    
    const teamMemberData = await inquirer.prompt([
        {
            type: 'list',
          message: 'Which type of team member would you like to add',
          name: 'teamMember',
          choices: ['Engineer', 'Intern', "I don't want to add any team member"]
          }
    ]);
    console.log("srdfdf "+teamMemberData.teamMember );
    processTeamMember(teamMemberData.teamMember,manager);
    //const engineerRender =  generateHtml.generateHtmlEngineer(i.manager,i.engineerArray);
    //resolve(engineerRender);
 //   const output = JSON.stringify(i);
 /* 
 fs.writeFile("./index.html", output, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("./index.html", "utf8"));
      }
    });
    /* fs.writeFile("./index.html", i, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("./index.html", "utf8"));
      }
    }); */
    //.then(()=>console.log("%%%%%%%%% "+this.i))
    //.catch((err)=>console.error(err)) 
    // console.log("******* "+i);
    
  }
  

  const processTeamMember = async(teamMemberValue,manager)=>{
    if(teamMemberValue === "I don't want to add any team member"){
      const engineerRender =  generateHtml.generateHtmlEngineer(manager,engineerArray,internArray);
   
      fs.writeFile("./index.html", engineerRender, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("./index.html", "utf8"));
        }
      })
      return resolve("File Written");
    } 
    else{
      console.log("This will append team member data");
      if(teamMemberValue ==="Engineer"){
        console.log("I will keep engineer data");
        //oldString = generateHtml.renderHtml2(teamMemberData);
        const engineerQuestions= await promptEngineerQuestions()
        .then((engineerQuestions)=>{
        console.log(engineerQuestions)
        const employee = new Employee(engineerQuestions.name,engineerQuestions.id,engineerQuestions.email);
        console.log("222222 "+employee);
        const engineer = new Engineer(engineerQuestions.name,engineerQuestions.id,engineerQuestions.email,engineerQuestions.engineerGithub);
        console.log(engineer);
        engineerArray.push(engineer);
        console.log(engineerArray);
        
      })
      .then (()=>console.log("This is a success")) 
      .catch((err)=>console.error(err))   
    }
      
      else if(teamMemberValue ==="Intern"){
      console.log("I will keep intern data");
      const internQuestions= await promptInternQuestions()
        .then((internQuestions)=>{
        console.log(internQuestions)
        const employee = new Employee(internQuestions.name,internQuestions.id,internQuestions.email);
        console.log("222222 "+employee);
        const intern = new Intern(internQuestions.name,internQuestions.id,internQuestions.email,internQuestions.internSchool);
        console.log(intern);
        internArray.push(intern);
        console.log(internArray);
        
      })
      .then (()=>console.log("This is a success")) 
      .catch((err)=>console.error(err))  
      }

    promptForTeamMember(manager);

    } 
  }

 
    
  


  const promptEngineerQuestions = async() => {
   
     const myEngineerAnswers =await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is team engineer's id",
      },
     {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?",
        validate: inputValidator ,
         validate: emailValidator  

        
    },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "What is your engineer's github username?",
        validate: inputValidator 
      //validate: numberValidator
      }
    ])
    return myEngineerAnswers;
   
  
  };


  const promptInternQuestions = async() => {
   
    const myInternAnswers =await inquirer.prompt([
     {
       type: 'input',
       name: 'name',
       message: "What is your intern's name?",
     },
     {
       type: 'input',
       name: 'id',
       message: "What is team intern's id",
     },
    {
       type: 'input',
       name: 'email',
       message: "What is your intern's email?",
       validate: inputValidator ,
        validate: emailValidator  

       
   },
     {
       type: 'input',
       name: 'internSchool',
       message: "What is your intern's school name?",
       validate: inputValidator 
     //validate: numberValidator
     }
   ])
   return myInternAnswers;
  
 
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
    
  .then((manager)  => promptForTeamMember(manager))
  
 //.then((finaloutput)=> console.log("bahar se aaraha hoon" + finaloutput)) 
  //.then((resultset)=> console.log("I am out" + resultset));  
  
}; 

// Function call to initialize app
 init(); 