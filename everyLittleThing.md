* the code behide of try/catch still will be excuted.
* the forEach method is not asynchronized.
* in, for..in forEach the prototype of an object will walk all properties in the prototype chain.
* 尽管 JavaScript 支持一对花括号创建的代码段，但是并不支持块级作用域； 而仅仅支持 函数作用域.

>```function(){ //scope function
      for(var i=0;i<10;i++){ //this pair of {} does not create new scope
        //do nothing
      }
      console.log(i) //i=9
  }```
  
* 
