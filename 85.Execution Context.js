//85.Execution Context
//rules behind =>> last in = fast out 

function a(){
  b()
  //console.log('i am A');
}

function b(){
  c()
  //console.log('i am B');
}

function c(){
  //console.log('i am B');
}

a()

console.log('I am Gloabal');

