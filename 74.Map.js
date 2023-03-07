//74.Map.js (built in and implemented)

var arr2 = [1,2,3]

var sqrArr= arr2.map(function (value){
  return value * value
  //return Math.floor(Math.random() * 100) 
})

//console.log(arr2)
//console.log(sqrArr)

function myMap(arr2, cb2){
  var newArr = []
  for (var i = 0; i < arr2.length; i++) {
    var temp = cb2(arr2[i], i, arr2)
    newArr.push(temp)
    
  }
  return newArr
}

//console.log(myMap(arr2))
var qb = myMap(arr2, function (value){
  return value * 10
})


//console.log(qb)


