var cloze = require("./clozeCard");
var basicCard = require("./basicCard");
var inquirer = require("inquirer");
var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "cards_DB"
});
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user

function start(){
  inquirer.prompt({
  type:"list",
  name:"action",
  message:"What do you want to do?",
  choices:[
    "Make Basic Type Flash Cards",
    "Make Cloze Type Flash Cards",
    "Review Basic Type Flash Cards",
    "Review Cloze Type Flash Cards"
  ]
})
.then(function(ans){
  console.log(ans);

  switch(ans.action){
    case "Make Basic Type Flash Cards":
      mkBasic();
      break;
    case "Make Cloze Type Flash Cards":
      mkCloze();
      break;
    case "Review Basic Type Flash Cards":
      revBasic();
      break;
    case "Review Cloze Type Flash Cards":
      revCloze();
      break;
  }

});

function mkBasic(){
  inquirer.prompt([
    {
    type:"input",
    name:"front",
    message:"whats the front?",
    },
    {
    type:"input",
    name:"back",
    message:"what do you want on the back?"
    }
  ]).then(function(ans){
    var stuff = new basicCard(ans.front, ans.back);
    connection.query(
      "INSERT INTO basicCard SET ?",
      {
        front: ans.front,
        back: ans.back
      },
      function(err) {
        if (err) throw err;
        console.log("Your card was created successfully!");
        console.log("-------------------------")    
      }
    );
  })
}
function mkCloze(){
  inquirer.prompt([
    {
      type:"input",
      name:"question",
      message:"what is the question(leave ... where the ans should be)?"
    },
    {
    type:"input",
    name:"answer",
    message:"whats the ans?",
    }
  ]).then(function(ans){
    connection.query(
      "INSERT INTO clozeCard SET ?",
      {
        question: ans.question,
        answer: ans.answer
      },
      function(err) {
        if (err) throw err;
        console.log("Your card was created successfully!");
        console.log("-------------------------")
        start();
      }
    );
});
}
function revBasic(){
  console.log("revbasic");
  var choiceArray =[];
    connection.query("SELECT * FROM basicCard", function(err, results) {
      if(err) throw err;
      for (var i = 0; i < results.length; i++) {
        choiceArray.push(results[i].item_name);
      }
    });
    console.log("-------------------------")
    start();
}
function revCloze(){
  console.log("revcloze");
  var questionArray=[];
  var answerArray=[];
  connection.query("SELECT * FROM clozeCard", function(err, results) {
    if(err) throw err;
    for (var i = 0; i < results.length; i++) {
      questionArray.push(results[i].question);
    }
    for (var i = 0; i < results.length; i++) {
      answerArray.push(results[i].answer);
    }
    console.log(questionArray);
    console.log(answerArray);
    console.log("-------------------------")
    start();
  });
}

};
start();
});
