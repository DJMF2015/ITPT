$(document).ready(function(){
  $(".btn-dark").click(function(){
    $("body").toggleClass("bg-dark");
    $(".jumbotron").toggleClass("bg-dark");
    $(".x").toggleClass("text-white");
  });
});
//   $(".fa-2x").click(function(){
//     $("nav").hide();
//   })
//
$(document).ready(function(){
  $(".btn-success").click(function(){
    $(".display-1").html("Text changed");
  });
});

$(document).ready(function(){
  $(".btn-primary").click(function(){
    $("h1").toggleClass("display-1");
  });
});

$(document).ready(function(){
  $(".btn1").click(function(){
    $("nav").fadeOut();
  });
  $(".btn2").click(function(){
    $("nav").fadeIn();
  });
});
