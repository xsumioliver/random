/*var arr = [2,3,5,7,11];
console.log(arr)
var arr2 = ["a", "b", "c"];
console.log(arr.join(arr2))

var arr= [1, 2, 3, 3, 2, 1];
console.log(arr.length)



function longestArr(array1, array2) {
    if (array1.length > array2.length) {
        return array1
    }else if (array2.length > array1.length) {
        return array2
    } else {return null} 
}

console.log(longestArr([1,2,3,4], [1,2,3,4]))


function middleElement (array1){
    if (array1.length % 2 === 0) {
        return "oops there's no middle"
        } else  {return array1[array1.length/2 | 0]} 
} 

console.log(middleElement(["a","b",2,3,4]))


function sumArray(numArray){
    var sum = 0
   for (var i = 0; i < numArray.length; i++) {
     sum += numArray[i]
       
   }
   return sum
}
console.log(sumArray([10,3,3,5]))


//sumArray = [10,3,3,5]
//console.log (sumArray.sort(function(a,b){return a-b}))
function range (min, max) {
    var createArray = []
  for (var i = min; i <= max; i ++) {
      createArray.push (i)
  } return createArray 
} 

console.log(range(2,6))


function rangeWithStep (min, max, step) {
    var createArray = []
  for (var i = min; i <= max; i += step) {
      createArray.push (step ++);
if (step === 0) {
        createArray.push (i)
}       return createArray 
  } 
}

console.log(rangeWithStep(2,6,0))
function doubleTrouble (min, max) {
    var createArray = []
  for (var i = min; i <= max; i ++) {
      createArray.push (i * i)
  } return createArray 
} 

console.log(doubleTrouble(2,6))


function doubleTrouble(arr) { 
    var output = [] 
    for (var i = 0; i < arr.length; i++) {
       output.push(arr[i] * 2) 
    } 
    return output
  }
  console.log(doubleTrouble([1,2,3]))
  
  
  function rangeWithStep(min, max, step) {
    createArray = []
    if (step === 0) { 
        step += 1;
        for (var i = min; i <= max; i += step) {
            createArray.push(i)

    } 
    return createArray
            }   else 
            { for (var i = min; i <= max; i += step) {
     createArray.push(i)
    }
    return createArray
}
  } 
console.log(rangeWithStep(4,10, 2))





var arr = [1, 2, 3]


function addTwoElements (arr, num1, num2){
    arr.push(num1,num2)
}
addTwoElements(arr, 4,5)
console.log(arr)

*/



