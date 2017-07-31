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

function basicCard(front,back){
	this.front = front;
	this.back = back;
}

var question1 = new basicCard("what is 2+2","4")
console.log(question1.front);

module.exports = basicCard;
