/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
  	return null;
  }
  if (n === 0) {
  	return 1;
  }
  return n  * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (!array.length) {
  	return 0;
  }
  return array[array.length - 1] + sum(array.slice(0, -1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
   if (!array.length) {
   	return 0;
   }
   return (Array.isArray(array[array.length - 1]) ? arraySum(array[array.length - 1]) : array[array.length - 1]) + arraySum(array.slice(0, -1));
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
  	return true;
  }
  if (n === 1) {
  	return false;
  }
  let nextNum = n < 0 ? n + 2 : n - 2;
  return isEven(nextNum);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n - 1 === 0 || n + 1 === 0 || n === 0) {
  	return 0;
  }
  let nextNum = n > 1 ? n - 1 : n + 1
  return nextNum + sumBelow(nextNum);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x - y <= 1 && x - y >= -1 || !arguments.length) {
  	return [];
  }
  let nextNum = x > y ? x - 1 : x + 1;
  return [nextNum].concat(range(nextNum, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 1) {
  	return base;
  }
  if (exp === 0) {
  	return 1;
  }
  if (exp < 0) {
  	return 1 / exponent(base, -exp);
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 2 || n === 1) {
  	return true;
  }
  if (n < 2 && n > 1 || n === 0) {
  	return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (!string.length) {
  	return '';
  }
  return string.charAt(string.length - 1) + reverse(string.slice(0, -1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  let str = string.replace(/\s*/g, '').toLowerCase();
  if (str.length <= 1) {
  	return true;
  }
  if (str.charAt(0) !== str.charAt(str.length - 1)) {
  	return false;
  }
  return palindrome(str.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
  	return NaN;
  }
  if (x === y) {
  	return 0;
  }
  if (x < 0 && y < 0) {
  	return -modulo(-x, -y);
  }
  if (x < 0 && y > 0) {
  	return -modulo(-x, y);
  }
  if (x > 0 && y < 0) {
  	return modulo(x, -y);
  }
  if (x < y) {
  	return x;
  }
  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 0 || x === 0) {
  	return 0;
  }
  if (y < 0) {
  	return multiply(-x, -y);
  }
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
  if (x === 0 && y === 0) {
  	return NaN;
  }
  if (y === 0) {
  	return Infinity;
  }
  if (x < 0 && y < 0) {
  	return divide(-x, -y);
  }
  if (x > 0 && y < 0) {
  	return -divide(x, -y);
  }
  if (x < 0 && y > 0) {
  	return -divide(-x, y);
  }
  if (x - y < y && x - y < 0 || x === 0) {
  	return 0;
  }
  if (x - y < y && x - y >= 0) {
  	return 1;
  }
  let count = 1;
  return count += divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
  	return null;
  }
  if (x === y) {
  	return y;
  }
  if (Array.isArray(y)) {
  	for (let i = 0; i < y.length; i++) {
  	  if (x % y[i] === 0) {
  	  	return y[i];
  	  	break;
  	  }
  	}
  }
  if (x < y) {
  	let n = x;
  	x = y;
    y = n;
  }
  if (x % y === 0) {
  	return y;
  }
  let nextNum = [];
  for (let i = 2; i <= y; i++) {
  	(y / i) % 1 === 0 && nextNum.push(y / i);
  }
  return gcd(x, nextNum);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (!str1.length && !str2.length) {
  	return true;
  }
  if (str1.charAt(0) !== str2.charAt(0)) {
  	return false;
  }
  return compareStr(str1.slice(+1), str2.slice(+1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (!str.length) {
  	return [];
  }
  return [str.charAt(0)].concat(createArray(str.slice(+1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (!array.length) {
  	return [];
  }
  return [].concat([array[array.length - 1]]).concat(reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
  	return [];
  }
  return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  let result = [];
  if (n === 0) {
  	return n;
  }
  function originalFizzBuzz(n) {
  	if (n % 15 === 0) {
  	  return 'FizzBuzz';
  	}
  	if (n % 3 === 0) {
  	  return 'Fizz';
  	}
  	if (n % 5 === 0) {
  	  return 'Buzz';
  	}
  	return n.toString();
  }
  for (let i = 1; i <= n; i++) {
  	result.push(originalFizzBuzz(fizzBuzz(0) + i));
  }
  return result;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (!array.length) {
  	return 0;
  }
  let count = array[0] === value ? 1 : 0;
  return count + countOccurrence(array.slice(+1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (!array.length) {
  	return [];
  }
  return [callback(array[0])].concat(rMap(array.slice(+1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  if (typeof obj !== 'object') {
  	return 0;
  }
  let count = 0;
  for (k in obj) {
  	count += (k === key ? 1 : 0) + countKeysInObj(obj[k], key);
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  if (typeof obj !== 'object') {
  	return 0;
  }
  let count = 0;
  for (key in obj) {
  	count += obj[key] === value ? 1 : countValuesInObj(obj[key], value);
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  if (typeof obj !== 'object') {
  	return obj;
  }
  for (key in obj) {
  	if (key === oldKey) {
  	  obj[newKey] = obj[key];
  	  delete obj[key];
  	  replaceKeysInObj(obj[newKey], oldKey, newKey);
  	}
  	replaceKeysInObj(obj[key], oldKey, newKey);
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
  	return null;
  }
  if (n === 1) {
  	return [0, 1];
  }
  let result = [0, 1];
  let a = fibonacci(1)[0];
  let b = fibonacci(1)[1];
  let count = 1;
  while (count < n) {
  	let c = a + b;
  	result.push(c);
  	a = b;
  	b = c;
  	count++;
  }
  return result;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (!this.hasOwnProperty('fiboMemo')) {
  	this.fiboMemo = [];
  }
  if (n < 0) {
  	return null;
  }
  if (n === 1 || n === 0) {
  	fiboMemo[n] = n;
  	return n;
  }
  if (fiboMemo[n]) {
  	return fiboMemo[n];
  }
  let num = nthFibo(n - 2) + nthFibo(n - 1);
  fiboMemo[n] = num;
  return num;
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (!array.length) {
  	return [];
  }
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(+1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (!array.length) {
  	return [];
  }
  return [array[0].replace(/^./, l => l.toUpperCase())].concat(capitalizeFirst(array.slice(+1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  if (typeof obj !== 'object') {
  	return 0;
  }
  let count = 0;
  for (key in obj) {
  	count += obj[key] % 2 === 0 ? obj[key] : nestedEvenSum(obj[key]);
  }
  return count;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if (!array.length) {
  	return [];
  }
  let firstItem = Array.isArray(array[0]) ? flatten(array[0]) : array[0];
  return [].concat(firstItem).concat(flatten(array.slice(+1)));
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  obj = obj || {};
  if (!str.length) {
  	return {};
  }
  let regex = new RegExp(str.charAt(0), 'g');
  let currentLetterCount = str.match(regex).length;
  obj[str.charAt(0)] = currentLetterCount;
  let nextStr = str.replace(regex, '');
  return Object.assign(obj, letterTally(nextStr, obj));
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (!list.length) {
  	return [];
  }
  let currentItem = list[0];
  let nextIndex = list.slice(+1).findIndex(i => i !== currentItem);
  if (nextIndex === -1) {
  	return currentItem;
  }
  return [currentItem].concat(compress(list.slice(+1).slice(nextIndex)));
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (!array.length) {
  	return [];
  }
  return [array[0].concat([aug])].concat(augmentElements(array.slice(+1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (!array.length) {
  	return [];
  }
  let currentItem = array[0];
  let nextIndex = 0;
  if (currentItem === 0) {
  	nextIndex = array.slice(+1).findIndex(i => i !== currentItem);
  	if (nextIndex === -1) {
	  return currentItem;
	}
  }
  return [currentItem].concat(minimizeZeroes(array.slice(+1).slice(nextIndex)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (!array.length) {
  	return [];
  }
  function convertSign(n, sign) {
  	if (sign === 'pos' && n > 0) {
  	  return n;
  	}
  	if (sign === 'pos' && n < 0) {
  	  return -n;
  	}
  	if (sign === 'neg' && n > 0) {
  	  return -n;
  	}
    return n;
  }
  return [convertSign(array[0], 'pos')].concat([convertSign(array[1], 'neg')]).concat(alternateSign(array.slice(+2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (typeof str === 'undefined' || !str.length) {
  	return '';
  }
  let wordNumbers = {
  	0: 'zero',
  	1: 'one',
  	2: 'two',
  	3: 'three',
  	4: 'four',
  	5: 'five',
  	6: 'six',
  	7: 'seven',
  	8: 'eight',
  	9: 'nine'
  };
  function checkNumber(n) {
    if (wordNumbers.hasOwnProperty(n)) {
    	return wordNumbers[n];
    }
    return n;
  }
  let wordList = str.match(/\w+/g);
  return checkNumber(wordList[0]) + ' ' + numToText(wordList.slice(+1).join(' ')).trim();
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  node = node || document;
  let count = 0;
  if (!!node.tagName && node.tagName.toLowerCase() === tag.toLowerCase()) {
  	count++;
  }
  if (!node.children.length) {
  	return count;
  }
  [...node.children].forEach(i => count += tagCount(tag, i));
  return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target) {
  let mid = Math.ceil(array.length / 2) - 1;
  if (array[mid] === target) {
  	return mid;
  }
  if (array.length <= 1) {
  	return null
  }
  if (array[mid] < target) {
  	let result = binarySearch(array.slice(mid + 1), target);
  	return result === null ? null : mid + result + 1;
  }
  if (array[mid] > target) {
  	return binarySearch(array.slice(0, mid), target);
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  if (array.length <= 2) {
  	array[0] > array[1] && array.reverse();
  	return array;
  }
  function merge(arr1, arr2) {
    if (!arr1.length) {
      return arr1.concat(arr2);
    }
    if (!arr2.length) {
      return arr2.concat(arr1);
    }
    if (arr1[0] <= arr2[0]) {
      return [arr1[0]].concat(merge(arr1.slice(+1), arr2));
    }
    if (arr1[0] > arr2[0]) {
      return [arr2[0]].concat(merge(arr1, arr2.slice(+1)));
    }
  }
  return merge(mergeSort(array.slice(0, Math.ceil(array.length / 2))), mergeSort(array.slice(Math.ceil(array.length / 2))));
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (typeof input !== 'object') {
  	return input;
  }
  let obj = Array.isArray(input) ? [] : {};
  let entries = Object.entries(input);
  entries.forEach(i => obj[i[0]] = clone(i[1]));
  return obj;
};





