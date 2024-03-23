// Analyze: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Input: listen, silent --->>>> Output: true
// Input: hello, hola --->>>> Output: false

// Firs Approach
// const isAnagram = (str1, str2) => {
//   str1 = str1.split("").sort().join("");
//   str2 = str2.split("").sort().join("");

//   return str1 === str2;
// };

// const result = isAnagram("listen", "silent");

// console.log(result);

// Second Approach

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

const result = isAnagram("listen", "silent");

console.log(result);
