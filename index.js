function isPalindrome(word) {
  // Write your algorithm here
  
}

/* 
  Add your pseudocode here
*/
// write a function called  isPalindrome that takes string as Parameter
//  use if to check if the string is Palindrome.
// if the string backward and forward is the same return true
// else return false.
/*
  Add written explanation of your solution here
*/you create a function that receives a word.we use if statement to determine wether the word entered is equal to module.if true we return true else we return false.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("bro"));
}

module.exports = isPalindrome;
