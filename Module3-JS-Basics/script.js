// ***********  TASK 1  **********//

let array = [1, 14, 3, 4, 15, 6, 7, 8, 2,  9, 10, 5, 11, 12, 13];

console.log('Task 1');
console.log('Using loop: ', getEvenNumbersWithLoop(array));
console.log('Without loop: ', getEvenNumbersWithoutLoop(array));

// using loop
function getEvenNumbersWithLoop(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) result.push(arr[i]);
  }

  return result;
}

// not using loop
function getEvenNumbersWithoutLoop(arr) {
  return arr.filter((el) => el % 2 === 0)
}

// ***********  TASK 2  **********//

console.log('Task 2');
console.log('Using loop: ', getBiggestWithLoop(array));
console.log('Without loop: ', getBiggestWithReduce(array));

// using loop
function getBiggestWithLoop(arr) {
  let max = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) max = arr[i];
  }

  return max;
}

// not using loop
function getBiggestWithReduce(arr) {
  return arr.reduce(function(accumulator, currentValue) {
    return accumulator > currentValue ? accumulator : currentValue;
  });
}

// ***********  TASK 3  **********//

console.log('Task 3');
console.log('Using loop: ', getCopiedWithLoop(array, 4, 9));
console.log('Without loop: ', getCopiedWithoutLoop(array, 4, 9));

// using loop
function getCopiedWithLoop(arr, startIndex, endIndex) {
  let result = [];

  for(let i = startIndex; i < endIndex; i++) {
    result.push(arr[i]);
  }

  return result;
}

// not using loop
function getCopiedWithoutLoop(arr,  startIndex, endIndex) {
  return arr.slice(startIndex, endIndex);
}

// ***********  TASK 4  **********//

console.log('Task 4');
console.log('Array: ', array);
console.log('After calling function: ', doForArray(array, increaseByTwo));

function increaseByTwo(el) {
  return el*2;
}

function doForArray(arr, func) {  //найшгірша назва яку я могла придумати 😂
  return arr.map(el => func(el));
}

// ***********  TASK 5  **********//

array = [3, 5, 7.28, 0.625, 13, 27, 0.00729, 6, 17, 1];

console.log('Task 5');
console.log('Array: ', array);
console.log('After calling function: ', modifyArray(array, isPrime, modifyDecimals));

function isPrime(el) {
  if(!Number.isInteger(el)) return false;

  for(let i = 2; i <= Math.sqrt(el); i++) {
    if(el % i === 0) return false;
  }

  return el > 1 ? `${el} - a prime number`: false;
}

function modifyDecimals(el) {
  if(el >= 1) {
    return el.toFixed(2);
  }

  return el.toFixed(4);
}

function modifyArray(arr, func1, func2) {
  return arr.map(el => {
    let func1Result = func1(el);

    return func1Result ? func1Result : func2(el);
  });
}
