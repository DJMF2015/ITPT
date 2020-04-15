// var x = 'hoisted and Global scope'
// const = 'cannot be changed and reassigned.can conain mutable properties'
// let = 'block scoped. can be reassigne within scope assigned'

const twoAdd = function(a, b) {
  let result = a*b;
  return result;
}

console.log(twoAdd(3, 9));

// console.log(twoAdd(8,9))

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
/////////////////////////
// let total =200;
var name = 'Hello. David is tweeting here. Slice some of my words'
// var name = prompt('please enter a name' );
// alert(name.length + '\n'+ name);
// total -= name.length;
// alert('Your name is ', + '\n' + name + '\n' + name.length + '\n you have' + total + '\n characters remaining ');
// console.log(total)
////////////////////////
// Prompt the user to enter a tweet (enter more than 280 characters)
// Using the SLICE function cut the tweet at 280 characters
// Alertback back the 280 characters tweet
////////////////////////////////////////////

var total = 280;
function myFunction() {

  var words = prompt('please enter words...')
  var wordlength =  words.length;
  var remaining = total - wordlength;
  console.log('Total left : '+ remaining)
  return words.slice(0,280);//start, end
}
// var str = "Hello. David is tweeting here. Slice some of my words.";
console.log(myFunction())
