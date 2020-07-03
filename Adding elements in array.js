//Addin elements in an array
let	numbers	=	[0,	1,	2,	3,	4,	5,	6,	7,	8,	9];

//At the end of the array

numbers[numbers.length] = 10;// reference the latest free position of the array and assign a value to it.

//Using the push method
numbers.push(11);
numbers.push(12,13);//The output of the numbers array will be the numbers from 0 to 13.

//Inserting an element in the first position.

/**
 * add a new method	directly to	the Array prototype, making	the	insertFirstPosition	method	available to all array instances.	
 */
Array.prototype.insertFirstPosition	=	function(value)	{			
    for	(let i = this.length; i	>= 0; i--)	{
        this[i]	= this[i - 1];			
    }			
    this[0]	= value;	
};	
numbers.insertFirstPosition(-1);

//Using the unshift method
numbers.unshift(-2);
numbers.unshift(-4,-3);//The output of this array will be the numbers from -4 to 13.

