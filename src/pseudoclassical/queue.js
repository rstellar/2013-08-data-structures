var Queue = function() {
  this._storage = [];
};

Queue.prototype.enqueue = function(value){
    this._storage.push(value);
};

Queue.prototype.dequeue = function(){
  return this._storage.shift();
};

Queue.prototype.size = function(){
  return this._storage.length;
};
