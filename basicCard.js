function basicCard(front,back){
	this.front = front;
	this.back = back;
}

var question1 = new basicCard("what is 2+2","4")
console.log(question1.front);