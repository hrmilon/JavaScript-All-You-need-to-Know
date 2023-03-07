//75.filter function.js (built in and implemented)

var arr = [2,3,4,5,6]

var filArr = arr.filter(function(value){
  return value % 2 === 1 
})


//console.log(filArr)


function myFilter(arr, cb){
  
  var newArr = []
for (var i = 0; i < arr.length; i++) {
  if(cb(arr[i], i, arr)){
    newArr.push(arr[i])
  }
                                      }  
  return newArr
}

console.log(myFilter(arr, function(value){
  return value % 2 === 1
}))



