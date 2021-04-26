function tripleTrouble(one, two, three){
    let result = "";
    for (var i = 0; i < Math.min(one.length, two.length, three.length); i++) {
      result += one[i] + two[i] + three[i];
    }
    return result;
  }

console.log(tripleTrouble("this","test","lock"), "ttlheoiscstk");
console.log(tripleTrouble("aa","bb","cc"), "abcabc");
console.log(tripleTrouble("Bm", "aa", "tn"), "Batman");
console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");

// // takes a variable number of words
// function creatingWord() {
//     var output = "";
//     var words = Array.prototype.slice.call(arguments);
  
//     var maxLength = 0;
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       if (word.length > maxLength) {
//         maxLength = word.length;
//       }
//     }
  
//     for (var i = 0; i < maxLength; i++) {
//       for (var j = 0; j < words.length; j++) {
//         var word = words[j];
//         if (word.length > i) {
//           output += word[i];
//         }
//       }
//     }
  
//     return output;
//   }