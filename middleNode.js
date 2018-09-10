var middleNode = function(head) {
  var hare = head;
  var tortise = head;
  while (hare !== null && hare.next !== null) {
    hare = hare.next.next;
    tortise = tortise.next;
  }
  return tortise;
};