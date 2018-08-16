//This function will generate all possible operation combinations. 
function generateOPs(combinations) { 
  if (combinations === 0) return []; //Edge case.  
  const results = []; //Holds generation operations. 
  
  function ops(combinations, operations) { 
    if (combinations === 0) return results.push(operations); //Recursive break.
      
    ops(combinations - 1, operations.concat('-')); //Builds array.
    ops(combinations - 1, operations.concat('+')); //Builds array. 
  }
  
  ops(combinations, []); //Initial recursive call. 
  return results; 
}
  
function arithmeticBoggle(magicNumber, numbers) {
  // Fill in the code here
  if (numbers.length === 0) return magicNumber == numbers; 
  if (numbers.length === 1) return magicNumber === numbers[0]; 
      
  const arr = numbers.slice(); //Make a copy to not mutate input array. 
  arr.sort((a, b) => a - b); //Assume array is not sorted. If not were not concerned with order, doesn't need to be sorted. 
       
  var operations = generateOPs(arr.length-1); //Call helper function to generate operations.
  //console.log(operations); To see what the operations look like.
  var compute = []; //Holds all equations to be computed. 
  var str = ''; //Builds strings for eval and pushed to compute. Reset on every pass of outer for loop.
  var arrIndex = 0; //Used for numbers array index to place numbers in between operations. 
  
  //Loop through each all operations generated and build strings for eval.
  for (let i = 0; i < operations.length; i++) { 
    for (let j = 0; j < operations[i].length; j++) {
      str += numbers[arrIndex];  
      str += operations[i][j];
      arrIndex++;  
    }
    str += numbers[arrIndex]; //Push last number. 
    compute.push(str); //Push equation. 
    str = ''; //Reset string. 
    arrIndex = 0; //Reset index. 
  }
  
  //If eval of an equation equals the magicNumber return true. Else false.
  for (let i = 0; i < compute.length; i++) { 
    if (eval(compute[i]) === magicNumber) return true; 
  }
      
  return false; 
}