//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// vikas 
function palindromeCheck(str){
    let input =  str.toString();
    let reverseString  =  input.split('').reverse().join('')
    console.log('reverse',reverseString)
   if(str == reverseString){
    console.log('Given Input is palindrome')
   }else{
    console.log('Given Input is not palindrome')
   }
}

palindromeCheck('kak') // given Input as string
//palindromeCheck(123) // if given Input is not as string