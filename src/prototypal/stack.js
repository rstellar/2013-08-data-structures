//why attach the prototype to the actual Stack function (i.e. the constructor?)?
//

var Stack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var newStack = Object.create(Stack.blueprint);
  newStack._storage = {};
  newStack._size = 0;
  
  return newStack;
};

Stack.blueprint = {};

Stack.blueprint.push = function(value){
    this._size++;
    this._storage[this._size] = value;
};

Stack.blueprint.pop = function(){
    var temp = this._storage[this._size];
    delete this._storage[this._size];

    this._size--;
    if (this._size <0) this._size = 0;
    return temp;
};

Stack.blueprint.size = function(){
  return this._size;
};
