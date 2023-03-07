//77.Find and index function 

//if need to return bollean value than no need any condition like if or else it can be return by return 

var arr = [1,2,3,4,5]
var res = arr.findIndex(function(value){
  return value === 2
})


console.log(res)


function myF (arr, cb){
  for (var i = 0; i < arr.length; i++) {
    if(cb(arr[i])){
      return arr[i]
    }
  }
}

console.log(myF(arr, function(value){
  return value === 2
}))

