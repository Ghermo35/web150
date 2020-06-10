"use strict";

function GetAvg() {
  var sum = 0;
  var test = 0;
  var total = [];
  while(test <5){
    var number = prompt("Please Enter a Number");
    total.push(number);
    sum += parseInt(number);
    test++;
}
alert('The average score is: ' + sum/total.length )
}
GetAvg();
