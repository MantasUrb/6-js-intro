// const shortcut = string => string.replace(/[aeoiu]/g, "");

// ALTERNATIVE SOLUTION
function shortcut(string){
    let vowels = "aeiou";
    let output = "";
    for (let i = 0; i < string.length; i++) {
      if (!(vowels.indexOf(string[i]) > -1)) {
        output += string[i];
      }
    }
    return output;
  }

console.log(shortcut('hello'), 'hll')
// console.log(shortcut('hello'), 'hll')
// console.log(shortcut('how are you today?') == 'hw r y tdy?', 'shortcut did not work properly');
// console.log(shortcut('complain') == 'cmpln', 'shortcut did not work properly');
// console.log(shortcut('never') == 'nvr', 'shortcut did not work properly');