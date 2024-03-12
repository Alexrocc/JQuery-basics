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

  //Animations: basic animations (CSS properties modifications in a set span of time) can be started
  //with the animate({parameters}, speed, callback) method
  //To concatenate animations, simply tail another animate(): this will start the second animation after the first one ends (default)
  //Parameters can be the ending position where the element moves to, ending dimensions, opacity etc. (Colors are supported with the JQuery UI Plugin)
  //Different classes can also be applied/removed/switched to the element (addClass(), toggleClass(), switchClass(), removeClass())
  $("#start").click(function () {
    $("#stop + .square").animate({ left: "250px", width: "100px", height: "160px" }, 1500);
    $("#stop + .square").animate({ left: "450px", width: "180px", height: "200px" }, 1500);
    $("#stop + .square").animate({ left: "0", width: "200px", height: "200px" }, 1500);
  });

  //stop(stopAll, skipAnimation) allows to stop an animation. Without parameters, it will stop the current animation, directly starting the next.
  //stopAll allows to interrupt all animations, "blocking" the element.
  //skipAnimation() interrupts the current animation, starting the next AT THE ENDING PARAMETERS OF THE FIRST (example above: the position).
  //Both parameters are boolean and are "false" by default.
  $("#stop").click(function () {
    $("#four .square").stop();
    // $("#four .square").stop(true);
    // $("#four .square").stop(false, true);
  });

  //Chaining: allows to chain multiple animation functions without the need of selector repetition
  //Also applicable to fade(), slide() etc.
  //Callback functions can be applied after a method and they will be called after the step
  $("#start2").click(function () {
    $("#start2 + .square")
      .animate({ left: "250px", width: "100px", height: "160px" }, 1500, function () {
        console.log("first step");
      })
      .animate({ left: "450px", width: "180px", height: "200px" }, 1500, function () {
        console.log("second step");
      })
      .animate({ left: "0", width: "200px", height: "200px" }, 1500, function () {
        console.log("third step");
      });
  });
});
