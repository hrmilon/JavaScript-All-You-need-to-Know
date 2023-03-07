//66. Scope 
//chapter 8 


//doc : scope act like a children and parent and they get their things like real world 


function test(n) {
  function x(){
      return n%3 === 0  
  }
  
  function y(){
    return n%5 === 0  
  }
  
  if (x() && y()) {
    console.log(n + "is dividable by both")
  } else {
    console.log("not dividable")
  }
}

test(25) //true 
