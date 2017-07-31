var WeatherAdmin = require("./clozeCard");
var WeatherAdmin = require("./basicCard");
var inquirer = require("inquirer");

inquirer.prompt([
  name:"action",
  type:"list",
  message:"What do you want to do?",
  choices:[
    "Make Basic Type Flash Cards",
    "Make Cloze Type Flash Cards",
    "Review Basic Type Flash Cards",
    "Review Cloze Type Flash Cards"
  ]
])
.then(function(ans){
  
})
