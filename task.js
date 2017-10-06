
function createTask(title, completed){
    var task = {
      title: title,
      completed: completed
    }
    return task
  }
  
  var tasksArr = []
  
  var buyMilk = createTask('buy milk', false)
  tasksArr.push(buyMilk)
  
  var cleanHouse = createTask('clean the house', false)
  tasksArr.push(cleanHouse)
  
  console.log(tasksArr)
  function logTasks(taskArr){
    for (var i = 0; i < tasksArr.length; i ++){
      console.log(i + '. ' + tasksArr[i].title + '. Completed: ' + tasksArr[i].completed)
    }
  }

  function forEachElem(arr, callback){
    for (var i = 0; i < arr.length; i++){
      callback(arr[i], i)
    }
  }

  forEachElem(tasksArr, function(task, i){
    console.log(i + '. ' + task.title + '. Completed: ' + task.completed)
  })

  function completeTask(index) {
    tasksArr[index].completed = true
  }

  function toggleCompleted(index) {
    tasksArr[index].completed = !tasksArr[index].completed
  }

  var input = 'add get milk'
  var inputArr = input.split(' ')
  var description = inputArr.slice(1).join(' ')
  var newTask = createTask(description, false)
  var input = 'toggle 0'
  var inputArr = input.split(' ')


  var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


  rl.on('line', function(input) {
  if (inputArr[0] === 'toggle') {
    var index = Number(inputArr[1])
    if (tasks[index] === undefined){
      console.log('an element at that index does not exist')
    } else {
      toggleCompleted(index)
    }
  }})
