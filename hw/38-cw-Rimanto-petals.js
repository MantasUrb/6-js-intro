function howMuchILoveYou(nbPetals) {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    for (let i = 0; i <= nbPetals; i++){
    arr.push(arr[i]);
    }
    return arr[nbPetals-1];
   }


console.log(howMuchILoveYou(7),"I love you")
console.log(howMuchILoveYou(3),"a lot")
console.log(howMuchILoveYou(6),"not at all")

//ALTERNATIVE 
//const howMuchILoveYou=n=>
//['not at all','I love you','a little','a lot','passionately','madly'][n%6]