var tasks = {};

var rightNow = moment().format("MMM Do, YYYY - hh:mm:ss a")
$("#currentDay").append(rightNow);
// I tried to declare each textarea to an array when you press the save button but was not able to get anything to appear
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
        tasks = {
            nineAm: [],
            tenAm: [],
            elevenAm: [],
            twelvePm: [],
            onePm: [],
            twoPm: [],
            threePm: [],
            fourPm: [],
            fivePm: []
        };
    }
}
// would save textarea input in localStorage 
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// I tried to say if time is after the current time turn text area green and red if on time
// I could't figure out how to declare each box so they trigger the event
var auditTask = function(taskEl) {
    var date = $(taskEl).find("textarea").text().trim();
    var time = moment(date, "L").set("hour", 17);

    if (moment().isAfter(time)) {
        $(taskEl).addClass("list-group-item-success");
    } else if (Math.abs(moment().diff(time,"hours")) = 0){
        $(taskEl).addClass("list-group-item-danger");
    }
};


$("#task-form-modal .btn-save").click(function() {
    // get form values
    var taskText = $("#modalTaskDescription").val();
    // when textarea with matching id indicator would make its value equal to the variable
    if (taskText) {
      createTask(taskText, "one");
      tasks.onePm.push({
        text: onePm
      });
  
      saveTasks();
    } else if (taskText){
        createTask(taskText, "two");
        tasks.twoPm.push({
            text: twoPm
          });
        saveTasks();
    } else if (taskText){
        createTask(taskText, "three");
        tasks.threePm.push({
            text: threePm
          });
        saveTasks();
    } else if (taskText){
        createTask(taskText, "four");
        tasks.fourPm.push({
            text: fourPm
          });
        saveTasks();
    } else if (taskText){
        createTask(taskText, "five");
        tasks.fivePm.push({
            text: fivePm
          });
        saveTasks();
    } else if (taskText){
        createTask(taskText, "nine");
        tasks.nineAm.push({
            text: nineAm
          });
        saveTasks();
    } else if (taskText){
        createTask(taskText, "ten");
        tasks.tenAm.push({
            text: tenAm
          });
        saveTasks();
    } else if (taskText){
        createTask(taskText, "eleven");
        tasks.elevenAPm.push({
            text: elevenAm
          });
        saveTasks();
    } else if (taskText){
        createTask(taskText, "twelve");
        tasks.twelvePm.push({
            text: twelvePm
          });
        saveTasks();
    }

});
// when button is pressed runs saveTask function
$("#btn-save").on("click", function(){
    saveTasks();
});

loadTasks();