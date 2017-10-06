/*var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  var allInputs = ""
  rl.on('line', function(input) {
    console.log('your input was: ' + allInputs);
    allInputs += input
    console.log(allInputs)
  })

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var sum = 0

rl.on('line', function(input) {
    for(var i= 0; i < input; i++){
        if(isNaN(Number(i))){
            sum += i}
        else{
            sum += Number(i);
            console.log(sum);
 }}
}    

)

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var rooms = [
    {
        price: 200,
        location: '11 Broadway, NY',
        maxOccupants: 3,
        amenities: ['washer/dryer', 'wifi', 'cable']
    },
    {
        price: 100,
        location: '11 Delancey, NY',
        maxOccupants: 1,
        amenities: []
    },
    {
        price: 2000,
        location: '1 Park Pl, NY',
        maxOccupants: 2,
        amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
    }
];

// make the string exactly as long as len
function padTo(str, len) {
    if (str.length > len) {
        return str.slice(0, len - 3) + '...'
    } else {
        while (str.length < len) {
            str += ' '
        }
        return str;
    }
}

// make the string exactly as long as len
function padLeft(str, len) {
    var money = str
    if (money.length > len) {
        return money.slice(0, len - 3) + '...'
    } else {
        while (money.length < len) {
            money = ' ' + money
        }
        return money;
    }
}

function toMoney(num) {
    return '$' + num.toString()
}

function whatsAvailable(rooms) {
    console.log(
        "#",
        "...",
        padTo("address", 30),
        " ",
        padLeft("price", 8)
    );
    for (var i = 0; i < rooms.length; i++) {
        if (rooms[i].reserved) {
            continue;
        }
        var counter = i + 1;
        console.log(
            counter.toString(),
            padTo(rooms[i].location, 20), 
            ' ', 
            padLeft(toMoney(rooms[i].price), 8)
        );
    }
}

function bulletPoints(list) {
    return '\n - ' + list.join('\n - ')
}

function showDetails(room) {
    console.log('Location:', room.location)
    console.log('Price:', toMoney(room.price))
    console.log('Max. Occupancy:', room.maxOccupants)
    console.log('Amenities:', bulletPoints(room.amenities))
}

function reserve(which) {
    rooms[which].reserved = true
    console.log('Thank you for reserving')
}

rl.on('line', function(input) {
    // var inputArr = input.split(' ')
    if (input === 'list') {
        whatsAvailable(rooms);        
    }

    console.log('\n\nSelect one of [list, ...] $')
})



rl.on("line", function(input){
    var inputArr = input.split(' ')
    if (inputArr[0] === 'list' ){
        whatsAvailable(rooms)
    } else if (inputArr[0] === "show"){
        showDetails(rooms[inputArr[1] -1])
    }
})

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

var count = 0
var options = "\ninc, dec, res"
console.log(count)
console.log("Please input" + options)
  
rl.on("line", function(input){
    input.toLowerCase()
  
    if(input === "inc"){
        count++
        console.log(count, " count has been incremented by 1") 
    } else if (input === "dec"){
        count--;
        console.log(count, " count has been decremented by 1")
    } else if (input === "res"){
        count = 0
       console.log(count, "count has been reset")
    } else {
        console.log("Invalid input: please input ", options)
    }
})
****************************************

Question 2 node js question 2
var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

console.log("Please input + - * / \nfollowed by two numbers seperated by spaces \nex.+ 2 1")

rl.on("line", function(input){
    var inputArr = input.split(" ");
    var num1 = Number(inputArr[1]);
    var num2 = Number(inputArr[2]);
    
    if (inputArr[0]=== "+"){
        console.log(num1 + num2
    }else if (inputArr[0]=== "-"){
       console.log(num1 - num2)
    }else if (inputArr[0]=== "*"){
       console.log(num1 * num2)
    }else if (inputArr[0]=== "/"){
        console.log(num1 / num2)    
    }
}
)
*/


  var readline = require('readline')
  var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
    function accum(numbers, callback) {
        var result = numbers[0]
        for (var i = 1; i < numbers.length; i++) {
            result = callback(result, numbers[i])
        }
        return result
    }
    
    var operations = {
        '+': function (a, b) { return a + b },
        '-': function (a, b) { return a - b },
        '/': function (a, b) { return a / b },
        '*': function (a, b) { return a * b },
        '**': function (a, b) { return Math.pow(a, b) },
    }
    
    rl.on('line', function (input) {
        var inputArr = input.split(' ')
        console.log('Input array is: ' + inputArr)
        var opr = inputArr[0]
    
        if (!operations[opr]) {
            console.log('Valid expression must be: "operator num1 num2 num3..."' +
                '\nValid operators are "+ - * /"');
        } else {
            for (var i = 1; i < inputArr.length; i++) {
                if (isNaN(inputArr[i])) {
                    console.log('Valid expression must be: "operator num1 num2 num3..."' +
                        '\nValid operators are "+ - * /"');
                    return;
                } else {
                    inputArr[i] = Number(inputArr[i])
                }
    
            }
    
            var numbers = inputArr.slice(1)
            console.log(accum(numbers, operations[opr]))
        }
    })















