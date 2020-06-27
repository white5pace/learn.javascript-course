let dictionary = Object.create(null);

dictionary[Symbol.toPrimitive] = function() {
  return Object.keys(this).join(',');
}

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log(dictionary + ''); // "apple,__proto__" 