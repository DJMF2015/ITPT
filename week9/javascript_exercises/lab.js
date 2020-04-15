var  user =  prompt("Enter user name");
var passuser = "DAIM";
var capuser = user.toUpperCase();
if (capuser = passuser)
{
  alert(" Now you have entered into your secure world");
}
else
{
  alert(" try again");
}

///////////////////////////////////
var name1=prompt("Please enter name of partner 1 ");
var name2=prompt("Please enter name of partner 2 ");
var score=Math.round( Math.random()  *   100);
alert(" 💖 Love Score is :"+ score);

///////////////////////////////////
var words = prompt("Please add words");
var totallength = 280;
var wordslenght = words.length;
var remaininglenght = totallength - wordslenght;
var slicedwords = words.slice(0, 280);
alert("You have written " + wordslenght + "  characters. You have " + remaininglenght + "  characters left" );
alert(slicedwords)

///////////////////////

let total =200;
var name = 'Hello. David is tweeting here. Slice some of my words'
var name = prompt('please enter a name' );
alert(name.length + '\n'+ name);
total -= name.length;
alert('Your name is ', + '\n' + name + '\n' + name.length + '\n you have' + total + '\n characters remaining ');
console.log(total)


var total = 280;
function myFunction() {

  var words = prompt('please enter words...')
  var wordlength =  words.length;
  var remaining = total - wordlength;
  console.log('Total left : '+ remaining)
  return words.slice(0,280);//start, end
}
var str = "Hello. David is tweeting here. Slice some of my words.";
console.log(myFunction())



/////////////////////////
// let total =200;
var name = 'Hello. David is tweeting here. Slice some of my words'
var name = prompt('please enter a name' );
alert(name.length + '\n'+ name);
total -= name.length;
alert('Your name is ', + '\n' + name + '\n' + name.length + '\n you have' + total + '\n characters remaining ');
console.log(total)
////////////////////////


var result = 0;
var numb1 = parseInt(prompt('enter number'))
var numb2 = parseInt(prompt('enter number'))
var op = prompt('please enter operator: + or - or / or *');
switch(op) {
  case '+':
  //////code black
  result = numb1 + numb2
  alert('Calculation is: '+result)
  break;
  case '-':
  //////code black
  result = numb2 - numb1;
  alert('Calculation is: '+ result)
  break;
  case '/':
  ///////////
  result = numb2 / numb1;
  alert('Calculation is: '+result)
  break;
  case '*':
  result = numb2 * numb1;
  alert('Calculation is: '+result)
  default:
  // code block
  console.log("Error")
}
