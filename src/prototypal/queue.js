var Queue = function() {
  var newQueue = Object.create(Queue.blueprint);
  newQueue._storage = [];
  return newQueue;
};


Queue.blueprint = {};

Queue.blueprint.enqueue = function(value){
    this._storage.push(value);
};

Queue.blueprint.dequeue = function(){
  return this._storage.shift();
};

Queue.blueprint.size = function(){
  return this._storage.length;
};
