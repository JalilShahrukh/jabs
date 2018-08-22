var twoSum = function(nums, target) {
  const cache = {}; 
  for (let i = 0; i < nums.length; i++) { 
    if (cache.hasOwnProperty(nums[i])) return [cache[nums[i]], i]; 
    cache[target - nums[i]] = i; 
  }
  return []; 
};

var nums = [2, 7, 11, 15], target = 9; 
twoSum(nums, target); 