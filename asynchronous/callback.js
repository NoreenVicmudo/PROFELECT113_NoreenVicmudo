// A function that takes a number and a callback function
function doubleNumber(num, callback) {
    const result = num * 2;           // Multiply the number by 2
    callback(result);                 // Call the callback function with the result
}

// Call the function and pass a callback that logs the result
    doubleNumber(5, function(result) {
    console.log("Callback result:", result); // Output: Callback result: 10
});
