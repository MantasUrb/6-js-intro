function finalGrade (exam, projects) {
    let result = 0;
    if (exam > 90 || projects > 10) {return 100}
    if (exam > 75 && projects >= 5) {return 90}
    if (exam > 50 && projects >= 2) {return 75}
    else {
        return 0
    }
}



console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);
