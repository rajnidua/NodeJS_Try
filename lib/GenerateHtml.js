var oldString =``;
var oldEngineerString = ``;
var oldInternString = ``;



const generateHtmlEngineer = (manager,engineerArray,internArray) =>{



    //style="width: 18rem;

    for(engineers of engineerArray){
        var newEngineerString = `
        <div class ="mb-4 col-12 col-lg-4"> 
    <div class="card" ">
    
        <div class="card-body">
            <h5 class="card-title bg-primary">${engineers.name}</h5>
            <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush bg-secondary">
            <li class="list-group-item">ID :${engineers.id}</li>
            <li class="list-group-item">Email :<a href="">${engineers.email}</a></li>
            <li class="list-group-item">Github :${engineers.github}</li>
        </ul>
        
        </div>
    
`

    oldEngineerString = oldEngineerString+newEngineerString;
    //console.log("old string is  "+oldEngineerString);
   
    }


    for(interns of internArray){
        var newInternString = `
        <div class ="mb-4 col-12 col-lg-4"> 
    <div class="card" ">
    
        <div class="card-body">
            <h5 class="card-title bg-primary">${interns.name}</h5>
            <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush bg-secondary">
            <li class="list-group-item">ID :${interns.id}</li>
            <li class="list-group-item">Email :<a href="">${interns.email}</a></li>
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
      <meta name="Description" content="Enter your description here" />
    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
      <title>Cards // Bootstrap UI Components</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
        <div class ="container">
            <div class="card" style="width: 18rem;">
            
                <div class="card-body">
                    <h5 class="card-title">${manager.name}</h5>
                    <p class="card-text">Manager</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID :${manager.id}</li>
                    <li class="list-group-item">Email :<a href="">${manager.email}</a></li>
                    <li class="list-group-item">Office Number :${manager.officeNumber}</li>
                </ul>
                
                </div>
            </div>
        </div>
        <div class ="container col-10">
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
return managerStringTemplate;

}


module.exports = {
    //renderhtml:renderhtml,
    //renderHtml2:renderHtml2,
    generateHtmlEngineer:generateHtmlEngineer

};