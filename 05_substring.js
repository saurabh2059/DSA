// Given a string s, find the length of the longest substring without duplicate characters.

// learned sliding window pattern

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
let set = new Set();
let left =0;
let macLen = 0;

for(let right=0; right<s.length; right++){
    while(set.has(s[right])){
        set.delete(s[left]);
        left++;
    }
    set.add(s[right]);
   
    macLen = Math.max(macLen, set.size)

    return macLen;
}
    
};


console.log(lengthOfLongestSubstring('pwwkew'));