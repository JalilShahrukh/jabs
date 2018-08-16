function partition(array, start, end) { 
  var pivot = array[end]; 
  var pIndex = start;
  
  for (let i = start; i < end; i++) { 
    if (array[i] <= pivot) { 
      var temp = array[i];
      array[i] = array[pIndex]; 
      array[pIndex] = temp;   
      pIndex++; 
    }
  }
  
  var temp = array[pIndex];
  array[pIndex] = array[end]; 
  array[end] = temp;   
  
  return pIndex; 
}
  
function quickSort(array, start, end) { 
  if (start < end) { 
    var pIndex = partition(array, start, end); 
    quickSort(array, start, pIndex-1); 
    quickSort(array, pIndex+1, end); 
  }

  return array; 
}