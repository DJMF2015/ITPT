document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);
});

const handleButtonClick = function() {

  var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
  var imgPath = "images/dice" + randomNumber1 + ".png"
  var img = document.querySelector(".img1");
  img.setAttribute("src", imgPath);

  var randomNumber2 = (Math.floor(Math.random() * 6) + 1);
  var imgPath2 = "images/dice" + randomNumber2 + ".png";
  var image2 = document.querySelector(".img2");
  image2.setAttribute("src", imgPath2);


  if (randomNumber1 > randomNumber2){
    document.getElementsByTagName('h1')[0].innerHTML = "player1 is winner"
  } else if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName('h1')[0].innerHTML = "player2 is winner"
  } else if
  (randomNumber1 === randomNumber2){
    document.getElementsByTagName('h1')[0].innerHTML = "Player 1 & 2 Draw"
  }
};

 
