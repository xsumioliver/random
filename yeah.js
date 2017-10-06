/*
Write a function forceAllNum with parameter arr.  
Convert every element of arr that is of type number to the value 0 and return arr.

Invoke your function with the argument [1, 2, 3, 4, 5].

Invoke your function with the argument [1, 2, 'mountain dew'].

Your Answer:
*/

function forceAllNum(arr){
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number"){
            arr[i]= 0
        }
    }
    return arr   
}
console.log(forceAllNum([1,2,3,4,5]))