/*var txt = 'Hello Monday';
for (var i= 0; i< txt.length; i++) {
    console.log(txt[i]);
}

var name = "Xsumi" + "Oliver▲♥‿♥"
for (var i = 0; i < name.length; i++){
console.log(name[i])}

var firstName = "Xsumi"
var lastName = "Oliver"
function fulllName (firstName, lastName) {
    return firstName + ' '+ lastName;
}
console.log(fulllName(firstName, lastName))

var firstName = "Xsumi"
var lastName = "Oliver"
var fulllName = firstName;
fulllName += " ";
fulllName += lastName


var str = " "
var num = 0
for (var i = 1; i < num; i++) {

        str += i + ", "
}
str += i
console .log (str)
my solution
function print(num) {
    for (var i = 1; i <= num; i++){
        console.log(i)
        for (var j = 2; j <= num; j++) {
            console.log(i += ", " + j);
        }
    }
}

console.log(print(5))

Peter's solution
var str = ''
var num = 10

for (var i = 1; i <= num; i++) {
    if (i > 1) {
        str += ', '
    }
    str += i;
    console.log(i + ' ' + str);
}
var list;
var num = 7

function joinList(n) {
    str = ''
    for (var j = 1; j <= n; j++) {
        if (j > 1) {
            str += ', '
        }
        str += j;
    }   
    return str; 
}

for (var i = 1; i <= num; i += 3) {
    list = joinList(i);
    console.log(i + ' ' + list);
}

var list;
var num = 7

function joinList(n) {
    str = ''
    for (var j = n; j >= 1; j--) {
        if (j < n) {
            str += ', '
        }
        str += j;
    }   
    return str; 
}

for (var i = 1; i <= num; i += 2) {
    list = joinList(i);
    console.log(i + ' ' + list + ", blast off");
}


var name = 'peter'
console.log(name[0].toUpperCase() + name.slice(1))

Create a function called DrEvil. 
It should take a single argument, an amount, and return ' dollars', 
except it will add '(pinky)' at the end if the amount is 1 million.

function DrEvil(num) {
    if (num === "1 million") {
        console.log (num + " dollars (pinky)")
    } else if (num === 1) {
        console.log (num + " dollar")
    } 
    
    else {console.log (num + " dollars")
}
}
DrEvil(55)

Create a function called verbing. 
It should take a single argument, a string. 
If its length is at least 3, it should add 'ing' to its end, 
unless it already ends in 'ing', 
in which case it should add 'ly' instead. 
If the string length is less than 3, it should leave it unchanged.

var name = 'peter'
console.log(name[0].toUpperCase() + name.slice(1))

//works
function DrEvil(num) {
    if (num === "1 million" ) {
    console.log (num + " dollars (pinky)")
    } else if (num === 1) {
    console.log (num + " dollar")
    }
    else {console.log (num + " dollars")
    }
}
    DrEvil(675755)
   
//works
  var aString = ""
    function verbing(aString) {
                 if (aString.length >= 3){
                    console.log (aString + "ing")
                    } else {
                    console.log (aString)
                    }
                }
                verbing('hello')



var word = "" 

 function getInitString(word) {
            console.log (word.pop) 
        }

 getInitString("hello")



var fullName = "bobby flay";
function nameCase(name) {
    var space = name.indexOf(" ");
    
}

console.log(nameCase(fullName))


Write a function `XO` to check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any characater.


function XO(string){
    var runCountX = 0
    var runCountO = 0
    for(var i = 0 ; i < string.length; i++) 
        if(string[i] === 'x') { 
            runCountX += 1
    } else if (string[i] === 'o') {
            runCountO += 1
    } 
            if (runCountX === runCountO) {
                return true
            } else  {return false} 
    
        
    }


console.log(XO("dfsxxoo"))




function countVowels (string){
    runCountVowels = 0
    for (var i = 0; i < string.length; i ++){
        if (string[i] === "a" ) {
            runCountVowels += 1;
            
        }else if (string[i] === "e") {
            runCountVowels += 1

        }else if (string[i] === "i") {
            runCountVowels += 1

        }else if (string[i] === "o"){
            runCountVowels += 1

        }else if (string[i] === "u")
        runCountVowels += 1
    }
    return runCountVowels
}

console.log(countVowels("jason"))

function myIncludes(string1,string2){
   if (string1.includes(string2)) {
       return true}
     else {return false}  
}

console.log(myIncludes("xsumi", 1))
*/
var string = ""
function isPalindrome(string){
    var backwards = string.split('').reverse().join('')
        if (backwards ===  string) {
            return true
        } else {
            return false
        }
 }


console.log(isPalindrome("huh"))