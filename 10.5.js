var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

function createTask(title, completed) {
    var task = {
        title: title,
        completed: completed
    }
    return task
}
var tasks= []
var input = "add walk cat"
var newTask = createTask("title", false)
var inputArr = input.split(" ")
var description = inputArr.slice(1).join(' ')
taskArr.push(newTask)
logTasks(taskArr)


rl.on('line', function(input) {})

var buyMilk = createTask("buy milk", false)
tasks.push(buyMilk)
var walkDog = createTask("walk dog", true)
tasks.push(walkDog)
tasks.push(createTask("walk the cat", true))
tasks.push(createTask("do laundry", false))
function forEachElem(arr, callback){
    for (var i = 0; i < arr.length; i++){
        callback(arr[i], i)
    }
}



forEachElem(tasks,function(task, index){
    console.log((index + 1) + ". " + task.title)
})
