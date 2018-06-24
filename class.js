var Person = function(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    console.log(this.name);    
}

var bhargab = new Person("BHARGAB");

bhargab.getName();
console.log(bhargab.name);  
