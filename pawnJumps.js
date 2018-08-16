const A = [2, 3, -1, 1, 3]; 

function solution(A) {
  //Edge cases. 
  if (A.length === 1 && A[0] === 0) return -1;
  if (A.length === 1 && (A[0] < 0 || A[0] > 0)) return 1; 
    
  var pawnLocation = 0; //Keep Track of it's location. 
  var index = 0; //A index and amount of jumps made.  
  var jumps = A[0]; //Where the pawn jumps to.
    
  while (index < A.length) { 
    if (pawnLocation > A.length) return index; 
    pawnLocation += jumps; 
    jumps = A[pawnLocation]; 
    index++; 
  }
    
  return -1; 
}

solution(A); 