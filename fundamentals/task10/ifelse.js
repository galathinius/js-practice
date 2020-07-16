// ex 1
if ('0') {
  alert('Hello');
} // yes

// ex 2
const input = prompt('What is the "official" name of JavaScript?', 'idk');
if (input == 'ECMAScript') {
  alert('Right');
} else {
  alert("Didn't know? ECMAScript!");
}

// ex 3
const number = +prompt('give a number', '-8');
const sign = (number < 0) ? -1
  : (number > 0) ? 1
    : 0;
alert(sign);

// ex 4
let result = (a + b < 4) ? 'Below' : 'Over';

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

// ex 5
let message = (login == 'Employee') ? 'Hello'
  : (login == 'Director') ? 'Greetings'
    : (login == '') ? 'No login'
      : '';

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
