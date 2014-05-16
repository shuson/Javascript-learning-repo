var Singleton = function(){
    if(Singleton.instance==undefined){
        Singleton.instance = this;
    }
    return Singleton.instance;
};

Singleton.prototype.toString = function(){
    return "I am created by singleton!";
}
