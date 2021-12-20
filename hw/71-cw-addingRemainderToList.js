function solve(numbers, divisor) {
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        const a = numbers[i] + (numbers[i] % divisor);
        newArray.push(a);
    }
    return newArray;
}

// ALTERNATIVE SOLUTION
// function solve(nums, div) {return nums.map(x => x + x % div)}


console.log(solve([7, 5], 3) ,[8, 7])
console.log(solve([2,7,5,9,100,34,32,0],3),[4,8,7,9,101,35,34,0])
console.log(solve([],2),[])
console.log(solve([1000,999,998,997],5),[1000,1003,1001,999])
console.log(solve([0,0,0,0],5),[0,0,0,0])
console.log(solve([4,3,2,1],5),[8,6,4,2])
console.log(solve([33,23,45,78,65],10),[36,26,50,86,70])