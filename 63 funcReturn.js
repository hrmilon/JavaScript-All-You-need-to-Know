function addNumber(){
  var sum = 0
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
       }
  return sum
}
//console.log() is not appropriate for returning something from a function. can not store a invoking function in a var

//return keyword is appropriate.

var a = addNumber(11,10)
console.log(a) //21



//example a function holding person info in a Object

function person(name, email){
  return {
  name : name,
  email : email
  }
}

var a = person('jake', 'jake@gmail.com')
console.log(a)
//name:jake
//email:jake@gmail.com


