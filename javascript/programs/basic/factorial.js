// Write a JavaScript program to calculate the factorial of a given number. 
function factorial(num){
    if(num < 0){
        console.log('Number is not iteratable',num)
    }
    let fact = 1;  
    for(let i = 1; i<=num; i++){
      fact = fact * i; 
      console.log('fact',fact)
    }
   
}

factorial(2)