//when a function store in a var is called expression.

var addnumb = function(a, b){
return a+b
}

var a = addnumb(2,9)
console.log(a) //11

setTimeout(function() {
  console.log('I will show after 4 sec')
}, 4000);