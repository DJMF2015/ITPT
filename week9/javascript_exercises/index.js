// var x = 'hoisted and Global scope'
// const = 'cannot be changed and reassigned.can conain mutable properties'
// let = 'block scoped. can be reassigne within scope assigned'

const twoAdd = function(a, b) {
  let result = a*b;
  return result;
}

console.log(twoAdd(3, 9));

console.log(twoAdd(8,9))

const p1 = {name: 'david', age: 23, location:'edinburgh'}
const p2 = {name: 'john', age:37,location: 'Glasgow'};
// console.log(p1.name + ' \n ' + p1.age + '\n'+ p2.name + '\n' + p2.age)


var price =[23,4,55.4,23.5];
var values= ['david', 'john','fiat']

price[1];
// alert(price[1] +'\n shopper is :' + values[0])
////////
// Output(Alert): You have written 182 characters, you have 98 characters left.
// Twitter Character count program:
//
// Prompt user to enter a long paragraph.
// Tell them how many characters they have written and how many characters they are remaining out of 280.
//
// Output(Alert): You have written 182 characters, you have 98 characters left.

// Prompt the user to enter a tweet (enter more than 280 characters)
// Using the SLICE function cut the tweet at 280 characters
// Alertback back the 280 characters tweet
////////////////////////////////////////////


name = 'david fulton'

let capitalLetters = name.charAt(0).toUpperCase() + name.slice(1)
// console.log(capitalLetters)

var score=Math.round( Math.random()  *   100);
if (score<40){
  console.log('You dont love each other')
} else if (score>70) {
  console.log('You love each other  💖.')
}else {
  console.log('touch and go...')
}
console.log(" 💖 Love Score is :"+ score);

// var user = 'david'
// var passuser = 'daid'
// // var capitalUser = user.toUpperCase()
// if (user ===passuser){
//   console.log('now youve entered into your bank')
// } else {
//   console.log(   ' is wrong password. try again')
// }

// var data1 = prompt('please enter first number')
// var data2 = prompt('please enter second number')
// var passcode = 1234;

var result;
var number = '-';
var numb1 = 2; var numb2 =33;
switch(number) {
  case '+':
  //////code black
   result = numb1 + numb2
  console.log(result)
  break;
  case '-':
  //////code black
  result = numb2 - numb1;
  console.log(result)
  break;

  default:
  // code block
  console.log("Error")
}
