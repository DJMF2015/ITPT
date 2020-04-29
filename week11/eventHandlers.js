var number = document.querySelectorAll('button').length;

for(var i =0; i < number; i++ ){
  document.querySelectorAll('button')[i].innerHTML = "text changed";
  document.querySelectorAll('button')[i].addEventListener("click", function(){
    document.getElementById('heading').innerHTML = "function is running fine" ;
  });
}
