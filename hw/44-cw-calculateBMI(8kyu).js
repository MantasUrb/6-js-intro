function bmi(weight, height) {
    if (weight / height ** 2 <= 18.5) {return 'Underweight'}
    if (weight / height ** 2 <= 25.0) {return 'Normal'}
    if (weight / height ** 2 <= 30.0) {return 'Overweight'}
    if (weight / height ** 2 > 30) {return 'Obese'}}


console.log(bmi(80, 1.80), "Normal");


//Alternative solution (smart)
// const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
//                                     bmi <= 25 ? "Normal" :
//                                     bmi <= 30 ? "Overweight" : "Obese";