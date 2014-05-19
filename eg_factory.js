var Phone = function(){
}

Phone.prototype.call = function(){
    console.log("calling...");
}
Phone.prototype.SMS = function(){
    console.log("Sending...");
}

var Nokia = function(){
    console.log("Nokia is creating...");
}

Nokia.prototype = new Phone();

var XiaoMi = function(){
    console.log("XiaoMi is creating...");
}

XiaoMi.prototype = new Phone();

var PhoneFactory = function(){
}

PhoneFactory.prototype.createPhone = function(phoneBrand){
    var phone = null;
    switch(phoneBrand){
      case "Nokia":
          phone = new Nokia();
          break;
      case "XiaoMi":
          phone = new XiaoMi();
          break;
      default:
          break;
    }
    
    return null||phone?phone:"invalid brand!";
}

var phoneFactory = null||phoneFactory?phoneFactory:(new PhoneFactory())

var xiaomi = phoneFactory.createPhone("XiaoMi");
var nokia = phoneFactory.createPhone("Nokia");

if(typeof(xiaomi)!="string"){
    xiaomi.call();
    xiaomi.SMS();
}

-----out put ----

XiaoMi is creating...
Nokia is creating...
calling...
Sending...
