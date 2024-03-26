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

Some events: click, dblclick, mouseenter, mouseleave, focus (for text inputs), blur (opposite of focus), keypress, submit (remember e.preventDefault()),
change, scroll, keydown (keep key pressed), keyup, onload, hover... 

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

  //WHAT IS AJAX: Asyncronous JavaScript And XML, it is used to load data in the background and display it on the webpage,
  //without reloading the page itself.

  $("#nine button").click(function () {
    //The method load() can be used to load another file inside an element
    $("#nine .square").load("hello.txt");
    //the getJSON() method can be used to get a local JSON file, can use callbacks
    $.getJSON("test.json", function (data) {
      console.log(data);
    });

    //get() and post() methods fetch data from an API instead.
    //$.get("URL", callback(data, status))

    $.get("https://659ebef647ae28b0bd369b17.mockapi.io/steam/games", function (data, status) {
      //from here you can display and/or manipulate the data you fetch
      console.log(data);
      console.log(status);
    });

    //$.post("URL", body [must respect the api data structure], callback)
    $.post(
      "https://659ebef647ae28b0bd369b17.mockapi.io/steam/games",
      {
        /*BODY*/
      },
      function (data, status) {
        console.log(data);
        console.log(status);
      }
    );

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

/*WAYPOINTS: this small plugin allows you to select specific elements to use as triggers during scolling, allowing for simplified
onScroll animations and scripts to trigger once the selected element reaches the top of the page.
To add to the document, simply add the CDN:
WITH VANILLA JS - https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js
WITH JQUERY - https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js

FOR VANILLA JS:
The plugin adds the Waypoint class, which can contain several options.
The MANDATORY properties are "element" and "handler".
"Element" is the DOM element observed during the scroll, while the "handler" is the function triggered once the "element" reaches the top of the viewport.
It is possible to limit the trigger or to trigger different functions depending on the DIRECTION of the scroll, by simply adding a direction
as a STRING parameter of the "handler" function.
Also, you can set the waypoint at different "offset"s compared to the "element". This offset can take several measurements, like px and %, as well as return value from functions.
The "context" option defines which element will be the context for the waypoint trigger (which is "window" by default). This can be useful for
inner-scrolling sections with overflow. In this case, the "offset" will be calculated depending on the "context" and not the window itself.
The "horizontal" option allows to change the waypoint axis reference from Y axis to X axis, changing the "direction" values to "right" and "left".
"horizontal" is a boolean option, and is set false by default.
"group" is an option which accepts string values (group name) and logically groups together a number of waypoints which allows the use of some group-based methods.
Default group is "default", all waypoints have this group name upon creation unless differently specified.
"continuous" is a boolean option applies when a single scroll events would trigger multiple waypoints. Commonly, this applies with "Jump to" buttons on
websites that bring the view below/above a certain point. This is a GROUP BASED option.
By default is set to "true" and a skip will trigger ALL continuous waypoints in order, modifying it to "false" will make only the last element OF EACH GROUP PRESENT trigger the waypoint when using the same-page link.
This option's scope is limited to the SINGLE WAYPOINT and has to be set for each waypoint individually as necessary.

The "this" keyword inside a Waypoint class is, as with all other JS classes, referred to the SINGLE INSTANCE of that class.

Some convenience class and instance methods are also included:
CLASS METHODS: destroyAll(), disableAll(), enableAll(), refreshAll(), viewportHeight(), viewportWidth() [last 2 checks height and width of the window. They work around iOS inconsistencies and for "offset" calculations]
About refreshAll():This method needs to be called whenever you make changes to the DOM, CSS, or anything that may effect the layout and positioning of elements on the page. 
It is called automatically when the window is resized, so it only needs to be called manually when layout changes happen outside of a resize.

offset: function() {
  return Waypoint.viewportHeight() - this.element.clientHeight
}

INSTANCE METHODS: destroy(), disable(), enable(), next(), previous() [allow to identify the next and previous waypoints in a group, else returns null]

WAYPOINT.CONTEXT SPECIFIC METHODS: destroy() [destroys ALL waypoints inside a certain context], refresh() [forces a ricalculation of all WP inside a context]
Context.findByElement(element) will instead return the CONTEXT INSTANCE associated with the parameter element, else undefined.
let context = Waypoint.Context.findByElement(element)
  context.destroy()

let context = Waypoint.Context.findByElement(element)
  context.refresh()

BASIC EXAMPLE:

let waypoint = new Waypoint({
  element: document.getElementById("waypoint")
  handler: function(direction) {
    notify(`${this.element.id} triggered while scrolling ${direction} here ${this.triggerPoint}`)
  },
  offset: "50%",
  context: document.querySelector("#contextElement"),
  horizontal: true
})

More here: http://imakewebthings.com/waypoints/api/waypoint/

BASIC EXAMPLE IN JQUERY:

$("#element").waypoint(function(){
  some instructions
}, { offset: 50%, context: "#context-element" })
*/

/*
ANIMATE.CSS: a class-based library comprised of about 100 ready-made CSS animations. To apply, simply use the CDN on a <link> tag:
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/> 
To use this library's animations, simply add the MANDATORY general class: animate__animated, followed by any animation class in the library
EXAMPLE: class = "animate__animated animate__bounce"

or do it using JQuery:

$("#element").addClass("animate__animated animate__fadeInRight")

It is also possible to customize many aspects of these animation by simply using CSS rules:
.animate__bounce{
  animation-delay: 200
}
*/
