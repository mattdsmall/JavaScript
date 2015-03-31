var number = prompt("How many bottles do you want?")

function bottles99 (num) 
{
	var i = num;
	
	while (i >= 0) 
	{

		if (i > 1) 

		{

			document.write(i + " bottles of beer on the wall, " + i + " bottles of beer.  Take one down, pass it around " + i + " bottles of beer on the wall.");

		}

			else if (i === 1) 

			{

				document.write(i + " bottle of beer on the wall, " + i + " bottle of beer.  Take one down, pass it around " + i + " bottle of beer on the wall.");

			}

				else 

				{

					document.write(" No bottles of beer on the wall!");

				}
	i--;

	}
};

bottles99(number);