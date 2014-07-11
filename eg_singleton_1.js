'use strict'; // avoid access global object
function Singleton(){
    if (arguments.callee.instance)
        return arguments.callee.instance;
    arguments.callee.instance = this;
}


Singleton.getInstance = function() {
    var singleton = new Singleton();
    return singleton;
};

var obj1 = Singleton.getInstance();
var obj2 = Singleton.getInstance();

console.log(obj1 === obj2) // true
