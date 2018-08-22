//Input: 28
//Output: True
//Explanation: 28 = 1 + 2 + 4 + 7 + 14

function checkPerfectNumber(num) {
  if (num === 0) return false; 
  let sum = 0; 
  for (let i = 1; i < num; i++) { 
    if (num % i === 0) sum += i; 
  } 
  return sum === num; 
};

checkPerfectNumber(28); 