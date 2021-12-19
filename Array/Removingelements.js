//Removing an elements from the array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//AT THE END OF AN ARRAY.
//numbers.pop(); //The output will be from 1 to 8.

//AT THE BEGINING OF AN ARRAY.
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i + 1];
// }
//The output will be from 2 to 8.

/**
 * We shifted all the elements one position to the left.
 * However, the length of the array is still the same.
 * meaning we still have an etra element in our array with an undefined value.
 * To remove the value from the array, we can also create a removeFirstPosition method
 * with the logic described in this topic.
 * However, to really remove the element from the array, we need to create a new array
 * and copy all the values.
 */

Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      //console.log(myArray[i]);
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};

// remove first position manually and reIndex
Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};

numbers = numbers.removeFirstPosition();

/**
 * The	preceding code should be used only for educational purposes	and	should not be used in real projects.
 *  To remove the first element from the array, we	should always use the shift	method.
 */

//Using the shift method.

// numbers.shift(); //The output is 4 to 8.
console.log(numbers);
