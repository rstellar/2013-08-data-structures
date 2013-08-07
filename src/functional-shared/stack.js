var makeStack = function(){
  var newStack = {
    "_storage": {},
    "_size": 0
  };
  _.extend(newStack, makeStack.stackMethods);
  return newStack;
};

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value){
    this._size++;
    this._storage[this._size] = value;
};

makeStack.stackMethods.pop = function(){
    var temp = this._storage[this._size];
    delete this._storage[this._size];

    this._size--;
    if (this._size <0) this._size = 0;
    return temp;
};

makeStack.stackMethods.size = function(){
  return this._size;
};