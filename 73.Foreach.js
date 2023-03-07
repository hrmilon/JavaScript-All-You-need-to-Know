//73.foreach (built in and implemented)

var arr = [1,2,3]

var sum = 0
arr.forEach(function(value, index, arr){
  //console.log(value, index, arr)
  sum += value
})

console.log(sum)


function forEach(arr, cb){
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr)
  }
}


forEach(arr, function(value, i, arr){
  arr[i] = value + 5
})


console.log(arr)

