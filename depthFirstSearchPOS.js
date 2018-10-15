/*      10 
      6   15 
    3  8    20
ALL OF LEFT -> ALL OF RIGHT -> ROOT 
DATA: [3, 8, 6, 15, 20, 10]
*/
function DFSPostOrder() { 
  var data = []; 
  function traverse(node) { 
    if (node.left) traverse(node.left); 
    if (node.right) traverse(node.right); 
    data.push(node.value);
  }
  traverse(this.root);
  return data;  
}