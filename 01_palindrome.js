/**
 * @param {number} x
 * @return {boolean}
 */
// problem :  Given an integer x, return true if x is a palindrome, and false otherwise.
var isPalindrome = function(x) {
    let y = String(x);

    let rev='';

    for(let i = y.length-1; i>=0; i-- ){
     rev+=y[i]
      
    }


    if(y===rev)
        return true
        
    else
    return false
};

