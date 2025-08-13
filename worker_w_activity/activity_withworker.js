import { Worker } from "worker_threads";
//const { Worker } = require("worker_threads");
const worker = new Worker("./activity_worker.js");
const [, , minStr, maxStr] = process.argv;

worker.postMessage({ min: minStr, max: maxStr });

worker.on("message", (result) => {
  console.log(`✅ Found ${result.even} even numbers between ${minStr} and ${maxStr}.`);
  console.log(`Total Sum of Even Numbers: ${result.sum}`);
  console.log('Total Runtime:', process.uptime(), 'seconds');
  worker.terminate(); // Terminate worker after receiving result
});

worker.on("error", (err) => {
  console.error("❌ Worker error:", err);
});

console.log("Other process");

