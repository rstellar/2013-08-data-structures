var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = [];
  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    storage.push(value);
  };

  queue.dequeue = function(){
    return storage.shift();
  };

  queue.size = function(){
    return storage.length;
  };

  queue._storage = function(){
    return storage;
  };

  return queue;
};
