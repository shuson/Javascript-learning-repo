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

var obj1 = new Singleton();
var obj2 = new SIngleton();

console.log(obj1 === obj2) // true
