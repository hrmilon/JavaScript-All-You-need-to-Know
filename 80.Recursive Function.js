
//80. Recursive Function 
//recursive function use for alternative way of for loop

function sayHi(n){
  if (n === 0) {
    return 
  }
  
  console.log('HI');
  sayHi(n - 1)
}

//sayHi(5)

function sum (n){
  if (n === 1) {
    return 1 
  }
  return n + sum(n - 1)
}

//console.log(sum(3));

var arr = [1,2,3,4,5]

function sumArr (arr, lastIndex){
  if (lastIndex < 0) {
    return 0
  }
  return arr[lastIndex] + sumArr(arr, lastIndex - 1)
}

console.log(sumArr(arr, arr.length - 1));
