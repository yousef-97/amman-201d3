/* eslint-disable indent */
'use strict';

var userName = prompt('Please enter your name', 'Reham Omar');

if (userName !== null) {
  alert('hello   ' + userName + '  how are you today?');
}
// console.log(userName);

var isJordanian = prompt('Are you from jordan ? (yes or no)').toLowerCase().toUpperCase();
switch (isJordanian) {
  case 'Y':
  case 'y':
    alert('I\'m from jordan too , I really like u are in my page');
  break;
  case 'no':
  case 'n':
    alert('I\'m so excited to enter my web page');
  break;
  default:
    alert('nothing !');
  break;
}
// console.log(isJordanian);


var age = prompt('tell me how old are you ?');
if (age >= 18) {
  alert('I\'m also above 18 , I\'m 23 ');
} else {
  alert('you are not adult yes so be carefull when you use the internet');
}
// console.log(age);

var major = prompt('do you want to be abiomedical engineer like me ? (yes or no)').toUpperCase();
switch (major) {
  case 'YES':
  case 'Y':
    alert('i advice u to study it if yr intersting in saling or maintenance');
  break;
  case 'NO':
  case 'N':
    alert('I advice u to study coding');
  break;
  default:
    alert('nothing !');
  break;
}
// console.log(major);

var likeDrawing = prompt('tell me do u like drawing  ? (yes or no )').toLowerCase();
switch (likeDrawing) {
  case 'yes':
  case 'y':
    alert('you are like me');
  break;
  case 'no':
  case 'n':
    alert('oooh why , its the way to get the stress out   ');
  break;
  default:
    alert('nothing');
  break;
}
// console.log(likeDrawing);










