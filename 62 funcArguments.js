/*function getArg(a,b,c){
console.log(arguments)
}
getArg(10,5,5) */

//no need to property everytime
function addNumber(){
  //take a var = sum to store input
  var sum = 0
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
       }
 console.log(sum) 
}

addNumber(3,5)
//8