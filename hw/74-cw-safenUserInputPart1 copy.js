function add (a) {
    return function (b) {
      return a + b;
    };
  }


console.log(add(2)(5), 7,    'Should return the addition of these invocations!')
console.log(add(14)(25), 39, 'Should return the addition of these invocations!')


// The outer function returns an anonymous function (line 2). Functions in JavaScript have lexical scope, meaning that they have access to the variables which were in the same scope when the function was declared. In other words, the function remembers variables that are close to it, when it's being created. So the function from line 2 knows the value of parameter x in line 1.
// The interesting bit is this addf(3)(4)
// addf returns a function and by using the 2nd set of brackets you instantly pass a parameter into it. You could split this line into two:
// var a = addf(3); //because addf returns a function, now you can call a() and pass another value to it
// a(4);
// Hopefully it makes more sense now.

// ------------------------

// ALTERNATIVE SOLUTION

// const add = a => b => a+b;
