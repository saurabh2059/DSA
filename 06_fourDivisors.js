/**
 * 
Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. If there is no such integer in the array, return 0.

 

Example 1:

Input: nums = [21,4,7]
Output: 32
Explanation: 
21 has 4 divisors: 1, 3, 7, 21
4 has 3 divisors: 1, 2, 4
7 has 2 divisors: 1, 7
The answer is the sum of divisors of 21 only.
Example 2:

Input: nums = [21,21]
Output: 64

 */

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

//  function divisors(num){
//     let arr=[];
//     for(let i = 1; i<=num; i++){
//         if(num%i==0) arr.push(i);
//     }


//     return arr;
//  }

//  function sum(arr){
//     let sum=0;
//     for(i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum;
//  }

// var sumFourDivisors = function(nums) {
    
//   let arr;
//   let div_4=[];

//     for(let item of nums){
      
//        arr= divisors(item);

//        if(arr.length==4) div_4.push(arr) ;

//     }
   

//     if(div_4.length!=0){
//         let total=0;
//         for(let item of div_4){
//             total=total+sum(item)
//         }

//         return total;
//     }

//     return 0;




// };



var sumFourDivisors = function(nums) {
    let totalSum = 0;

    for (let num of nums) {
        let divCount = 0;
        let divSum = 0;

        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                let j = num / i;

                if (i === j) {
                    divCount += 1;
                    divSum += i;
                } else {
                    divCount += 2;
                    divSum += i + j;
                }

                if (divCount > 4) break;
            }
        }

        if (divCount === 4) {
            totalSum += divSum;
        }
    }

    return totalSum;
};
