/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1

$(".changeColor").click(function(){
  $("ul li:nth-child(3)").css("color", "#8A2BE2");
});

// Question #2
$("ul li:nth-child(4)").click(function(){
  $("ul li:nth-child(4)").append("<li>A new 5th line</li>");
});

// Question #3
$("#removeLi").click(function(){
  $("ul li:nth-child(2)").remove();
});

// Question #4 //need to make the others disappear
$("ul li:last-child").click(function(){
  $("ul li:last-child").css("font-size", "40px");
});

// Question #5
$(".cute").click(function(){
  $(".clones").append($(".cute").clone(true));
});

  // Question #6
$("body").dblclick(function(){
  $("#makeSquare").css("height", "300px")
  $("#makeSquare").css("border-radius", "0px")
});


// Question #7//doesnt work
$(".black swatch").click(function(){
  $("body").addClass("black");
})
$(".wood swatch").click(function(){
  $("body").addClass("wood");
})
$(".chaos swatch").click(function(){
  $("body").addClass("chaos");
})
$(".restore swatch").click(function(){
  $("body").css("background-color", "white");
})
  // Question #8 //clicking doesnt work

$("#hover").hover(function(){
  $("#hover").css("background-color", "red");
});
$("#hover").click(function(){
  $("#hover").addClass("green")
});
$("#hover").click(function(){
  $("#hover").removeClass("green")
});

});
