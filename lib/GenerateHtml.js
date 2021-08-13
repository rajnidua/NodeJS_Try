var oldString =``;


const renderhtml=(data,employeeString)=>{
    return `<!DOCTYPE html>
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
                <h5 class="card-title">${data.managerName}</h5>
                <p class="card-text">Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID :${data.managerId}</li>
                <li class="list-group-item">Email :<a href="">${data.managerEmail}</a></li>
                <li class="list-group-item">Office Number :${data.officeNumber}</li>
            </ul>
            
            </div>
        </div>
    </div>
    ${employeeString}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script> 
</body>
</html>`
}

const renderHtml2 = (teamMemberData) => {
    newString = `<div class ="container">
    <div class="card" style="width: 18rem;">
    
        <div class="card-body">
            <h5 class="card-title">${teamMemberData.name}</h5>
            <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID :${teamMemberData.id}</li>
            <li class="list-group-item">Email :<a href="">${teamMemberData.engineerEmail}</a></li>
            <li class="list-group-item">Office Number :${teamMemberData.github}</li>
        </ul>
        
        </div>
    </div>
</div>`
    oldString = oldString+newString;
    return oldString;
    
}




module.exports = {renderhtml:renderhtml,
    renderHtml2:renderHtml2};