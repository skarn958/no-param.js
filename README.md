# no-param.js
collection of parentheses-less tricks in javascript 

## strings 
it is possible to generate arbitrary strings in javascript without the use of any parentheses, brackers or curly braces. it works by overwriting the `prepareStackTrace` function of an `Error` which allows for invoking arbitrary functions of the `String` prototype without parentheses. 

read the full writeup here: https://blog.ikaes.de/generating-strings-without-parentheses-in-javascript 

## execute javascript
similarly to string generation, we can invoke the `eval` function instead returning the value of `String.fromCharCode`. this returns in our desired string to be evaluated as javascript code
