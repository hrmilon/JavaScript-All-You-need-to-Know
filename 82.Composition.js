//82. composition 
//Composition means an function's input = other function output 

function print (input){
  console.log(input);
}

function multiplyByFive(n){
  return n * 5
}

function add(a, b){
  return a + b
}

//print(multiplyByFive(add(2,3)))

