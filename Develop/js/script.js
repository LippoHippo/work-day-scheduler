var tasks = {};

var rightNow = moment().format("MMM Do, YYYY - hh:mm:ss a")
$("#currentDay").append(rightNow);

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}