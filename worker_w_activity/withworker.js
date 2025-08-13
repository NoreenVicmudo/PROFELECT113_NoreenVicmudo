import { Worker } from "worker_threads";
 
console.log("[Main] Starting app (with worker)");
 
 
const worker = new Worker("./worker.js");
 
worker.postMessage(3_000_000_000); // same heavy task
 
worker.on("message", (result) => {
  console.log(`[Main] ✅ Worker finished. Result: ${result}`);
});
 
worker.on("error", (err) => {
  console.error("[Main] ❌ Worker error:", err);
});
 
 
console.log("other process");