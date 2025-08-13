// A function that returns a Promise
function multiplyByTwo(num) {
    return new Promise(function(resolve, reject) {
        const result = num * 2;       // Multiply the number by 2
        resolve(result);              // Resolve the Promise with the result
    });
}

// Use .then() to handle the resolved value
multiplyByTwo(6).then(function(result) {
    console.log("Promise result:", result); // Output: Promise result: 12
});