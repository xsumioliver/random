/*
console.log(Math.PI)
var one = console.log ([1,"a", 3, true].length)
//var two = console.log ([1,"a", 3, true].prototype())
var word = console.log (constructor("gkgk"))
var two = console.log (constructor([1,"a", 3, true]))
//var a = console.log (concat(,[5,6,7,8]))'
var a = [5,6,7,8]
var b = a.concat([1,2,3,4])
console.log(b)
console.log(b.toString())
console.log(b.reducisArray(1))


*******************************
var birthYear = 1986

var futureYear = 2031

var futureAge = futureYear - birthYear

var calcYear = "I will either be " + 
    (futureAge - 1) + " or " +
    futureAge + " in " + futureYear
console.log(calcYear)
*******************************
var currentAge = 31

var maxAge = 100

var snacksPerDay = 2

var howManySnacks = (maxAge - currentAge) 
                    * 365 * snacksPerDay
console.log("I will need " + howManySnacks + 
            " to last you until the age of " +  maxAge)
**************************************
 
var radius = 31
var calcCirc = "The circumference is " + (Math.PI * 2) * radius
var calcArea =  "The area is " + Math.PI * (radius * radius)
            
console.log(calcCirc) 
console.log(calcArea)
****************************************

var tempC = 32

convertToF = tempC + " in Celsius is " + (tempC * 9/5) + 32 + " Fahrenheit"
var tempF = 32

convertToC = tempF + " in Fahrenheit is " +(tempF - 32) * 5/9 + " Celsius"
console.log(convertToF)

console.log(convertToC)
****************************************
Write a program that logs which of two number variables is larger.
Your output should look like this 
(in this example for the numbers 5 and 10): 
'The greater number of 5 and 10 is 10'
If the two numbers are equal, log: 'The numbers are equal.'

var num1 = 1
var num2 = 2
if (num1 > num2) {
    return "The greater number of " + num1 + 
    " and " + num2 + " is " + num1
    } else if (num2 > num1) {
    return "The greater number of " + num1 + 
    " and " + num2 + " is " + num2
    } else if (num1 === num2) {
       return "the numbers are equal."
    }
***************************************


function down(num){
    for(i = 0; i <= num; i += 1){
        console.log(i , '* 9 =', (i * 9));
}
    }
down(4)
************************************

function logMultiplesOfNine(num) {
    for (var i = 9; i <= num; i+9) {
      console.log(i * num)
    }
  }
  logMultiplesOfNine(5)
  *******************************
  
  
  function XO(str){
      var sum = 0;
      for(i = 0; i < str.length; i++){
          if (str[i].toLowerCase() == "x")sum++;
          if (str[i].toLowerCase() == "o")sum--
      }
      return sum == 0;
  }
  console.log (XO("xxxxooooxoxo"))
  **************************
  
 
function hashtag(num){
    for(var i =1; i <= num; i++){
        console.log(i * "#")
    }
}
hashtag(5)
********************

var arr = ['dog', 'cat', 'mouse', 'giraffe']
// removing 'cat' and 'mouse' and inserting 'fish'
console.log(arr.splice(1, 3, 'fish'))
console.log(arr)
********************
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

var arr = ["qwerty","uiop" , "ertyu"]
var barr = arr.map(function(arr){return arr.charAt(0);})
console.log(barr.join(""))

function middleElement(arr){
    var middleOfArray = arr[Math.ceil((arr.length - 1)/2)]
    var nextToMiddleOfArray = (arr.length)/2
    if (arr.length % 2 !== 0){
    return arr[middleOfArray]
} else {return (middleOfArray + nextToMiddleOfArray)/ 2 }

    }
    var arr1 = [87,88,91,92,99,100]
    console.log(middleElement(arr1))
*/
var input =  "+ 8 2"

var inputArr = input.split(" ")

console.log(inputArr)