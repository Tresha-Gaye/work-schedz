var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(currentDate);

document.querySelector("#currentDay").innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");