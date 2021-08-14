var oldString =``;
var oldEngineerString = ``;
var oldInternString = ``;



const generateHtmlEngineer = (manager,engineerArray,internArray) =>{



    //style="width: 18rem;

    for(engineers of engineerArray){
        var newEngineerString = `
        <div class ="mb-4 col-12 col-lg-4"> 
            <div class="card">
                <div class="card-body bg-primary">
                    <h5 class="card-title ">${engineers.name}</h5>
                    <p class="card-text"><i class="fas fa-glasses"></i>  Engineer</p>
                </div>
                <ul class="list-group list-group-flush bg-secondary">
                    <li class="list-group-item">ID :${engineers.id}</li>
                    <li class="list-group-item">Email :<a href="mailto:${engineers.email}">${engineers.email}</a></li>
                    <li class="list-group-item">Github :${engineers.github}</li>
                </ul>
            </div>
        </div>
    
`

    oldEngineerString = oldEngineerString+newEngineerString;
    //console.log("old string is  "+oldEngineerString);
   
    }


    for(interns of internArray){
        var newInternString = `
        <div class ="mb-4 col-12 col-lg-4"> 
            <div class="card">
                <div class="card-body bg-primary">
                    <h5 class="card-title ">${interns.name}</h5>
                    <p class="card-text"><i class="fas fa-user-graduate"></i>  Intern</p>
                </div>
                <ul class="list-group list-group-flush bg-secondary">
                    <li class="list-group-item">ID :${interns.id}</li>
                    <li class="list-group-item">Email :<a href="mailto:${interns.email}">${interns.email}</a></li>
                    <li class="list-group-item">School :${interns.school}</li>
                </ul>
            </div>
        </div>
    
`

    oldInternString = oldInternString+newInternString;
    //console.log("old string is  "+oldEngineerString);
   
    }
   

    const managerStringTemplate = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
      <title>Team-Profile-Generator</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid jumbotron-area">
            <div class="container">
                <h1 class="display-4 text-center">My Team</h1>
                
            </div>
        </div>
        <div class ="container col-10 data-area">
            <div class ="row justify-content-center mb-5">
                <div class ="mb-4 col-12 col-lg-4"> 
                    <div class="card" >
            
                        <div class="card-body bg-primary">
                            <h5 class="card-title">${manager.name}</h5>
                            <p class="card-text"><i class="fas fa-mug-hot"></i>  Manager</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID :${manager.id}</li>
                        <li class="list-group-item">Email :<a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office Number :${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class ="container col-10 data-area">
        <div class ="row justify-content-center mb-5">
        ${oldEngineerString}
        ${oldInternString}
        </div>
        </div>
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script> 
    </body>
    </html>`
//console.log(managerStringTemplate);
console.log("Your Team is built");
return managerStringTemplate;

}


module.exports = {

    generateHtmlEngineer:generateHtmlEngineer

};