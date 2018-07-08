function Queue(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._head = 0;
    this._tail = 0;
  }
  
Queue.prototype.enqueue = function(value) {
  if(this._tail - this._head <this._capacity) {
      this._storage[this._tail] = value;
      this._tail++;
      return this.count();

  } else {
    return ("Limit Exceeded");
  }
};
// Time complexity:

Queue.prototype.dequeue = function() {
  if(this._tail - this._head !=0) {
    var element = this._storage[this._head];
    var del = this._storage[this._head];
    delete this._storage[this._head];
    this._head++;
    return element;
} else {
  this._head = 0;
  this._tail = 0;
  return ("Empty Queue");
}
};
// Time complexity:

Queue.prototype.peek = function() {
  return this._storage[this._head];
};

Queue.prototype.count = function() {
  return this._tail - this._head;
};

Queue.prototype.contains = function(value) {
  for(i=this._head;i<=this._tail;i++) {
    if(this._storage[i]===value) {
      return true;
    }
  }
  return false;
};

Queue.prototype.until = function (value) {
  for(i = this._head;i<=this._tail;i++) {
    if(this._storage[i]===value) {
      return i-this._head+1;
    }
  }
  return null;
};

// testing

var myQueue = new Queue(3);
console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.peek(), 'should be b');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.contains('b'), 'should be true');
console.log(myQueue.contains('d'), 'should be false');
console.log(myQueue._storage, myQueue._head);
console.log(myQueue.until('b'), 'should be 1');
console.log(myQueue.until('c'), 'should be 2');
console.log(myQueue.until('d'), 'should be null');