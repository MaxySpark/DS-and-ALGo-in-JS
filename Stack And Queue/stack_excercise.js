let Stack = function(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
};

Stack.prototype.push = function(data) {
    if(this._count<this._capacity) {
        this._storage[this._count] = data;
        this._count++;
        return this._count;
    }
    return "Max Limit Exceeded";   
};

Stack.prototype.pop = function() {
    if(this._count>0) {
        
        this._count--;
        var pop_item = this._storage[this._count];
        delete this._storage[this._count];
        
        return pop_item;
    }
    return "Empty Stack";   
};

Stack.prototype.peek = function() {
    return this._storage[this._count-1];
};

Stack.prototype.count = function() {
    return this._count;
};

// Testing

var myStack = new Stack(3);
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'should be Max capacity reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.count(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.count(), 'should be 2');