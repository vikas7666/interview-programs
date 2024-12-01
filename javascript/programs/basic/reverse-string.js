function reverseString(str) {
    if(typeof(str) == 'string'){
        let inputString = str.split('').reverse().join('');
        if(str == inputString){
            console.log('Given Number is palindrome',inputString);
        }else{
            console.log('Given Number is not palindrome'); 
        }
    }
}
reverseString('kak')
reverseString('vikas')
reverseString(123)