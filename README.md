# no-param.js
collection of parentheses-less tricks in javascript 

## strings 
it is possible to generate arbitrary strings in javascript without the use of any parentheses, brackers or curly braces. it works by overwriting the `prepareStackTrace` function of an `Error` which allows for invoking arbitrary functions of the `String` prototype without parentheses. 

read the full writeup here: https://blog.ikaes.de/generating-strings-without-parentheses-in-javascript 

## execute javascript
similarly to string generation, we can invoke the `eval` function instead returning the value of `String.fromCharCode`. this returns in our desired string to be evaluated as javascript code


## payload generation 
the individual characters for the payload are obtained as follows


first we set shortcuts for repeating strings
```
AP=Array.prototype,SP=String.prototype,EP=Error.prototype,
```

then we generate the digits using the Array.prototype.indexOf function 
```
x=Set,y=Set,x.toString=AP.indexOf,y.valueOf=String,a=x+++y,b=x+++y,c=x+++y,d=x+++y,e=x+++y,f=x+++y,g=x+++y,h=x+++y,i=x+++y,j=x+++y,
````

then we prepare the Error prototype for letter generation
```
delete Error.name,Error.message=Array,Error.toString=EP.toString,tsb=AP.toString,AP.toString=AP.lastIndexOf,Error.prepareStackTrace=SP.split,er=new Error,er.toString=AP.join,r=er.stack,r.toString=AP.shift,y=Map,y.valueOf=AP.join
```

after that, we fetch each letter for `return`, parenthesis and curly brackets from `function Array() { [native code] }`
```
lu=r+y,lu=r+y,              // letter u 
ln=r+y,                     // letter n 
lt=r+y,lt=r+y,              // letter t
spa=r+r+r+y,spa=r+y,        // space
lr=r+y,lr=r+y,              // letter r
po=r+r+r+y,po=r+y,          // open parenthesis
pc=r+y,                     // closing parenthesis
bro=r+r+r+y,bro=r+y,        // open bracket
le=r+r+r+r+r+y,le=r+y,      // letter e
brc=r+r+r+r+r+y,brc=r+y     // closing bracket
```


then we merge the remaining characters to get ` ,}` from which we obtain the comma  
```
r.toString=tsb
Error.message=r,er=new Error,er.toString=AP.join,r=er.stack,r.toString=AP.shift
r.toString=tsb
Error.message=r,er=new Error,er.toString=AP.join,r=er.stack,r.toString=AP.shift,com=r+y,com=r+y
```


finally we repeat the step to get `=` from using the `String.prototype.anchor` function
```
y.valueOf=SP.anchor,Error.message=y+y,er=new Error,er.toString=AP.join,r=er.stack,r.toString=AP.shift,y.valueOf=AP.join,quo=r+r+r+r+r+r+r+r+y,quo=r+y,
```

setting up the variables, we simply construct the integers for the `String.fromCharCode` and invoke this expression using the eight method to call arbitrary JavaScript functions without parentheses. 