

function round(number){

var x = Math.floor(number);
var y = number - x;
	if ( y >= .5) {
		console.log(Math.ceil(number));
	}
	else {
		console.log(Math.floor(number));
	}
}


round(5);
round(15.7);