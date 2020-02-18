'use strict';
var weekDays = ['Sunday' , 'Monaday' , 'Tuesday'];
console.log(weekDays);
weekDays.push('Wedensday','Thursday');
console.log('array after push ' , weekDays);
console.log(weekDays.length);
for(var i = 0 ; i < weekDays.length ; i++){
  document.write('<p>' + 'index is ' + i + ' ' + weekDays[i] + '</p>');
}

// go search for more stuff I need to return true or false

// var favFoods = ['mansaf' , 'pizza' , 'burger' , 'steak'];
// var myFav = prompt('What\'s my fav food?');
// for(var j = 0; j < favFoods.length ; j = j+1){
//   if(myFav === favFoods[j]){
//     console.log('yes you are True !');
//   }else{
//     console.log('No try Again !');
//   }
// }

// var userName = prompt('what\'s your Name ? ');
// console.log(userName);
// while( userName !== 'reham' ){
//   console.log(userName);
//   userName = prompt('what\'s your Name ? ');
//   console.log(userName);
// }

var index = 0;
do{
  index++;//index = index + 1;
  console.log('index ' , index);
}while(index < 50);


