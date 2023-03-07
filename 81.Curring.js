 //81. Curring 
//Curring is a kind of fuction where all arguments are declare by specifically 

function curring(a){
  return function(b){
    return function (c){
      return a + b + c
    }
  }
}


var results = curring(2)(2)(2)
//console.log(results);

