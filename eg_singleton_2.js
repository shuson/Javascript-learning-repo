"use strict";
var Singleton = function(){
  if(Singleton.__instance) {
    return Singleton.__instance;
  }
  
  Singleton.__instance = this;
};

//the __instance will be create when new Singleton excuted
