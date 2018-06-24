var Stack = function() {
    this.storage = "";
}

Stack.prototype.push = function (val) {
    this.storage = this.storage + "---" + val;
};

Stack.prototype.pop = function () {
    
    var lastIndex = this.storage.lastIndexOf("---");
    var popItem = this.storage.slice(lastIndex+3);
    this.storage = this.storage.substring(0,lastIndex);

    return popItem;
};

Stack.prototype.size = function () {
    return (this.storage.split("---").length - 1);
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("IceCream");
myWeeklyMenu.push("Rice");

console.log(myWeeklyMenu.storage);
console.log(myWeeklyMenu.size());

var POP = myWeeklyMenu.pop();

console.log(myWeeklyMenu.storage);

console.log(`Pop Item - ${POP}`);
console.log(myWeeklyMenu.size());