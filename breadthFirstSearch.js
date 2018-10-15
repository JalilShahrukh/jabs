/*      10 
      6   15 
    3  8    20
ROOT -> LEFT OF ROOT -> RIGHT OF ROOT -> REPEAT
QUEUE: [10, 6, 15, 3, 8, 20]
*/
function BFS() { 
  var data = [], queue = [], node = this.root; 
  if (node) queue.push(node); 
  while (queue.length) { 
    node = queue.shift(); 
    data.push(node); 
    if (node.left) queue.push(node.left); 
    if (node.right) queue.push(node.right);
  }
  return data; 
}