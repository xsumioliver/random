/*
function double(num){
    return num * 2
}
function square(num){
    return num * num
}
function doubleSquare(num){
    return square(double(num))
}
console.log(doubleSquare(4))

function classyGreeting(firstName,lastName){
    return "hello " + firstName + " " + lastName
}
function yell(str){
    return str.toUpperCase()
}
function yellGreeting(firstName,lastName){
    return yell(classyGreeting(firstName,lastName))
}
console.log(yellGreeting("xsumi", "oliver"))

function one (num){
    sum = 0
    for(var i = 1; i <= num; i++){
        console.log(sum += i)
    }
}
function two (num){
  return  num * 2
}
function oneTwo(num){
    return two(one(num))
}
console.log(oneTwo(6))
**********************************
function add1(num) {
    return num + 1
}
function add2(num) {
    return add1(add1(num))
}
function add4(num) {
   return add2(add2(1))
}

console.log(add4(1))
*******************************

function removeDupes(arr){
    var dupes = [];
    for(var i = 0; i < arr.length; i++ ){
    if (arr.includes(i))
        dupes.push(i)
    }
    return dupes
}
//console.log(removeDupes([1,1,1,2,2,3,3,4,4,5,5,]))

function concatAndRemoveDupes(arr1,arr2){
   var concat = arr1.concat(arr2);
  return removeDupes(concat)
}
console.log(concatAndRemoveDupes([1,1,1,2,2,3,3,4,4,5,5,], [2,2,2,2,5,5,5,7,3,5]))
***************************

function sort(arr){
    return arr.sort(function(a,b){return a-b})
    }
    
    function middleElement(arr){
    var middleOfArray = arr[Math.round((arr.length - 1)/2)]
    var nextToMiddleOfArray = arr[Math.round((arr.length)/2)]
        if (arr.length % 2 !== 0){
            return middleOfArray
            } else {
                return (middleOfArray + nextToMiddleOfArray)/ 2 
                    }
    
            }
    function median(arr){
    return middleElement(sort(arr))
        }
    var grades = [91, 85, 100, 92, 88, 89]
    
    console.log(median(grades))
    
question 1
function forEachElem(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
          callback(arr[i]);
    }
}

function logEachElem(arr, callback){
   console.log(arr)
}
var arr1 = [1,2,3,4]
forEachElem(arr1, logEachElem)
*********************************
question 2
function logArrTypes(arr){
console.log(arr + " is a number " + typeof(arr))
}
var arr1 = [1,"2",true,]
*************************************
Question 3
do not run!!!!!!!!!!!!!
var seconds = 0
var logSeconds = function(){
    console.log(seconds);
    seconds += 1
}
setInterval(logSeconds, 1000)




//Question 4
function conservativeSpender(balance)  {
    return balance >= 100
  }
  
  function liberalSpender(balance) {
    return balance >= 10
  }
  
  function horribleSaver (balance) {
    return balance > 0
  }
  function shouldIBuyThis(balance, callback){
      if(callback(balance)){
        return "Sure! I've got the money!"
      } else {
          return "Nope! Gotta keep my savings up!"
      }
  }
 

  function smarterShouldIBuyThis(balance, price, callback){
    if(callback(balance - price)){
        return "Sure! I've got the money!"
      } else {
          return "Nope! Gotta keep my savings up!"
      }
  }

  console.log(smarterShouldIBuyThis(-20, 1, horribleSaver))
  console.log(smarterShouldIBuyThis(20, 11, liberalSpender))
  console.log(smarterShouldIBuyThis(120, 21, conservativeSpender))

*/
var newArr = [] 
function map(arr, func){
    for(var i= 0; i < arr.length; i++ ){
       var newElement = func(arr[i])
        newArr.push(newElement)
    }
}

function add4(num){
    return num + 4
}
console.log(map([1,2,3], add4))




