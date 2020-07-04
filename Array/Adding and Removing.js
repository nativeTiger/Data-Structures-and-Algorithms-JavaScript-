//ADDING AND REMOVING ELEMENTS FROM A SPECIFIC POSITION.

//Removing elements.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/**
 * We can use the splice method to remove an element from an array,
 * by simply specifying the position/index that we would like to
 * delete from and how many elements we would like to remove.
 */

numbers.splice(5, 3);
//This code will remove three elements, starting from index 5 of our array.
//The output will be numbers = [1,2,3,4,5,9]


//Adding elements.
numbers.splice(5, 0, 6, 7, 8);

/**
 * The first argument of the method is the index we want to remove elements from 
 * or insert elements into. The second argument is the number of elements we want
 * to remove(in this case, we don't want to remove any,so will pass the value 0[zero]).
 * And from the third argument onward we have  the values we would like to insert into the array(the elements 6,7,8).
 * The output will be again from 1 to 9.
 */