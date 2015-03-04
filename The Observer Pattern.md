The Observer is a design pattern where an object (known as a subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state.
When a subject needs to notify observers about something interesting happening, it broadcasts a notification to the observers (which can include specific data related to the topic of the notification).

The sample code:

```
function ObserverList(){
  this.observerList = [];
}
 
ObserverList.prototype.add = function( obj ){
  return this.observerList.push( obj );
};
 
ObserverList.prototype.count = function(){
  return this.observerList.length;
};
 
ObserverList.prototype.get = function( index ){
  if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
  }
};
 
ObserverList.prototype.indexOf = function( obj, startIndex ){
  var i = startIndex;
 
  while( i < this.observerList.length ){
    if( this.observerList[i] === obj ){
      return i;
    }
    i++;
  }
 
  return -1;
};
 
ObserverList.prototype.removeAt = function( index ){
  this.observerList.splice( index, 1 );
};

function Subject(){
  this.observers = new ObserverList();
}
 
Subject.prototype.addObserver = function( observer ){
  this.observers.add( observer );
};
 
Subject.prototype.removeObserver = function( observer ){
  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};
 
Subject.prototype.notify = function( context ){
  var observerCount = this.observers.count();
  for(var i=0; i < observerCount; i++){
    this.observers.get(i).update( context );
  }
};

function Observer(){
  this.update = function(){
    console.log('update')
  };
}
```

After the defination of Subject(target), Observer, before we register a subject with observers, we need a tool function:

```
// Mix properties into target object.
function extend( to, from ){
  for ( var key in from ){
    to[key] = from[key];
  }
  return to;
}
```

Then we begin the registration of an element in html: 

```html
<input id='target' type='text' />
<span id='observer'></span>
```
Scripts:

```
var subject = extend( document.querySelector('#target') , new Subject());

var observer = extend(document.querySelector('#observer'), new Observer());

observer.update = function(ctx){
  this.innerText = ctx;
}

subject.addObserver(observer);

subject.onkeyup = function(){
  this.notify(this.value);
}
```
