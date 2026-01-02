/**
 * @param {number[]} digits
 * @return {number[]}
 */

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.


var plusOne = function(digits) {
    let string='';
    for(let i = 0;i<digits.length; i++){
        let char = String(digits[i]);
        string+=char
    }
    console.log(string)
    let num = BigInt(string);
    
    num+=1n;
    
    let arr = [];
   let str2 = String(num);
   
   
   for(let ch of str2){
     
     arr.push(Number(ch))
   }
    
   return arr;
    
};