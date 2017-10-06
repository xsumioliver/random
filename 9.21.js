/*var num = 1
if (num > 2) {
    console.log ("it's larger than 2")
} else {
    console.log ("it's not larger than 2" )
}

var cat_count = "bjb"
console.assert(typeof(cat_count) === "number" , "define cat_count")
 
if (cat_count === 1) {
     console.log("there is a single cat")
 } else if (cat_count < 1 ) { console.log("there are no cats")


 } else if (cat_count === 2) { console.log ("there are a couple of cats")

} else { console.log("there are many cats")

 }

 //depending on age, it will say alcohol sales is permitted, or not
// no sales on Sunday

var age = 30
var day_of_the_week = "Sunday"

if (age >= 21) {
    console.log('sales permitted' )
if (day_of_the_week === "Sunday") {
    console.log("no sales on Sunday")
}
} else {
    console.log ('sales not permitted') 
}

//count of dogs  and in case there is none print where is luna

var count_of_dogs = 0;

if (count_of_dogs >= 1) {
    console.log("There are dogs")
} else {
    console.log("Where is Luna")
} 

// given a day of the month as a number, 
//print out the day of the week as a string
//september 2017 9/1 = friday
//Write a program that checks and logs whether two numbers are equal or not.

var first_number = 100
var second_number = 100

if (first_number === second_number) { console.log("these are equal")

}else if (first_number !== second_number) { console.log(" these are not the same") 

} else {console.log ("try again")}

Write a program that logs which of two number variables is larger.

Your output should look like this (in this example for the numbers 5 and 10): 
'The greater number of 5 and 10 is 10'

If the two numbers are equal, log: 'The numbers are equal.'

var first_number = 5
var second_number = 5

if (first_number > second_number ) { console.log ("the greater number of " 
                                    + first_number + " and " + second_number +
                                    " is " + first_number)

}else if (second_number > first_number ) { console.log ("the greater number of " 
                                            + first_number + " and " + second_number +
                                            " is " + second_number) 

}else if (first_number === second_number ) { console.log ("The numbers are equal.")

} 

Create a variable numGrade that will contain a 
numeric grade (out of 100). 
Use a if - else if ... - else statement to log the corresponding 
letter grade,  either "A", "B", "C", "D", or "F". 


numGrade = 90.5

if (numGrade >= 90) { console.log ("A grade")

} else if (numGrade >= 80) { console.log ("B grade")

}else if (numGrade >= 70) { console.log ("C grade")

}else if (numGrade >= 65) { console.log ("D grade")

}else { console.log ("F grade")} 


*Create two variables: one to hold an animal name ('cat', 'dog', etc.) , and one to hold a number.

Use a if - else statement to log:

1. the number

2. either a single or plural form, like "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese". 


*Write a program that checks and logs whether a given number is even or odd.




*Write a program that checks and logs whether a 
given number is positive, negative, or equal to 0

var double = function (num) {
  return   num + num
}

console.log (double(10))

var myNumber = 2
var sideEffect = function(){
  myNumber += 1
}

sideEffect()
console.log(myNumber)


Ex 1. Write a function that 
takes a number as argument and 
returns the number to the power of 2


function powerOfthree (num) {
    return num * num * num
}
console.log (powerOfthree(2))
            or
function powerOfthree (num) {
    return Math.pow(num, 3)
}
console.log (powerOfthree(2))


function square(num){
    return num * num
  }
  
  // Returns the sum of the squares of two numbers
  function addSquares(num1, num2){
    return square(num1) + square(num2)
  }
  
  // Adding the squares of 2 and 3
  var sum = addSquares(2, 3)
  
  console.log(sum)
  

  // Calls egg
function chicken(){
    egg()
}

// Calls chicken
function egg(){
    chicken()
}

egg() <---infinite loop


function largestNum (num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1){
        return num2
    } else if (num1 === num2) { 
        return num2 
    } 
}


Create a function called calcCircumfrence that takes the radius 
as an argument and return the circumference. 
Call the function and log the circumference:
Create a function called calcArea that takes the radius as an argument and returns the area.
Create a third function circleProps that takes the radius as an argument, 
calls the two other functions, and logs the area and circumference. 
The output should look like this:

"The circumference is ___".

 "The area is ___".
 
function calcCircumfrence (radius) {
  return (2 * Math.PI) * radius
} 
console.log (calcCircumfrence(2))

Make a temperature converter. Use google to find the conversion formulas.

Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
Create a function called convertTemperature that takes two arguments: a temperature and a string. 
If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. 
If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.



function celciusToFahrenheit (temp) {
    return (temp * 1.8) + 32
}
function fahrenheitToCelcius (temp) {
    return (temp - 32) * .5556
}

function convertTemperature (temp, aString) {
    if (aString === "F") {
       return fahrenheitToCelcius (temp)
    } else if (aString === "C"){
       return celciusToFahrenheit (temp)
    }
}

console.log(convertTemperature(10, "F"))



The Calculator:

Write a function square that returns the square of a number.
Write a function half that returns half the value of a number.
Write a function percentOf that takes two numbers. 
Calculate what percent the first number is of the second number, and return the result as a string. 
For example, 2 is 50% precent of 4, so the function returns '50%'.
Write a function called areaOfCircle that takes one argument (the radius), 
and return the area of a circle with that radius.
Bonus: Round the result so there are only two digits after the decimal.
Write a function doStuff that takes one argument (a number) and does the following 
(using the functions you wrote earlier):
Calculates and saves the square of the number.
Calculates and saves half the value of the result of #1.
Calculate the area of a circle with the result of #2 as the radius.
Calculate and returns the percentage the squared result (#1) is of the area (#3)
*/

function square (num) {
   return num * num 
}
function half (num) {
    return .5 * num
}
function percentOf (num1, num2) {
   return ((num2 / num1) * 100) + "%"

}
function areaOfCircle (radius) {
    return (Math.PI * (radius * radius)).toFixed(2)
}
function doStuff(num) {
   

}
