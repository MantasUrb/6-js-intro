function getAverage (marks) {
    sum = 0;
    for (i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return Math.floor(sum / marks.length);
}

console.log(getAverage([2,2,2,2]),2);
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1);

//Alternative solution with in-build reduce() function

// function getAverage(marks){
//     return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
//   }
