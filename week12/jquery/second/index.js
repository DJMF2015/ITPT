
$(document).ready(function(){
  $("body").keypress(function(){
    var title = $("div").attr("class");
    $(".display-1").text(title);
    $(".jumbotron").toggleClass("bg-dark");

  });
});

$(document).ready(function(){
  $("body").keyup(function(){
    $(".display-1").text(title);
    $(".jumbotron").toggleClass("bg-dark");
  });
});

var output = '';
$(document).ready(function(){
  $("body").keypress(function(){

    var x = (event.key);
    output += x;
    $(".display-1").text(output);
  });
});

// $(document).ready(function(){
//   $(".jumbotron ").mouseover(function(){
//     alert("jumbotron is pressed");
//     // $(this).animate({fontSize: "+=6px"});
//   })
// });


$(document).ready(function(){
  $(".btn-primary").click(function(){
    $(".jumbotron").after("<div class='jumbotron'></div>");
  });
});

$(document).ready(function(){
  $(".btn-primary").click(function(){
    $("p").prepend("David");
  });
});

$(document).ready(function(){
  $(".btn-danger").click(function(){
    $(".jumbotron").remove();
  });
});

$(document).ready(function(){
  $(".btn-danger").click(function(){
    $(".jumbotron").hide();
    //append();
  });
});
$(document).ready(function(){
  $(".btn-success").click(function(){
    $(".jumbotron").toggle();
    //append();
  });
});

// $(".btn-danger").click(function(){
//   $(".jumbotron").toggle();
// });
// });
$(document).ready(function(){
  $(".btn1").click(function(){
    $(".jumbotron").animate({left: '700px'});
  });
  $(".btn2").click(function(){
    $("nav").slideDown();
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

$(document).ready(function(){
  $(".btn1").click(function(){
    $(".jumbotron").animate({left: '700px'});
  });
  $(".btn2").click(function(){
    $("nav").slideDown();
  });
});
