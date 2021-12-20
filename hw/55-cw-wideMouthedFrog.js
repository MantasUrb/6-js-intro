let mouthSize = animal => animal.toUpperCase() === "ALLIGATOR" ? "small" : "wide";

console.log(mouthSize("toucan"),"wide");
console.log(mouthSize("ant bear"),"wide");
console.log(mouthSize("alligator"),"small");
