/* Fizz Buzz */

function fizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
      if (i % 15 === 0) console.log('FizzBuzz');
      else if (i % 3 === 0) console.log('Fizz');
      else if (i % 5 === 0) console.log('Buzz');
      else console.log(i);
    }
  }
  
  fizzBuzz(30);

  /* Big 0 Notation 0(1) */

  function log(array) {
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[3]);
  }
  
  log([1, 2, 3, 4, 5]);

/* Big 0 Notation 0(n) */
function logAll(array) {
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  logAll([1, 2, 3, 4, 5]);
  logAll([1, 2, 3]);


  /* Big 0 Notation 0(n^2) */

  function addAndLog(array) {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        console.log(array[i] + array [j]); 
      }
    }
  }
  
  addAndLog(['A', 'B', 'C']);
  addAndLog(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

  /* Big 0 Notation 0(log n) */

  function binarySearch(array, key) {
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;
    
    while (low <= high) {
      mid = Math.floor((low + high) / 2, 10);
      element = array[mid];
      if (element < key) {
        low = mid + 1;
      } else if (element > key) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }

  /* harmlessRansomNote function */
  function harmlessRansomNote (noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};
    
   magazineArr.forEach(word => {
     if (!magazineObj[word]) magazineObj[word] = 0;
     magazineObj[word]++;
   }) ;
   console.log(magazineObj);
  }
   harmlessRansomNote('', 'this is all magazine text in the magazine');

   /* harmlessRansomNote function - example */

   function harmlessRansomNote (noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};
    
   magazineArr.forEach(word => {
     if (!magazineObj[word]) magazineObj[word] = 0;
     magazineObj[word]++;
   }) ;
   
   var noteIspossible = true;
   noteArr.forEach(word => {
     if(magazineObj[word]) {
       magazineObj[word]--;
       if(magazineObj[word] < 0) noteIspossible = false;
     }
     else noteIspossible = false;
   });
   return noteIspossible;
  }
  
  harmlessRansomNote('this is a secret note for you from a secret admirer', 
  'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');

  /* Palindrome function */

  function isPalindrome(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    var lettersArr = [];
    charactersArr.forEach(char => {
      if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    
    return lettersArr.join('') === lettersArr.reverse().join('');
  }
   
  isPalindrome("Madam, I'm Adam");

  /* caesar Cipher function */

  function caesarCipher(str,  num) {
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';
    
    for (var i = 0; i < lowerCaseString.length; i++) {
      var currentLetter = lowerCaseString[i];
      if (currentLetter === ' ') {
        newString += currentLetter;
        continue;
      }
      var currentIndex = alphabet.indexOf(currentLetter);
      var newIndex = currentIndex + num;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = 26 + newIndex;
      if (str[i] === str[i].toUpperCase()) {
        newString += alphabet[newIndex].toUpperCase();
      }
      else newString += alphabet[newIndex];
    }
    return newString;
  }
  
  caesarCipher('Example of caesarCipher function', 2); //'Gzcorng qh ecguctEkrjgt hwpevkqp'

  /* Reversed Words function */
  function reverseWords(string) {
    var wordsArr = string.split(' ');
    var reveresedWordsArr = [];
    
    wordsArr.forEach(word => {
      var reversedWord = '';
      for (var i = word.length -1; i >= 0; i--) {
        reversedWord += word[i];
      }
      reveresedWordsArr.push(reversedWord);
    });
    return reveresedWordsArr.join();
  }
  
  reverseWords('Coding JavaScript'); //'gnidoC,tpircSavaJ'

  /* reverese in place */
  function revereArrayInPlace(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
      var tempVar = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = tempVar;
    }
    return arr;
  }
  
  revereArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
  
  /* mdianMedian mode function */

  function meanMedianMode(array) {
    // return object that has mean, median and me array
    return {
      mean: getMean(array),
      median: getMedian(array),
      mode: getMode(array)
    }
  }
  
  function getMean(array) {
    var sum = 0;
    
    array.forEach(num => {
      sum += num;
    });
    var mean = sum / array.length;
    return mean;
  }
  
  function getMedian(array) {
    array.sort(function(a, b){return a-b});
    var median;
    
    if (array.length % 2 !== 0) {
      median = array[Math.floor(array.length / 2)];
    }
    else {
      var mid1 = array[(array.length / 2) - 1];
      var mid2 = array[array.length / 2];
      median = (mid1 + mid2) / 2;
    }
    
    return median;
  }
  
  function getMode(array) {
    //what number/(s) appear th most in the array
    var modeObj = {};
    
    array.forEach(num => {
      if (!modeObj[num]) modeObj[num] = 0;
      modeObj[num]++;
    });

  // create array of mode/s 
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times 
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}
  
  meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]);

  /* TwoSum function */
  function twoSum(numArray, sum) {
    // Returns every pair of numbers from 'numArray'
    var pairs = [];
    var hashtable = [];
    
    for (var i = 0; i < numArray.length; i++) {
      var currNum = numArray[i];
      
      var counterpart = sum - currNum;
      if (hashtable.indexOf(counterpart) !== -1) {
        pairs.push([currNum, counterpart]);
      }
      hashtable.push(currNum);
    }
    return pairs;
  }
  twoSum([1, 6, 4, 5, 3, 3], 7);


//Recursion is when the function calls itself until base case is reached
function factorial(num) {
  //return a value - base case
  if (num === 1) {
    return num;
  }
    //function calls itself - recursive case
  else {
    return num * factorial(num - 1);
  }
}

factorial(4);

/* function binarySearch(numArray, key) */
  //search for a given value (key) inside of a list (numArray),  runs in O (log n) run time which is very effective because we implement the minimum number of operations that will go algorithmically
  function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem= numArray[middleIdx];
    
    //base case
    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
      return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
      return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
  }
  
  binarySearch([5, 7, 1, 16, 36, 39, 42, 56, 71], 56);

  /*fibonacci*/
function fibonacci(position) {
    //special sequence of numbers, every number is the sum of previous 2 numbers
  //base case
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}
fibonacci(18); // not effective, if you put 50 the browser will freeze


function fibMemo(index, cache) {
  // takes 2 parameters: index of number in sequence and cache an array used as memory
  // check to see if number already exists in sequence, if it is in cache then it uses it, if not then calculate and put it in cache
  cache = cache || [];
  //base case
  if (cache[index]) return cache[index];
  //recursive case
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

fibMemo(102); // more effective because you can put any number and the browser will not  crash

/* function sieveOfEratosthenes*/
function sieveOfEratosthenes(n) {
  //return all prime numbers up to 'num' in an array stopping at the square root of a 'num'
  var primes = [];
  for (var i = 0; i <= n; i++) {
    primes[i] = true;
  }
  primes[0] = false;
  primes[1] = false;
  
  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (var j = 2; j * i <= n; j++) {
      primes[i * j] = false;
    }
  }
  var result = [];
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }
  return result;
}

sieveOfEratosthenes(200);

/*bubble Sort */
function bubbleSort(array) {
  //return array of numbers, sorted from lowest to greatest
  //outer loop how many passes the algorithm needs to complete 'array.length - 1 passes'
  for (var i = array.length; i > 0; i--) {
    // inner loop - handle comparing each number to its neighbor
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j +1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
bubbleSort([3,-9,5,-12,18,-23]);

/*mergeSort function */

function mergeSort(arr) {
  //split array into 2 equal parts
  // recursive function
  //base
  if (arr.length < 2) return arr;
  //recursive
  var middleIndex = Math.floor(arr.length /2);
  var firstHalf = arr.slice(0, middleIndex);
  var secondHalf = arr.slice(middleIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
function merge(array1, array2) {
  //merge arrays
  var result = [];
  while(array1.length && array2.length) {
    var minElem;
    if (array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem);
  }
  if(array1.length) result = result.concat(array1);
  else result = result.concat(array2);
  return result;
}

mergeSort([100, -20, 40, -30, 16, -100, -101]);

/*maxStockProfit */
function maxStockProfit(pricesArr) {
  // takes in array of prices as parameter
  // returns max profit of the day, looking for max a min and calculates the difference, if there is no profit then it returns -1, 0 is just like any other max profit
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  
  var changeBuyPrice = true;
  
  for (var i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];
    
    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    }
    else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  return maxProfit;
}
maxStockProfit([10,18,4,5,9,6,16,12]);