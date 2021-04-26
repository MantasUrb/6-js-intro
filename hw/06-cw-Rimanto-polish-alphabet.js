function correctPolishLetters(str) {
    let accents = 'ąćęłńóśźż';
    let accentsOut = "acelnoszz";
    str = str.split('');
    str.forEach((letter, index) => {
      let i = accents.indexOf(letter);
      if (i != -1) {
        str[index] = accentsOut[i];
      }
    })
    return str.join('');
  }
  
console.log(correctPolishLetters("Jędrzej Błądziński"), "->", "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"));
console.log(correctPolishLetters("Maria Skłodowska-Curie"));


