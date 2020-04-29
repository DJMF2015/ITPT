let array = ["apple", "mango", "toothpaste", "orange"];


function run(){
  var i, len, text;
  for (i = 0, len = array.length, text = ""; i < len; i++) {
    text += "<div class='card' style='width: 12rem;display:inline-grid !important; background-color:#FF851B; margin-right: 40px;margin-bottom: 30px;''><div class='card-body'>  <h4 class='card-title' style='color: #DDDDDD;'>" + array[i] + "</h4></div> </div>";;
  }
  document.getElementById("heading").innerHTML = text;
}

function add(){
  var x = document.getElementById('items').value;
  array.push(x);
  run();
}

function remove() {
  array.pop()
  run();
}
