var makeQueue = function(){
  //var storage = [];
  // Implement the methods below
  var newQueue = {_storage: []};

  _.extend(newQueue, makeQueue.queueMethods);
  return newQueue;
};


makeQueue.queueMethods = {};
makeQueue.queueMethods.enqueue = function(value){
    this._storage.push(value);
};

makeQueue.queueMethods.dequeue = function(){
  return this._storage.shift();
};

makeQueue.queueMethods.size = function(){
  return this._storage.length;
};

