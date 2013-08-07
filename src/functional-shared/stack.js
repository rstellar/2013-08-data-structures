

var makeStack = function(){
  //should we keep storage and size in this outer scope?
  //or do they need to be a part of each new Stack?
  var newStack = {
    "_storage": {},
    "_size": 0
  };

  _.extend(newStack, makeStack.stackMethods);


  //move all this stuff
  /*
  stack.pop = 
  };

  stack.size = function(){
    return size;
  };
  */

  return newStack;
};



//create methods within makeStack
makeStack.stackMethods = {};

makeStack.stackMethods.whatever = function(){};

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

// create methods for pop, push size?
//something like makeStack.makeMethods.pop (push,size, etc)
// makeStack.makeMethods.pop = function(){
//
