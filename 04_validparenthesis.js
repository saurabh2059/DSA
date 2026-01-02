/**
 * @param {string} s
 * @return {boolean}
 */
/** 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/
// var isValid = function(s) {
//     let stack = []
//     let counter=0;
    
//    if(s.length==1) return false
   
//     for(let ch of s){
      
//         if(ch=="(" || ch =="{" || ch == "[") {
//           counter++;
//           stack.unshift(ch)
//           continue;
          
//         }
        
//         if(ch==")" || ch =="}" || ch == "]") {
//           counter--;
         
    
//         }
        
        
        
            
//         if(ch == ")" && stack[0]=="(")
//         { 
      
//           stack.shift()
//         continue;
          
//         }
//         if(ch == "}" && stack[0]=="{") {
       
//           stack.shift()
//         continue;}
      
        
//         if(ch == "]" && stack[0]=="["){ 
      
//           stack.shift() 
//         continue;}
        
        
       
        
        
        
//     }
  
//     if(counter!=0) return false;
    
  
//     if(stack.length == 0 ) return true;
//     else return false;
 
    
// }

var isValid = function(s) {
    let stack = []
    
    
    let map= {
      ')':'(',
      '}':'{',
      ']':'['
    }
    
    for(let ch of s){
      if(ch=='('|| ch=='{' || ch == '['){
          stack.push(ch)
      }else{
        if(stack.pop()!=map[ch]) return false
      }
    }
    
    return stack.length == 0;
    
}