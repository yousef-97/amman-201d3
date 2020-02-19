'use strict';
// a function is like a box
// where you can give it some number things as input
// it will do some work
// and it will give something back

// Functions autonomy
// var greet = 'hello';//global
// // Function Expression
// function getName(name , age){
//   // var greet = 'Welcome ' + name +' to 201d3 Class';
//   var greet = `Welcome ${name} to 201d3 Class your age ${age}`;
//   //console.log('local greeting ', greet , 'inside');
//   return greet;
// }
// var response = getName('Reham' ,25);
// console.log(response);
// console.log('global greeting ', greet);

// // Function Declaration
// var showName = function(){
//   //console.log('show me ' + userName); undefined
//   var userName = prompt('what\'s your Name ?');
//   alert('welcome to 201 ' , userName);
// };
// showName();

//var showName = 'dhgdjh';
//local vs global scope

//Immediately-Invoked Function Expressions
(function getName(name , age){
  alert(`Welcome ${name} to 201d3 Class your age ${age}`);
})('reham' , 25);
getName('ahmed' , 25);