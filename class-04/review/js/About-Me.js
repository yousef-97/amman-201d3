'use strict' ;
alert("Hello, you are attended to view a very secret information about me");
alert("Before that i had to test if you are accepted to view it or not");
alert("Okay, lets go");

  var Name = prompt("Type your name");
  while (Name === "") {
  alert('Please type a name in the field!')
  var Name = prompt("Type in your name");
} 

alert('Hello ' + Name);
alert('Now just answer with yes or no okey  '+Name+'?');
var clear = prompt("Is it clear?").toLowerCase();
if (clear === "yes") {
  alert('Thats good!')
  // console.log("clear=yes")
} else {
  alert('You are not allowed to access to this secret information, you will be redirected to a site that match your brain size!! have fun (: ' + Name);
  window.open("https://www.youtube.com/watch?v=XqZsoesa55w",'_blank');
  // console.log("clear=",clear)
}


var age = prompt("Are you 18 year old or above").toLowerCase();

if (age === "yes") {
  alert('Nice!!')
  // console.log("age=yes")
} else {
  alert('You are not allowed to access to this secret information, you will be redirected to a site that match your brain age!! have fun (: ' + Name);
  window.open("https://toyoraljanah.com/",'_blank');
  // console.log("age=",age)
}


alert('Keep going, just 3 more questions! (:');

var secrets = prompt("Can you keep secrets as a secrets").toLowerCase();

if (secrets === "yes") {
  alert("Nice!! I'll trust you :)")
  // console.log("secrets=yes")
} else {
  alert('You need to know about discloses secrets disadvantage, ' + Name);
  window.open("https://islamqa.info/en/answers/27190/what-is-the-ruling-on-one-who-discloses-secrets",'_blank');
  // console.log("secrets=",secrets)
}

alert('Excelente, just 2 more questions! (:');

var enjoy = prompt("Are you enjoying chating with me").toLowerCase();

if (enjoy === "yes") {
  
  alert("Seems like you are feeling lonely :`(")
  alert("I think you need to see a psychiatrist, do not worry it is not a shame :)")
  // console.log("enjoy=yes")
} else {
  alert('You are all about sadness ' + Name);
  window.open("https://www.youtube.com/watch?v=qYS0EeaAUMw",'_blank');
  // console.log("enjoy=",enjoy)
}

alert("Excelente, last questions! (:");

var donate = prompt("Did you accept to pay 99999999$ for this secret information").toLowerCase();

if (donate === "yes") {

  alert('You can send the money using this link `www.blablabla.money`')
  alert('congratulation '+ Name + ' you made it :)')
  // console.log("donate=yes")
} else {
  alert('You are so mean :`( ' + Name);
  window.open("https://www.youtube.com/watch?v=QhfrhyHOstg",'_blank');
  // console.log("donate=",donate)
}


