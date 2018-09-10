var findMaxConsecutiveOnes = function(nums) {
  const ones = nums.join('').split('0'); 
  let max = 0; 
  for (let i = 0; i < ones.length; i++) { 
    max = Math.max(max, ones[i].length); 
  }
  return max;
};