//76.Reduce function (built in and implemented)

var arr = [1,2,3,4,5]

function myReduce(arr, cb, acc){
  for(var i = 0; i < arr.length; i++){
    acc = cb(acc, arr[i])
  }
  return acc
}

var max = myReduce(arr, function(prev, curr){
  return Math.max(prev, curr)
}, 0)
console.log(max)
