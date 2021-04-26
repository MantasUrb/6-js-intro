/*ALTERNATIVE 
function digitize(n) {return String(n).split('').map(Number).reverse()}

function digitize(n){return (n + '').split('').map(Number).reverse();}

*/ console.log(digitize(35231),[1,3,2,5,3]);


function digitize(n) {
    var initialArray = (""+n).split('');
    var reversedArray = [];
    for (var i = initialArray.length - 1; i >= 0; i--) {
      reversedArray[i] = parseInt(initialArray.shift(),10);
    }
    return reversedArray;
  }