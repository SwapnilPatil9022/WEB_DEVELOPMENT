
// Write a javascript program to find the count of 10 in given array.
//  var ArrNumber = [21,10,56,20,10,56,10,95,23,57,10,11,10];

var ArrNumber = [21,10,56,20,10,56,10,95,23,57,10,11,10];

length = ArrNumber.filter(x => x === 10).length

console.log("Count 10th in given array times : ",length);