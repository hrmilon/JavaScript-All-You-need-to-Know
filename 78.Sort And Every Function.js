//78. Sort sum and every function 

//sorting object 

var persons = [
  {
    name : 'a',
    age : 23
  },
  {
    name: 'b',
    age: 20
  },
  {
    name: 'c',
    age: 24
  },
  {
    name: 'd',
    age: 21
  }
  ]


persons.sort(function(a, b){
  if (a.age > b.age) {
    return 1
  }
  
  if (a.age < b.age) {
    return -1
  } 
  
  else {
    return 0
  }
  
  
})


//console.log(persons);




//for Sorting Natural number

var arr = [1,2,4,-1,34,5,6]
arr.sort(function(a, b){
  if (a > b) {
    return 1
  }
  
  if (a < b) {
    return -1
  } 
  
  else {
    return 0
  }
  
  
})

//console.log(arr)



//every fuction check any specific operation like check odd and even number 

var temp = arr.every(function(value){
  return value % 2 === 0
})

var temp2 = arr.every(function(value){
  return value >= 0
})

//console.log(temp2);

