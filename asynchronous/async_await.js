// A function that returns a Promise 
function addTen(num) {
    return new Promise(function(resolve, reject) {
        const result = num + 10;     // Add 10 to the number
        resolve(result);             // Resolve the Promise with the result
    });
}

// An async function to use await
async function runAddition() {
    const result = await addTen(7);             // Wait for the Promise to resolve
    console.log("Async/Await result:", result); // Output: Async/Await result: 17
}

// Call the async function
runAddition();
