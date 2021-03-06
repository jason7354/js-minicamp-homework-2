//Do not change any of the function names

function getBiggest(x, y) {
  if (x>=y){
    return x;
  }
  else {
    return y;
  }
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
}

function greeting(language) {
  var G='Guten Tag!';
  var E='Hello!';
  var S='Hola!';
  if (language==='German'){
    return G;
  }
  else if(language==='English'){
    return E;
  }
  else if(language==='Spanish'){
    return S;
  }
  return E;
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
}

function isTenOrFive(num) {
  if (num===10 ||num===5){
    return true;
  }
return false;
  //return true if num is 10 or 5
  //otherwise return false
}

function isInRange(num) {
  if (num<50&&num>20){
    return true;
  }
  return false;
  //return true if num is less than 50 and greater than 20
}

function isInteger(num) {
  if (!Math.floor(num)===false){
    return true;
  }
  else if (num===0){
    return true;
  }
return false;
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  if (num%3===0&&num%5==0){
    return 'fizzbuzz';
  }
  if (num%3===0){
    return 'fizz';
  }
  if (num%5===0){
    return'buzz';
  }
  return num;
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
}

function isPrime(num) {
  if (num===1||num===0){
    return false;
  }
  for(var prime=num;1<prime;prime--){
     if (num%prime===0&&num!=prime){
      return false;

    }


  }
  return true;
  
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
}

function returnFirst(arr) {
  var s=arr[0];
  return s;
  //return the first item from the array
}

function returnLast(arr) {
  return arr.pop();
  //return the last item of the array
}

function getArrayLength(arr) {
  return arr.length;
  //return the length of the array
}

function incrementByOne(arr) {
  var d=[];
  for (var i=0;i<arr.length;i++){
    var w=arr[i]+1;
    d.push(w);
  }
  return d;
  
  //arr is an array of integers  
  //increase each integer by one
  //return the array
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
  //add the item to the end of the array
  //return the array
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
}

function wordsToSentence(words) {
  var d='';
  for (var i=0;i<words.length;i++){
    if (words.length===1){
      return d+words[i];
    }
    if (words.length>2){
      return d+words[i]+' '+words[i+1]+' '+words[i+2];
    }
    if (words.length<3){
      return d+words[i]+' '+words[i+1];
    }

    }
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  for(var i=0;i<arr.length;i++){
    if (arr[i]===item){
      return true;
    }
  }
  return false;
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
}

function addNumbers(numbers) {
  var sum=0;
  for(var i=0;i<numbers.length;i++){
    var value=numbers[i]+0;
    sum=sum+value;


  }
  return sum;


  //numbers is an array of integers.
  //add all of the integers and return the value
}

function averageTestScore(testScores) {
  var sum=0;
  for(var i=0;i<testScores.length;i++){
    var value=testScores[i]+0;
    sum=sum+value;
  }
  return sum/testScores.length;

  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
}

function largestNumber(numbers) {
  var largest=0;
  for(var i=0;i<numbers.length;i++){
    var two=numbers[i+1];
    var one=numbers[i];
    if (one>two){
      if(one>=largest){
        largest=one;

      }
    } else if (two>largest){
      largest=two;
    }


  }
  return largest;
  //numbers is an array of integers
  //return the largest integer
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
