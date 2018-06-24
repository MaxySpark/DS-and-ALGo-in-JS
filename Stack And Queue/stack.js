var Stack = function() {
    this.storage = "";
}

Stack.prototype.push = function (val) {
    this.storage = this.storage + "---" + val;
};

Stack.prototype.pop = function () {
    var lastIndex = this.storage.lastIndexOf("---");
    console.log(this.storage.substring(0,lastIndex));
    console.log(this.storage.slice(lastIndex+3));
};

Stack.prototype.size = function () {
    
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("IceCream");
myWeeklyMenu.push("Rice");

console.log(myWeeklyMenu.storage);

myWeeklyMenu.pop();