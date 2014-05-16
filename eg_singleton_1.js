var Singleton = {
    __name:'I am singleton created!' //by my habit properties start with __ are namely private
    toString: function(){
        return this.__name; //this is important, since the __name can only be accessed by its own memory owner
    }
}
