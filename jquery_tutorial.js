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
  It is possible to add a timer parameter to "animate" the event.*/

  $("#three button:first-of-type").click(function () {
    $("#three .square").show(500);
  });
  $("#three button:nth-of-type(2)").click(function () {
    $("#three .square").hide(500);
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

  //Get or set content/values of an element/attribute with text(), html(), val()
  //text() and html() work the same as innerText and innerHTML
  $("#five > button").click(function () {
    $("#five p:first-of-type").text("Text changed with text() method!");
    $("#five p:nth-of-type(2)").html("Text changed with <strong>html()</strong> <i>method!</i>");
    $("#five a").attr("href", "https://9gag.com/trending");
    $("#five a > button").text("Go somewhere else");
  });
  //val() can read and modify the value of certain elements, such as inputs, checkboxes, selects
  //attr() can instead read or modify the value of an element's attribute (above function ^^^)
  $("#five input").blur(function () {
    console.log($(this).val());
    console.log($(this).attr("type"));
  });

  //Adding content
  //append() and prepend() generate and place new content after and before the ELEMENT'S CONTENT respectively
  //after() and before() will instead place said content after or before the ELEMENT ITSELF as placed in the HTML
  let i = 0;
  $("#six button").click(function () {
    if (i === 0) {
      $("#six p:first-of-type").append("<strong>A</strong>").prepend("<strong>B</strong>");
      $("#six #surrounded").before("<p>I'm above!</p>").after("<p>I'm below!</p>");
      i = 1;
    }

    //Removing content
    //remove() will delete the target element along with its children. A string parameter can be passed to specify a filter of removable elements, such as a class
    //empty() will instead delete only the target element's children
    $("#six .light-square").remove();
    $("#six .other-square").empty();
  });

  //CSS with JQuery: it is possible to use addClass(), removeClass(), toggleClass() to manipulate CSS classes on elements
  //css() method allows to read and manipulate CSS properties on elements
  $("#seven button").click(function () {
    $("#seven p:first-of-type").addClass("customClass");
    $("#seven p:nth-of-type(2)").removeClass("customClass");
    $("#seven p:nth-of-type(3)").toggleClass("customClass");
    console.log($("#seven p:nth-of-type(3)").css("color"));
    //Dimensions: to understand the methods used to read and modify an element's dimensions in JQuery, remember the box model.
    /*Going inner to outer level, the TOTAL width / height read by the system will be:
      Content: width() / height()
      Padding: innerWidth() / innerHeight()
      Border: outerWidth() / outerHeight()
      Margin: outerWidth(true) / outerHeight(true)
    */
    $("#seven .square").width(500);
  });

  //DOM Traversing uses the same concept from JS: parent, ancestor, child, sibling, descendant
  //Methods for the PARENT and the ANCESTOR: parent() [first parent, can be chained], parents() [ALL parents, even <html>], parentsUntil() [specify the last parent excluded]
  //Methods for CHILD and DESCENDANT: children() [ALL DIRECT children], find() [find the specified target children]
  //Methods for SIBLING: siblings() [ALL siblings], next() [CLOSEST sibling GOING DOWN THE DOM], nextAll() [ALL SIBLINGS going down the DOM],
  //nextUntil() [ALL siblings going down UNTIL specified element], prev() [PREVIOUS sibling], prevAll() [ALL previous siblings], prevUntil()
  $("#eight button").click(function () {
    // $("#eight p").parent().css({ border: "1px solid red" });
    $("#eight #sibling").siblings().css({ border: "1px solid red" });
  });

  //FETCH and AJAX
  $("#nine button").click(function () {
    //The method load() can be used to load another file inside an element
    $("#nine .square").load("hello.txt");
    //the getJSON() method can be used to get a local JSON file, can use callbacks
    $.getJSON("test.json", function (data) {
      console.log(data);
    });
    //get() and post() methods fetch data from an API instead.
    //It is also possible to use ajax() methods (WORKS WITH PHP)
    //Example of POST with Ajax (not functioning because of missing PHP):
    $.ajax({
      url: "test.php",
      type: "post",
      data: $(this).serialize(),
      success: function (res) {
        console.log(res);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      },
    });

    //Example of GET (json file)
    $.ajax({
      url: "test.json",
      type: "get",
      dataType: "json",
      success: function (res) {
        console.log(res);
        $("#nine p").text(res.users[0].nome);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      },
    });
  });
});
