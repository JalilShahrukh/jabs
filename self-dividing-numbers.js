var left = 1, right = 22; 
//Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

function selfDividingNumbers(left, right) {
  const output = []; 
  if (left < 10) { 
    while (left !== 10) { 
      output.push(left); 
      left++; 
    }
  }

  let count = 0;
  while(left <= right) {
    count = 0;  
    String(left).split('').forEach((num) => {  
      if (Number(num) !== 0 && left % Number(num) === 0) count++; 
    });  
    if (String(left).length === count) output.push(left); 
    left++; 
  }
  return output; 
};

selfDividingNumbers(left, right);