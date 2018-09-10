var peakIndexInMountainArray = function(A) {
  let i = 0; 
  let max = -Infinity; 
  while (i < A.length) { 
    if (max < A[i]) { 
      max = A[i]; 
      if (A[i] > A[i+1]) return i;
    }//end if
    i++; 
  }  
};