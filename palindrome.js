// Palindrome Number
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

function ispalindrome(x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

const result = ispalindrome(-121);

console.log(result);
