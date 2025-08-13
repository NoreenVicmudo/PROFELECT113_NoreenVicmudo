function heavyTask(max){
    let sum = 0;
    for (let i = 0; i < max; i++){
        sum += 1;
    }
    return sum;
}

console.log("[Main] Starting application (no worker)");

//This will block the thread immediately
const result = heavyTask(3_000_000_000); // 👈 VERY HEAVY

console.log(`[Main] Done with heavy task ${result}`);
console.log("Other processes");
