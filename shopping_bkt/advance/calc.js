// document.addEventListener('DOMContentLoaded', () => {
// var numb1Btn = document.querySelector('#numb1').value;
// var numb2Btn = document.querySelector('#numb2')
//
//   var para = document.getElementById('nan')
//   var fields = document.querySelectorAll('input');
//   for (var i = 0; i < fields.length; i++){
//     fields[i].addEventListener('blur', function(event){
//       var numbers = event.target.value;
//       console.log(numbers);
//       if(isNaN(numbers)){
//         para.textContent = 'You need to enter a number!';
//       }
//     });
//   }
//   // const newCalculation= document.querySelector('form');
//   // newCalculation.addEventListener('submit', newSubmitHandler);
// });

// const newSubmitHandler = function(event){
//   event.preventDefault();
//   const form = event.target;
//   formValues(form);//3
//   form.reset();
// }
// const formValues = (form) => ({
//   numb1: form.numb1.value,
//   numb2: form.numb2.value
// });

function calculator(fields){
  var result = 0;
  // var numb1 = parseInt(prompt('enter number'))
  // var numb2 = parseInt(prompt('enter number'))
  // var op = prompt('please enter operator: + or - or / or *');
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
}


function solve() {
  var math_opt = document.getElementsByName("math");
  var no_one = document.getElementById("no1").value;
  var no_two = document.getElementById("no2").value;

  if (no_one=="") {

    // var msg = "<span class='warning'>Give the first value.</span>";
    // document.getElementById('msg').innerHTML = msg;
    return false;
  }
  else if (no_two=="") {
    // var msg = "<span class='warning'>Give the second value.</span>";
    // document.getElementById('msg').innerHTML = msg;
    return false;
  }

  if (math_opt[0].checked == true) {

    sum = parseInt(no_one) + parseInt(no_two);

    // results = "<span class='message'> The sum of " + no_one
    // + " and " + no_two + " is " + sum +".</span>";
    //
    // document.getElementById('msg').innerHTML = results;
    return false;

  } else if (math_opt[1].checked == true) {

    diff = parseInt(no_one) - parseInt(no_two);

    // results = "<span class='message'> The difference between "
    // + no_one + " and " + no_two + " is " + diff +".</span>";
    // document.getElementById('msg').innerHTML = results;
    return false;

  } else if (math_opt[2].checked == true) {

    product = parseInt(no_one) *parseInt(no_two);

    // results = "<span class='message'>The product between "
    // + no_one + " and " + no_two + " is " + product +".</span>";
    // document.getElementById('msg').innerHTML = results;
    return false;
  } else if (math_opt[3].checked == true) {

    quotient = parseInt(no_one) / parseInt(no_two);

    // results = "<span class='message'>The quotient between "
    // + no_one + " and " + no_two + " is " + quotient +". </span>";
    // document.getElementById('msg').innerHTML = results;
    return false;
  }

  else {
    // var msg = "<span class='warning'>You must select your math operator.</span>";
    // document.getElementById('msg').innerHTML = msg;
    return false;
  }

  return true;
}

function reset_msg() {
  document.getElementById('msg').innerHTML = '';
}

function clear()
{
  document.getElementById('msg').innerHTML = "";
  no_one="";
  no_two="";
  no_one.focus();
}
