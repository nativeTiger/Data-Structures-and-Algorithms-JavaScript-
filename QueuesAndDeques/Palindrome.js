function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0) //{1}
  ) {
    return false;
  }
  const deque = new Deque(); //{2}
  const lowerString = aString.toLocaleLowerCase().split(" ").join(""); //{3}
  let firstChar, lastChar;
  let isEqual = true;
  for (let i = 0; i < lowerString.length; i++) {
    //{4}
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    //{5}
    firstChar = deque.removeFront(); //{6}
    lastChar = deque.removeBack(); //{7}
    if (firstChar !== lastChar) {
      isEqual = false; //{8}
    }
  }
  return isEqual;
}

console.log(palindromeChecker("level"));

/**
 * For this algorithm, we will use the Deque class we implemented in this
    chapter ( {2} ). As we can receive a string with both lowercase and
    capital letters, we will transform all letters to lowercase and we will
    also remove all the spaces ( {3} ). If you want to, you can also remove
    all special characters such as !?-() and so on. To keep this algorithm
    simple, we will skip this part.
    Next, we will enqueue all characters of the string to the deque ( {4} ).
    While we will have elements in the deque (if only one character is left,
    it is a palindrome) and the string is a palindrome ( {5} ), we will
    remove one element from the front ( {6} ) and one from the back ( {7} ).
    To be a palindrome, both characters removed from the deque need to
    match. If the characters do not match, then the string is not a
    palindrome ( {8} ).
 */
