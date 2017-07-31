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

function Cloze(question, ans) {
  this.question = question;
  this.ans = ans;
}

var card = new Cloze("...sucks","love");
console.log(card.question);
