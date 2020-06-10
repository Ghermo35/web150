'use strict';
var x =prompt("Enter a base number: ")
var y =prompt("Enter an exponent: ")

function power(x, y) {
  var sum = Math.pow(x,y)
  alert('The power of ' + x + ' * ' + y + ' is: ' + sum);
}
power(x,y);