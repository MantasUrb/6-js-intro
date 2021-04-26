const enough = (cap, on, wait) => {let possible = cap > on + wait ? 0 : (on - wait); return possible};

  console.log(enough(10, 5, 5), 0);
  console.log(enough(100, 60, 50), 10);
  console.log(enough(20, 5, 5), 0);


  //alternative
  // function enough(cap, on, wait) {
  //   return Math.max(wait + on - cap, 0);
  // }