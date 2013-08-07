var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here
  var first = 1;
  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    size++;
    storage[size] = value;
  };

  queue.dequeue = function(){
    size--;
    if (size < 0) size = 0;
    var temp = storage[first];

    delete storage[first];
    first++;
    return temp;
  };

  queue.size = function(){
    return size;
  };

  queue.viewself = function(){
    return {storage : storage,
      first : first};


  };

  return queue;
};
