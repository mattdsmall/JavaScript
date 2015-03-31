function cap(word) {

var next = word.substr(0,(word.length-3));
var cap = word.toUpperCase();

console.log(next + cap.substr(word.length-3,word.length));

}

cap("somestring");
cap("something else");