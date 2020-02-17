'use strict';
var str = "this is a string";
var num = 3;//3.5
var bool = true;

console.log("type of str " + typeof str +
 " type of num " + typeof num + " type of bool " + typeof bool);

 var age = prompt("Enter your Age?");
 console.log(age);
 console.log(typeof age);

//  var ageToNumber = Number(age); 
//  console.log("after convert" , typeof ageToNumber);

var age = parseInt(age); 
console.log("after convert" , typeof age);
parseInt("ffghgjhjghjg"); //NaN
parseInt("4");//4

var confirmEnjoying = confirm("Are you Enjoying Class ?");
console.log("confirm enjoying " + confirmEnjoying);

if(confirmEnjoying === true){
    alert("Happy for that!");
}else{
    alert("plaese till me if you don't undersatnd anything");
}

if(age <= 20 || age <= 30){
    alert("you need to be patient");
}else if(age > 20 && age < 30){
    alert("you need to learn more");
}else{
    alert("out of the class");
}
4 !== '4'
4 != '4'


var grade = prompt("Enter You Grade").toUpperCase();
if(grade === 'A'){
    alert("Excellent Job !");
}else if(grade === 'B'){
    alert("Very Good Job !");
}else if(grade === 'C'){
    alert("Good");
}else if(grade === 'D'){
    alert("work more in your self");
}else if(grade === 'F'){
    alert("you fail :'( ");
}else{
    alert("nothing !")
}
switch (grade) {
    case 'A':
        alert("Excellent Job !");
    break;
    case 'B':
        alert("Very Good Job !");
    break;
    case 'C':
        alert("Good");
    break;
    case 'D':
        alert("work more in your self");
    break;
    case 'F':
        alert("you fail :'( ");
    break;
    default:
        alert("nothing !")
    break;
}

var arr = [1,2,3,4,5,6,7];
arr.length;
arr.pop();
arr.push(7);
arr[3] = 8;
arr.shift();
arr.unshift(0,1);
arr.includes(10);
arr.includes(3)

