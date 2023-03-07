//72.callback

function sample(a, b, cb){
  var c = a + b
  var d = a- b

  var results = cb(c, d)
  console.log(results)
}

function sum(a,b) {
  return a + b
}

function sub(a,b) {
  return a - b
}


sample(2, 3, sub)

