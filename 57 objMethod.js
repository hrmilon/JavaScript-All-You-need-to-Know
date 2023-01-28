var obj = {
  x: 10,
  y: 20,
  z: 30
}

//get keys from obj
var getkey = Object.keys(obj)

//same value
var getvalue = Object.values(obj)

//make every key value as multi dimensional array.

var getent = Object.entries(obj)

//duplicate existing object
var crt = Object.assign({}, obj)
console.log(crt)