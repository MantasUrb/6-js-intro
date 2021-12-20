function calculateSpeed (distance, time) {

  function convertDistance (distance) {
    if (distance.includes("km")) {
      return parseFloat(distance) * 1000;
    } else {
      return parseFloat(distance);
    }
  } 

  function convertTime (time) {
    if (time.includes("min")) {
      return parseFloat(time) * 60;
    } else {
      return parseFloat(time);
    }
  } 

  return (
    Math.round(
      convertDistance(distance) 
      / convertTime(time) 
      * 2.23694
      ) + "mph"
    )
}

//ALTERNATIVE SOLUTION using REGEXP
// function calculateSpeed(d, t) {
  // return `${Math.round(2.23694 * (parseFloat(d) * (/km/.test(d) ? 1000 : 1)) / (parseFloat(t) * (/min/.test(t) ? 60 : 1)))}mph`;
// }

console.log(calculateSpeed("100m", "10s"), "22mph")
console.log(calculateSpeed("3km", "5min"), "22mph")
console.log(calculateSpeed("35m", "293s"), "0mph")
console.log(calculateSpeed("573km", "39min"), "548mph")