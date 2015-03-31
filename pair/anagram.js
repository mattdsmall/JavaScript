 /*.split refers to splitting a string into an array of substrings
 .sort is sorting an array
step 1 make a function with 2 parameters
step 2 establish 2 variables, whithin each variable
we prompt the user for each word that they want
step 3 within the function we are going to have two variables
we are going to split them 
step 4 sort each individual variable
step 5 create variable i and set it to 0, which is the letter in the first position
step 6 create a while loop comparing variable i to the rest of the positions
step 7 in the while loop, start in the 1st position and go up i++ when comparing to postion 0, (i < 1) etc for the entire length
step 8 if the 2 letters in the first position are the same then return true, if not return false
step 9 call the function with the parameters being the two words you are comparing*/

var x = prompt("What is the first word that you choose?");
var y = prompt("What is the second word that you choose?");


function isAnagram(word1, word2) {
	
	var letter1 = word1.split("");
	var letter2 = word2.split("");

	letter1 = letter1.sort();
	letter2 = letter2.sort();

	
	var i = 0;

	while (i < letter1.length) {

		if(letter1[i] == letter2[i]) {
			i++;
		}
		

		else {

			return false;
		}			
	}
			return true;
	
}
alert(isAnagram(x,y));