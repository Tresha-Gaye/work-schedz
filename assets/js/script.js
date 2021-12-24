var tasks = {};

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
};

$(document).ready(function() {
   datetime = $('#currentDay')
   update();
   setInterval(update, 1000);
});

// var addTask = function() {

// }

var newTask = function () {
   var newTaskLi = $("<li>").addClass("task-list-item");

   var newTaskSpan = $("<span>")
   .addClass("badge badge-primary badge-pill")
   .text(taskDate);
   console.log(taskDate);

}


var saveTasks = function() {
   localStorage.setItem("tasks", JSON.stringify(tasks));
};

