###### For reasones of interpreter design, there are some tips

1. many things in javascript can use toString
>"string".toString() //"string"
false.toString() //"false"
1.2.toString() // "1.2"
2.toString() // error because interpreter will translate the first . from left to right as decimal point.

2. interpreter will transalte {} as block, but with () in it, it will become expression not statement
>var jsonStr = '{name:"Iversong",age:24}';
console.info(eval("("+jsonStr+")"));
