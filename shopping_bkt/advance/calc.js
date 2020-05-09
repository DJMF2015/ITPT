document.addEventListener('DOMContentLoaded', () => {
  // var numb1Btn = document.querySelector('#numb1')
  // var numb2Btn = document.querySelector('#numb2')

  var fields = document.querySelectorAll('input');
  for (var i = 0; i < fields.length; i++){
    fields[i].addEventListener('blur', function(event){
      var numbers = event.target.value;
      console.log(numbers);
      if(isNaN(numbers)){
        // console.log(numbers +' is not a number');
        alert(numbers +' is not a number');
      }
    });
  }
  const newCalculation= document.querySelector('form');
  newCalculation.addEventListener('submit', newSubmitHandler);
});

const newSubmitHandler = function(event){
  event.preventDefault();
  const form = event.target;
  formValues(form);//3
  form.reset();
}
const formValues = (form) => ({
  numb1: form.numb1.value,
  numb2: form.numb2.value
});
// var x = document.forms.myform.numb1.value; if(isNaN(a)) alert(a+' is not a number');

function calculator(){
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
