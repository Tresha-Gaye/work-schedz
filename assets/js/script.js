var tasks = "";
var taskBox = $(".task-box");
var saveClickerEl = $(".lock-box");

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


// Add click function to save user input in text area to localStorage
   saveClickerEl.click(function(event) {
      event.preventDefault();
      console.log($(this).siblings("textarea").val()); // 'this' points to the button element, siblings are in the same div- need to get the input in textarea
      console.log($(this).attr("id")); // finds the id attribute in the button element
      localStorage.setItem($(this).attr("id"), $(this).siblings("textarea").val());
   });


// function to get user inputs saved in localStorage so they persist after a refresh
for (var i = 9; i < 18; i++) { 
   console.log(localStorage.getItem(i)); // i = id of the button element (#9, #10, #11 etc)
   console.log($("#due-" + i)); // due-x is the id of the textarea
   $("#due-" + i).val(localStorage.getItem(i));
};
      
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
