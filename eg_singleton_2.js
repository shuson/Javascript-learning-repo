var Singleton = function(){  //this is a constructor for Singleton Object
    if(Singleton.instance==undefined){
        Singleton.instance = this;
    }
    return Singleton.instance;
};

Singleton.prototype.toString = function(){
    return "I am created by singleton!";
}

var s1 = new Singleton(); //using Singleton's constructor to create Singleton Object
var s2 = new Singleton();

console.log(s1==s2)
console.log(s2.toString())

-----out put--------
true
I am created by singleton!
