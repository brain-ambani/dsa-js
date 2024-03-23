// Analyze: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Input: listen, silent --->>>> Output: true
// Input: hello, hola --->>>> Output: false

const isAnagram = (str1, str2) => {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  return str1 === str2;
};

const result = isAnagram("listen", "silent");

console.log(result);
