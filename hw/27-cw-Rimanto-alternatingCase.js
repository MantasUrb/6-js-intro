function toAlternatingCase(string) {
    let newString = ''
    for (let i = 0; i < string.length; i++) {
    newString += string[i] === string[i].toUpperCase() ? string[i].toLowerCase() : string[i].toUpperCase()
        }
    return newString
}

console.log(toAlternatingCase("HELLO WORLD"));
console.log(toAlternatingCase("hello world"));
console.log(toAlternatingCase("Hello World"));
console.log(toAlternatingCase("Hello World"))


describe("String.prototype.toAlternatingCase", _ => {
    it("should work for fixed tests (provided in the description)", _ => {
      Test.assertEquals("hello world".toAlternatingCase(), "HELLO WORLD");
      Test.assertEquals("HELLO WORLD".toAlternatingCase(), "hello world");
      Test.assertEquals("hello WORLD".toAlternatingCase(), "HELLO world");
      Test.assertEquals("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
      Test.assertEquals("12345".toAlternatingCase(), "12345");
      Test.assertEquals("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
      Test.assertEquals("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
      Test.assertEquals("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
    });
  });