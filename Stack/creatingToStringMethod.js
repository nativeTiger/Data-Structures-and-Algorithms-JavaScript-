//Creating the toString method

/**
 * In the array version, we do not need to worry avout a toString method because the data
 * structure will use the one already provided by the aray, For this object version, 
 *we will create toString method so we can print the content of the stack similar to an array:
 */
toString(); {
    if (this.isEmpty()) {
        return '';
    }
    let objString = `${this.items[0]}`; // {1}
    for (let i = 0; i < this.count; i++) {  //{2}
        objString = `${objString},${this.items[i]} `; //{3}
    }
    return objString;
}

/**
 * If the stack is empty, we simply return an empty string.
 * If it si not empty, we will initialize the string with the first element,
 * from the base of the stack {1}. Then, we will iterate through all the keys
 * of the stack {2} until its top, adding a comma (,) followed by the next element {3}.
 * If the stack contains only one element, the code from the lines {2} to {3} will not be executed.
 */

/**
 * With the exception of the toString method,
 * all	other methods we created have complexity O(1),
 * meaning	we can access the element we are interested	in directly	and	perform	an
 * action with	it (push, pop, or peek).
 */