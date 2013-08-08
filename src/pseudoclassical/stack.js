var Stack = function() {
  this._storage = {};
  this._size = 0;
};

Stack.prototype.push = function(value){
    this._size++;
    this._storage[this._size] = value;
};

Stack.prototype.pop = function(){
    var temp = this._storage[this._size];
    delete this._storage[this._size];

    this._size--;
    if (this._size <0) this._size = 0;
    return temp;
};

Stack.prototype.size = function(){
  return this._size;
};