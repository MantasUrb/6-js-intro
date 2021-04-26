function past(h, m, s) {
    let result = 0;
    if (s > 0) {s = s * 1000};
    if (m > 0) {m = m * 60000};
    if (h > 0) {h= h * 3600000}
   return result = h + m + s;
}


console.log(past(0,1,1),61000)
console.log(past(1,1,1),3661000)
console.log(past(0,0,0),0)
console.log(past(1,0,1),3601000)
console.log(past(1,0,0),3600000)
