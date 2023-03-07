//70.Higher Order Function

function add(a,b) {
  return a + b 
}

function manipulate(a, b, func) {
  var c = a + b 
  var d = a - b
  
  function multyply() {
    var m = func(a, b)
    return c*d*m   
    
  }
  
  return multyply
  
}

var multyply = manipulate(2, 1, add)

console.log(multyply())
