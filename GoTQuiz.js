var correctAnswer = 0;

function ask()
{
//var correctAnswer = 0;
var firstAnswer = prompt("How many Stark kids are there?");
if( firstAnswer == 5)
{

correctAnswer = correctAnswer + 1;

}
var secondAnswer = prompt("How many kingdoms are there in Westeros?");
if( secondAnswer == 7)

{

correctAnswer++;

}
var thirdAnswer = prompt("How many brothers and sisters does Tyrion have?");
if( thirdAnswer == 2)

{

correctAnswer++;

}


}

ask();
document.write('You got ' + correctAnswer + ' out of 3 correct!');

