// If there are one or two good ideas, return 'Publish!',
// if there are more than 2 return 'I smell a series!'.
// If there are no good ideas, as is often the case, return 'Fail!'.

function well(x = "Fail!") {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {sum += 1;}
    }
  if (sum === 0) {return "Fail!";}
  if (sum === 1 || sum === 2) {return "Publish!";}
  if (sum > 2) {return "I smell a series!";}
  return sum;
}

console.log(well(["bad", "bad", "bad"]), "Fail!");
console.log(well(["good", "bad", "bad", "bad", "bad"]), "Publish!");
console.log(well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]),"I smell a series!");
