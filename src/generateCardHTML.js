function generateCard(employeeArr){
    
  const n = employeeArr.length;
  console.log("There are "+n+" employees");
  console.log(employeeArr[0].getRole());
  
  var cardHTML = ``;
 // for (var i = 0; i<n;i++){
 //     //console.log(i);
 //     //if it's a manager
 //     if(employeeArr[i].getRole()==='Manager'){
 //         const {name, id, email, office} = employeeArr[0].getInfo();
 //         console.log(name, id, email, office);
 //         cardHTML+= `
 //         <h2>Name: ${name}</h2>
 //         <h2>ID: ${id}</h2>
 //         <h2>Email: ${email}</h2>
 //         <h2>Office: ${office}</h2>
 //         <h2>Role: ${employeeArr[0].getRole()}</h2>
 //         `
 //     }
 //     if(employeeArr[i].getRole()==='Engineer'){
 //       const {name, id, email, github} = employeeArr[i].getInfo();
 //       cardHTML+= `
 //       <h2>Name: ${name}</h2>
 //       <h2>ID: ${id}</h2>
 //       <h2>Email: ${email}</h2>
 //       <h2>Github: ${github}</h2>
 //       <h2>Role: ${employeeArr[i].getRole()}</h2>
 //       `
 //     }
 //     else{return;};

    return `
        ${employeeArr.filter(({office})=>office)
            .map(({name, id, email, office})=>{
                return `
                <div>
                    <h2>Name: ${name}</h2>
                    <h2>ID: ${id}</h2>
                    <h2>Email: ${email}</h2>
                    <h2>Office: ${office}</h2>
                    <h2>Role: Manager</h2>
                </div>
                `;
            })
        }
        ${employeeArr.filter(({github})=>github)
            .map(({name, id, email, github})=>{
                return `
                <div>
                    <h2>Name: ${name}</h2>
                    <h2>ID: ${id}</h2>
                    <h2>Email: ${email}</h2>
                    <h2>Github: ${github}</h2>
                    <h2>Role: Engineer</h2>
                </div>
                `;
            })
        }
        ${employeeArr.filter(({school})=>school)
            .map(({name, id, email, school})=>{
                return `
                <div>
                    <h2>Name: ${name}</h2>
                    <h2>ID: ${id}</h2>
                    <h2>Email: ${email}</h2>
                    <h2>School: ${school}</h2>
                    <h2>Role: Intern</h2>
                </div>
            `;
        })
    }
    `;

//    return `${employeeArr.filter(({})=>{})
//        .map(({name, id, email})=>{
//        return `
//            <div>
//                <h2>Name: ${name}</h2>
//                <h2>ID: ${id}</h2>
//                <h2>Email: ${email}</h2>
//      
//                <h2>Role: ${getRole()}</h2>
//            </div>
//        `
//    })}`
};
 


module.exports = data =>{

    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="./style.css"/>
    </head>

    <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3"></h1>
    
        <div class = "card">
        ${generateCard(data)}</div>
      </div>
    </header>
    <main class="container my-5">

    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
    </footer>
  </body>
  </html>
    `
};