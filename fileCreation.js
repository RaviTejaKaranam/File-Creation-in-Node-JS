const fs = require('fs') //Importing the file systems module
const content = new Date() //Setting up the content for the new file
const fileName = new Date().getTime() + '.txt'; //Naming the new file

//Writing the file Asynchronouly
fs.writeFile(`./${fileName}`, content, (err)=>{
  if(err){
    console.log(err)
    return
  }
  else{
    console.log("Written Successfully");
  }
})