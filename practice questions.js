/*
Question 3 mid assesment practice
Write a function isAllNum with parameter arr. 
If every element of arr is of type number, return true. 
Otherwise, return false.
Invoke your function with the argument [1, 2, 3, 4, 5].
Invoke your function with the argument [1, 2, 'mountain dew'].
*/
function isAllNum(arr){
    var newArr =[]
    for (var i =1; i < arr.length; i++){
        if (typeof i === "number") {
            console.log(true)
        } else {console.log(false)}
    }
}
console.log(isAllNum([1, 2, 3, 4, 5]))