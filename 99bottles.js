var num = prompt("How many bottles of beer?");//we are asking the number of bottles you want
var container = "bottles"; //in quotes because its  a string; when establishing a variable after it has been set we will use the variable to call upon the value
var text; //global
var next; //next is checking the next number in the loop to see if we need to change any part of the text

for(i =num; i >=0; i--) { //our starting value is 99 and we are decrementing till 1; 

	text = i + " " + container + " of beer on the wall, " + //so we are gluing our texts together (concatenating (no one can pronounce this))
	i + " " + container + " of beer, " +
	"take 1 down, pass it around, ";

	
	container = "bottle";
	if (i > 1) {
		text = text + (i - 1) + " " + container + " of beer on the wall.";
		container = "bottle";
	} else if( i==1) { //Use 2 equal signs because they are 2 different types of values
		

		text = text + " No more bottles of beer on the wall!"; //added string

	} else {
		text = "No more bottles of beer on the wall, no more bottles of beer.  Go to the store and buy some more, 99 bottles of beer on the wall.";
	}// when the number of bottles of beer goes to zero, then add this string
	document.write('<p>' + text + '</p>');


}
