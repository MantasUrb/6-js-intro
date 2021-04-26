function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    if (blueStart > bluePulled) {blueLeft = blueStart - bluePulled};  
    if (redStart > redPulled) {redLeft = redStart - redPulled};
    return result = blueLeft / (blueLeft + redLeft);
}

console.log(guessBlue(5, 5, 2, 3), 0.6);
console.log(guessBlue(5, 7, 4, 3), 0.2);
console.log(guessBlue(12, 18, 4, 6), 0.4);