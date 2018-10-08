function sumZero(arr) { 
  let sum = 0; 
  let left = 0; 
  let right = arr.length-1; 
  while (left < right) { 
    sum = arr[left] + arr[right]; 
    if (sum === 0) { 
      return [arr[left], arr[right]]; 
    } else if (sum > 0) { 
      right--; 
    } else {
      left++; 
    }
  }//end while
}

//[-3, -1, 0, 2, 4]