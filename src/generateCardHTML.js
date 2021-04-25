function generateCard(employeeArr){
    
  const n = employeeArr.length;
  console.log("There are "+n+" employees");
  console.log(employeeArr[0].getRole());
  
 
    return `
        ${employeeArr.filter(({office})=>office)
            .map(({name, id, email, office})=>{
                return `
                <div class = "card w-25 mx-auto my-50 py-30">
                    <p>Name: ${name}</p
                    <p>ID: ${id}</p>
                    <p><a href = 'mailto:${email}'>Email: ${email}</a></h2>
                    <p>Office: ${office}</p>
                    <p>Role: Manager</p>
                </div>
                `;
            })
        }
        ${employeeArr.filter(({github})=>github)
            .map(({name, id, email, github})=>{
                return `
                <div class = "card w-25 mx-auto my-50 py-30">
                    <p>Name: ${name}</p>
                    <p>ID: ${id}</p>
                    <p><a href = 'mailto:${email}'>Email: ${email}</a></h2>
                    <p><a href = 'https://github.com/${github}'>Github: ${github}</p>
                    <p>Role: Engineer</p>
                </div>
                `;
            })
        }
        ${employeeArr.filter(({school})=>school)
            .map(({name, id, email, school})=>{
                return `
                <div class = "card w-25 mx-auto my-50 py-30">
                    <p>Name: ${name}</p>
                    <p>ID: ${id}</p>
                    <p><a href = 'mailto:${email}'>Email: ${email}</a></h2>
                    <p>School: ${school}</p>
                    <p>Role: Intern</p>
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
            <h1 class="page-title text-secondary bg-dark m-auto py-2 px-3">Team Roster</h1>
        </div>

        
    </header>
    <main class="container my-5">
 
            <div class = "flex-row">
                ${generateCard(data)}
            </div>

    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
    </footer>
  </body>
  </html>
    `
};