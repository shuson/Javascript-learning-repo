/**
  this Singleton is created by a returned object

*/


var Singleton = (function(){
    return {
        toString:function(){
            return "This is singleton created!";
        }
    }
})(); // with the brackets, the function returns an object to Singleton 

var s1 = Singleton;
var s2 = Singleton;

console.log(s1.toString());
console.log(s2.toString());

-----out put---------
This is singleton created!
This is singleton created!

