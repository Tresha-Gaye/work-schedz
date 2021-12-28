var tasks = "";
var taskBox = $(".task-box");
// task box was clicked


// var createTask = function(taskText) {
//    var taskP = $("<p>")
//    .addClass("badge badge-primary badge-pill")
//    .text(text);

//    taskBox.append(taskP);


// }

// append task p element to task box parent div
$(".lock-box").on("click", "div", function() {
   console.log(click);
});

var taskInput = $("<textarea>")
   .attr("type", "text")
   .addClass("form-control bg-transparent text-white border-0 ml-auto  justify-content-center")
   .val(tasks);

   taskBox.append(taskInput);
   taskInput.trigger("focus");


   // $(".list-group").on("click", "p", function() {
   //    var text = $(this)
   //      .text()
   //      .trim();
   //    // console.log(text);
   //    var textInput = $("<textarea>")
   //      .addClass("form-control")
   //      .val(text);
      
// **Function to display current and time at the top of the calendar**

// var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
// console.log(currentDate);
// document.querySelector("#currentDay").innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");

// Above works but is static & only updates time once upon refresh
// Preferred behavior: setInterval runs every second & updates date & time dynamically in the window

// Below function exhibits preferred behavior. Credits: to MilkyWayJoe via StackOverflow
var datetime = null,
   date = null;

var update = function() {
   date = moment(new Date())
   datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
   dueTime();
};

$(document).ready(function() {
   datetime = $('#currentDay')
   update();
   setInterval(update, 1000);
});


// create new input element for tasks

//task box was clicked

// $(".task-box").text("")
// $("#due-9").click(function() {
//    var taskInfo = $(".task-box")
//    .text()
//    .trim()
// }

   // var taskInput = (".task-box")
   //    .attr("type", "text")
   //    .addClass("task-input")
   //    .val(tasks);

// $(".task-box").on("click", "div", function() {
//    // get current text
//    var tasks = $(this)
//      .text()
//      .trim();
 
// var taskInput = $(".task-box")
//    .attr("type", "text")
//    .addClass("task-box")
//    .val(tasks);

//   // swap out elements
//   $(this).replaceWith(taskInput);

// add color code to timeblocks for past, current or future events
var dueTime = function () {
   var getDueTime = new Date ($.now());
   var currentHour = getDueTime.getHours();
      // console.clear;
   for (var i = 9; i < 18; i++) {
      var idNum = i;
      var taskTime = $("#due-" + idNum.toString());
      if(currentHour > idNum) {
         taskTime.css("background-color", "grey");
      }
      else if(currentHour == idNum) {
         // console.log(currentHour, idNum);
         taskTime.css("background-color", "red");     
      }
      else {
         taskTime.css("background-color", "green");     
      }
   }
};

// var addTask = function() {

// }

var saveTasks = function(idNum) {
   // localStorage.setItem("tasks", JSON.stringify(tasks));
   var textValue = $("#text-" + idNum.toString()).val();
   // console.log(textValue);
   localStorage.setItem("text-" + idNum.toString(), textValue);
   console.log(textValue);
};

// var loadTasks = function() {
//    tasks = JSON.parse(localStorage.getItem("tasks"));