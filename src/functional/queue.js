var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    size++;
  };

  queue.dequeue = function(){
    size--;
    if (size < 0) size = 0;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};
