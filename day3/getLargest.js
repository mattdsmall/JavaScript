function largest(a,b,c) 
{
	/*var large;

	if(a > b) 
	{
		large = a;
		
	} else {

		large = b;

	}
	if (large > c) 
	{
		large;

	} else {
		large = c;

	}

	console.log(large)*/

	console.log( Math.max( Math.max(a,b), c) );
}

largest(1,2,3);
largest(6,5,4);
largest(8,9,7);
