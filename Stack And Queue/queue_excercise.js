function Queue(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._head = 0;
    this._tail = 0;
  }
  
  Queue.prototype.enqueue = function(value) {
    if(this._tail - this._head <capacity) {
        this._storage[this._tail] == value;
        this._tail++;
    }
  };
  // Time complexity:
  
  Queue.prototype.dequeue = function() {
    // implement me...
  };
  // Time complexity:
  
  Queue.prototype.peek = function() {
    // implement me...
  };
  
  Queue.prototype.count = function() {
    // implement me...
  };