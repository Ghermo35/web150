//  var nameData = ['A', 'B', 'C', 'D', 'E', 'F'];
//     var nameDataLength = nameData.length;
//     var avgGrade = 0;
//     var gradeDate = prompt('Enter your grade to check your letter grade');

//     function getAvg(nameData, gradeData) {
//       for (var i = 0; i < nameData.length; i++) {
//         alert("Your grades are " + nameData[i] + " ," + gradeData[i]);
//         if (gradeData[i] >= 90) {
//           alert("Your grades are " + nameData[i] + "A");
//         } else if (gradeData[i] >= 80) {
//           alert("Your grades are " + nameData[i] + "B");
//         } else if (gradeData[i] >= 70) {
//           alert("Your grades are " + nameData[i] + "C");
//         } else if (gradeData[i] >= 60) {
//           alert(" Your grades are " + nameData[i] + "D");
//         } else {
//           alert("Your grades are " + nameData[i] + "F");
//         }
//       }
//     }

'use strict';

alert("Welcome to my grade converter, click ok to start!")
var grade = prompt('Type a number grade: ')

function getAvg(grade) {
  if (grade <= 100 && grade > 88) {
    alert("Letter grade: A")
  }
  else if (grade <= 87 && grade > 80) {
    alert("Letter grade: B")
  }
  else if (grade <= 79 && grade > 68) {
    alert("Letter grade: C")
  }
  else if (grade <= 67 && grade > 60) {
    alert("Letter grade: D")

  }
  else if (grade <= 60) {
    alert("Letter grade: F")
  }
}
  getAvg(grade);
