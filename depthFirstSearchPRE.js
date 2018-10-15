/*      10 
      6   15 
    3  8    20
ROOT -> ALL OF LEFT -> ALL OF RIGHT
QUEUE: [10, 6, 3, 8, 15, 20]
*/
function DFSPreOrder() { 
  var data = []; 
  function traverse(node) { 
    data.push(node.value);
    if (node.left) traverse(node.left); 
    if (node.right) traverse(node.right); 
  }
  traverse(this.root);
  return data;  
}