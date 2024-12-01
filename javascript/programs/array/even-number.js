// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function evenNumber(...arr){
    for(let i = 0; i<arr.length; i++){
     if(arr[i] % 2 === 0){
         console.log('Even Number ',arr[i])
     }
    } 
 }
 
 evenNumber(2,4,5,7,-1,0,-2,-4)