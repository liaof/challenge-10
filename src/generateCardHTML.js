function generateCard(employeeRoster){
    
  const n = employeeRoster.length;
  console.log("There are "+n+" employees");
  console.log(employeeRoster[0].getRole());
  

  for (var i = 0; i<n;i++){
      //console.log(i);
      //if it's a manager
      if(employeeRoster[i].getRole()==='Manager'){
          const {name, id, email, office} = employeeRoster[0].getInfo();
          console.log(name, id, email, office);
          return `
          <h2>Name: ${name}</h2>
          <h2>ID: ${id}</h2>
          <h2>Email: ${email}</h2>
          <h2>Office: ${office}</h2>
          <h2>Role: ${employeeRoster[0].getRole()}
          `
      }
      if(employeeRoster[i].getRole()==='Engineer'){
        const {name, id, email, github} = employeeRoster[i].getInfo();
        return `
        <h2>Name: ${name}</h2>
        <h2>ID: ${id}</h2>
        <h2>Email: ${email}</h2>
        <h2>Github: ${github}</h2>
        <h2>Role: ${employeeRoster[i].getRole()}
        `
      }
      else{return;};
  };
  
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