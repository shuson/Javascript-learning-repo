function Singleton(){
    if (arguments.callee.instance)
        return arguments.callee.instance;
    arguments.callee.instance = this;
}


Singleton.getInstance = function() {
    var singleton = new Singleton();
    return singleton;
};
