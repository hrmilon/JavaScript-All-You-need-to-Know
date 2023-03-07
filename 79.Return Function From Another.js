//79. Return function from another function 

function greet (msg){
  function greeting(name){
    return msg + ', ' + name
  }
  return greeting
}


var gm = greet('hi')
var msg = gm('John')
//console.log(msg);
//console.log(typeof msg);

function base(b){
  return function(n) {
   var res = 1
   for(var i = 0; i < b ; i++){
    res *=n  
   }
   return res
  }
}


var base = base(2)
//console.log(base(3));


