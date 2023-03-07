//65. Inner Function


function greet(greet, name) {

  function sayHi() {
    if (name) {
      return name.split(' ')[0]
    }
  }


  var msg = greet + ' ' + sayHi()
  console.log(msg)

}


greet('good evening', 'hr milon')
