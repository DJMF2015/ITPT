
function calculate() {
  const math_opt = document.getElementsByName("math");
  const no_one = document.getElementById("no1").value;
  const no_two = document.getElementById("no2").value;

  if (no_one=="") {

    const message = "<span class='warning'>Please enter value.</span>";
    document.getElementById('msg').innerHTML = message;
    return false;
  }
  else if (no_two=="") {
    const message = "<span class='warning'>Please enter value.</span>";
    document.getElementById('msg').innerHTML = message;
    return false;
  }

  if (math_opt[0].checked == true) {

    sum = parseInt(no_one) + parseInt(no_two);

    results = "<span class='message'> The sum of " + no_one
    + " and " + no_two + " is " + sum +".</span>";

    document.getElementById('msg').innerHTML = results;
    return false;

  } else if (math_opt[1].checked == true) {

    diff = parseInt(no_one) - parseInt(no_two);

    results = "<span class='message'> The difference between "
    + no_one + " and " + no_two + " is " + diff +".</span>";
    document.getElementById('msg').innerHTML = results;
    return false;

  } else if (math_opt[2].checked == true) {

    product = parseInt(no_one) *parseInt(no_two);

    results = "<span class='message'>The product between "
    + no_one + " and " + no_two + " is " + product +".</span>";
    document.getElementById('msg').innerHTML = results;
    return false;
  } else if (math_opt[3].checked == true) {

    quotient = parseInt(no_one) / parseInt(no_two);

    results = "<span class='message'>The quotient of division is "
    + no_one + "  " + no_two + " is " + quotient +". </span>";
    document.getElementById('msg').innerHTML = results;
    return false;
  }

  else {
    const message = "<span class='warning'>Please select math operator.</span>";
    document.getElementById('msg').innerHTML = message;
    return false;
  }
  return true;
}

function reset_message() {
  document.getElementById('msg').innerHTML = '';
}

function clear()
{
  document.getElementById('msg').innerHTML = "";
  no_one="";
  no_two="";
  no_one.focus();
}
