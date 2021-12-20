function getDivisorsCnt (n) {
    let sum = 0;
        for (let i = 0; i <= n; i++) {
            if (n % i === 0) {
                sum++;
            }
        } return sum;
}

console.log(getDivisorsCnt(1) , 1);
console.log(getDivisorsCnt(5) , 2);
console.log(getDivisorsCnt(10) , 4);
console.log(getDivisorsCnt(11) , 2);
console.log(getDivisorsCnt(54) , 8); 