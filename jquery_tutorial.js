//Basic syntax -> JQuery start (when document is ready, do...)

$(document).ready(function () {});

//Short version

$(function () {});

//Basic syntax is: "SELECTOR" + "EVENT"

/*Selectors: type the desired selector in the $( ... ) parentheses as a string (unless it is a variable).
Works with both tag types and CSS selectors.*/

// $(function () {
//     $("p")
//     $(".class")
//     $("#id div")
//     $([attribute])
//     $("p:first-child -- :even(even numbers only) --:odd (odd numbers only)")
// });

/*EVENTS (examples): Events are the main focus of the JQuery library.
They apply behaviours on the selected elements depending on the events chosen in the functions.

Some events: click, mouseenter, mouseleave, focus (for text inputs), blur (opposite of focus), keypress, submit, change, scroll,
keydown (keep key pressed), keyup, onload... 

Using the ".css()" method, it is possible to alter an element's CSS properties on specific events.
".text()" method changes the inner text of said element.

The "this" keyword can be used to specify the same element selected by the function itself (in the case below, "this" refers to
"#one button"). */

$(function () {
  $("#one button").click(function () {
    $("#one .square").css("background-color", "red");
    $(this).text("You clicked me!");
    $(this).css("color", "blue");
  });

  //"on()" method: groups together multiple events happening on the same element, for cleaner and easier coding.
  //Syntax is similar to Switch

  $("#two .square").on({
    mouseenter: function () {
      $(this).css("background-color", "red");
    },
    mouseleave: function () {
      $(this).css("background-color", "green");
    },
    click: function () {
      $(this).css("background-color", "violet");
    },
  });

  /*".show()" and ".hide()" methods remove/add respectively the "display: none;" CSS rule on the specified element.
  ".toggle" alternates the two instead. 
  It is possible to add a timer attribute to "animate" the event.*/

  $("#three button:first-of-type").click(function () {
    $("#three .square").show();
  });
  $("#three button:nth-of-type(2)").click(function () {
    $("#three .square").hide();
  });
  $("#three button:last-of-type").click(function () {
    $("#three .square").toggle(500);
  });

  //Accordion example (no slide()):
  $("#three #noSlide h4").click(function () {
    $("#three #noSlide p").toggle(1000);
  });

  //fade() (in, out, to, toggle) tampers with opacity (0 <-> 1, up to display: none;), while slide() (in, out, toggle)
  //fadeTo(timer, targetOpacity) lets you choose ad opacity target value
  $("#three #slide h4").click(function () {
    $("#three #slide p").slideToggle(1000);
  });
  $("#three #fade h4").click(function () {
    $("#three #fade p").fadeToggle(1000);
  });
});
