#learn promise of ES6

***Status of promise***

1. fulfilled The action relating to the promise succeeded 
2. rejected The action relating to the promise failed 
3. pending Hasn't fulfilled or rejected yet 
4. settled Has fulfilled or rejected

***how to use it and how it works***

build a promise first

```
var promise = new Promise(function(onFilfulled, onRejected) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    onFilfulled("Stuff worked!");
  }
  else {
    onRejected(Error("It broke"));
  }
});
```

use it by its method ```then```,
```
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
```
the first parameter of function ```then``` is ```Promise``` status ```onFilfulled```, and the parameter of it self, is the value return from ```onFulfilled``` function, which is very important.


