const A = [1, 8, -3, 0, 1, 3, -2, 4, 5]; 
const K = 6; 

function solution1(K, A) {
  var result = K; 
  for (let i = 0; i < A.length; i++) { 
    result = result ^ A[i] ^ i; 
  }
  return result; 
}

solution1(K, A); 