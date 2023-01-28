//inner function is kind of nested function and inner function can not be called outside of that function


function wellcome(greet, name){
  function getFirstname(){
    if (name) {
     return name.split(' ')[1]
    }
  }
  var msg = greet + ' ' + getFirstname();
console.log(msg)
}

wellcome('hi', 'hr milon')