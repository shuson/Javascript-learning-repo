var Singleton = {
    __name:'I am singleton created only once!', //by my habit properties start with __ are namely private
    toString: function(){
        return this.__name; //this is important, since the __name can only be accessed by its own memory owner
    }
}


var s1 = Singleton;
var s2 = Singleton;

console.log(s1.toString());
console.log(s2.toString());

---Out put---

I am singleton created only once!
I am singleton created only once!
