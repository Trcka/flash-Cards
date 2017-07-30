function Cloze(question, ans) {
  this.question = question;
  this.ans = ans;
}

var card = new Cloze("...sucks","love");
console.log(card.question);

module.exports = ClozeCard;
