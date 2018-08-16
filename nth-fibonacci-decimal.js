function fibonacci(N) { 
  const cache = {}; 
    
  function memoize(num) { 
    if (num <= 1) return num; 
        
    if (cache[num]) return cache[num]
    else { 
      cache[num] = memoize(num-1) + memoize(num-2); 
      return cache[num];
    }
  }
    
  var result = memoize(N); 
  return result; 
}

function solution(N) {
  var fibNum = fibonacci(N); 
  var length = String(fibNum).length;
  if (length > 6) {
    return Number(String(fibNum).slice(length-6)); 
  } else { 
    var str = String(fibNum); 
    while (str.length !== 6) { 
      str = '0' + str; 
    }
    return Number(str); 
  }  
}