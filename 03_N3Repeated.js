/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 
 You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.
 */
// var repeatedNTimes = function(nums) {
  
   
//     for(let i =0 ; i<nums.length; i++){
//      let repeated = nums[i]
//         for(let j=i+1;j<nums.length; j++){
//             if(nums[j]== repeated){
//               return repeated;
//             }
//         }
//     }
// };

var repeatedNTimes = function(nums) {
  
   
    
    let unique = new Set();
    for(let num of nums){
        if(unique.has(num)) return num;
        unique.add(num);
    }
};