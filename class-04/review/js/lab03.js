
'use strict';
var rank = 0;

alert('Hello, you are attended to view a very secret information about me');
alert('Before that i had to test if you are accepted to view it or not');
alert('Okay, lets go');

var userName = prompt('Type your userName');
while (userName === '') {
  alert('Please type a userName in the field!');
  userName = prompt('Type in your userName');
}
// alert('Hello ' + userName);
// alert('Now just answer with yes or no okey  '+userName+'?');
// var clearance = prompt('Is it clear?').toLowerCase();
// if (clearance === 'yes') {
//   alert('Thats good!');
//   // console.log("clear=yes")
//   rank=rank+1;
// } else {
//   alert('You are not allowed to access to this secret information, you will be redirected to a site that match your brain size!! have fun (: ' + userName);
//   window.open('https://www.youtube.com/watch?v=XqZsoesa55w','_blank');
//   // console.log("clear=",clear)
// }


// var age = prompt('Are you 18 year old or above').toLowerCase();

// if (age === 'yes') {
//   alert('Nice!!');
//   // console.log("age=yes")
//   rank=rank+1;
// } else {
//   alert('You are not allowed to access to this secret information, you will be redirected to a site that match your brain age!! have fun (: ' + userName);
//   window.open('https://toyoraljanah.com/','_blank');
//   // console.log("age=",age)
// }


// alert('Keep going, just 5 more questions! (:');

// var secrets = prompt('Can you keep secrets as a secrets').toLowerCase();

// if (secrets === 'yes') {
//   alert('Nice!! I\'ll trust you :)');
//   // console.log("secrets=yes")
//   rank=rank+1;
// } else {
//   alert('You need to know about discloses secrets disadvantage, ' + userName);
//   window.open('https://islamqa.info/en/answers/27190/what-is-the-ruling-on-one-who-discloses-secrets','_blank');
//   // console.log("secrets=",secrets)
// }

// alert('Excelente, just 4 more questions! (:');

// var enjoy = prompt('Are you enjoying chating with me').toLowerCase();

// if (enjoy === 'yes') {
//   alert('Seems like you are feeling lonely :`(');
//   alert('I think you need to see a psychiatrist, do not worry it is not a shame :)');
//   // console.log("enjoy=yes")
//   rank=rank+1;
// } else {
//   alert('You are all about sadness ' + userName);
//   window.open('https://www.youtube.com/watch?v=qYS0EeaAUMw','_blank');
//   // console.log("enjoy=",enjoy)
// }

// alert('Excelente, just 3 more questions! (:');

// var donate = prompt('Did you accept to pay 99999999$ for this secret information').toLowerCase();

// if (donate === 'yes') {

//   alert('You can send the money using this link `www.blablabla.money`');
//   alert('Excelente, just 2 more questions! (:');
//   // console.log("donate=yes")
//   rank=rank+1; 
// } else {
//   alert('You are so mean :`( ' + userName);
//   window.open('https://www.youtube.com/watch?v=QhfrhyHOstg','_blank');
//   // console.log("donate=",donate)
// }

// alert('your current score is ' + rank + '/7');


// for ( var i = 0; i < 4;) {
//   //console.log(i);
//   var guessAge = Number(prompt('Can you giss my age its between 20 and 30'));
//   //var age1 = pareseInt(prompt('Can you giss my age its between 20 and 30'));
//   //console.log(age);
//   //console.log(i);
//   if (guessAge === 25) {
//     alert('Thats right(:) ');
//     //we can use break;
//     // console.log("age=yes")
//     rank=rank+1;
//     break;
//   } else if ((25<guessAge) && (guessAge <=27) || (25>guessAge) && (guessAge >=23)){
//     alert('hot ');
//     i=i+1;
//   } else if ((30>=guessAge) && (guessAge>27) || (23>guessAge) && (guessAge>=20)) {
//     alert('cold ');
//     i=i+1;
//   } else {
//     alert ('Are you stuped its between 20 and 30');
//     i=i+1;
//   }
// //console.log(i);
// }
// alert('It`s 25 (:');

alert('Can you guess one of my hobby, choose between: Swimming, eating, dancing, reading, racing');

var hobby =['swimming', 'play video games', 'eating','fighting','sleeping'];

for(var k =0 ; k < 6;k++){
  var guess = prompt('guess my hobby').toLowerCase();
  var alertMsg = 'try again';
  for(var n = 0; n < hobby.length ; n = n+1){
    if (guess === hobby[n])
    {
      //console.log("finaly")
      k=6;//we get out of the first loop
      n=hobby.length; // out from the second loop 
      alertMsg= 'congratulation '+ userName + ' you made it :)';
      rank=rank+1;
    }
  }
  alert(alertMsg);
}
alert('Your rank = '+rank+' out of the 7' );

