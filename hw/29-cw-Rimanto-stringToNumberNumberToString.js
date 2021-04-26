function noBoringZeros(n) {
    if (n === 0) {
        return n;
    }
    let i = n;
    for (; i % 10 === 0; i = parseInt(i / 10)) {
    }

    return i; 
}


console.log(noBoringZeros(1450), 145)
console.log(noBoringZeros(960000), 96)
console.log(noBoringZeros(1050), 105)
console.log(noBoringZeros(-1050), -105)
console.log(noBoringZeros(-105), -105)
console.log(noBoringZeros(0), 0)


/*ALTERNATIVE SOLUTION
function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}

*/