// ***********  TASK 1  **********//

var addSix = createBase(6);

console.log('<--- TASK 1 --->');
console.log('10 + 6 = ', addSix(10));
console.log('21 + 6 = ', addSix(21));

function createBase(baseEl) {
  var baseVariable = baseEl;

  return function(el) {
      return baseVariable + el;
  }
}

// ***********  TASK 2  **********//

var input = document.getElementById("input");

function createBtns() {
  var value = input.value;
  var block = document.createElement('div');

  for(var i = 0; i < value; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = i;
    btn.onclick = logNumber;
    block.appendChild(btn);
  }

  document.getElementById("task2-block").before(block);
}

function logNumber(e) {
  console.log('You clicked on', e.target.innerHTML);
}

// ***********  TASK 3  **********//

let arr = [2,4,8,2,2,4,6];

function average() {
  let args = [...arguments[0]];
  let sum = args.reduce(function(accumulator, currentValue) { return accumulator + currentValue;});

  return sum / args.length;
}

console.log('<--- TASK 3 --->');
console.log('Array:', arr);
console.log('Avarage:', average(arr));

// ***********  TASK 4  **********//

const militaryMan = {
  name: 'Greg',
  placeOfService: 'army'
}
const civil = {
  name: 'Joe',
  placeOfService: 'factory'
}

function militaryGreeting() { console.log(`${this.name} to your service!`)}
function civilGreeting() { console.log(`Hi, I’m ${this.name}!`)}

function getGreeting(person) {
  if ( person.placeOfService === 'army') {
    return militaryGreeting.bind(person);
  } else return civilGreeting.bind(person);
};

let gregsGreeting = getGreeting(militaryMan);
let joesGreeting = getGreeting(civil);

console.log('<--- TASK 4 --->');
gregsGreeting();
joesGreeting();


/*
let fruits = ['banana', 'apple', 'cherry', 'banana', 'banana', 'banana', 'cherry'];
let result = fruits.reduce(function(accumulator, currentValue) {
  if (accumulator.hasOwnProperty(currentValue)) {
    accumulator[currentValue] = accumulator[currentValue] + 1;
  } else accumulator[currentValue] = 1;

  return accumulator;
}, {});

console.log(result);
*/
