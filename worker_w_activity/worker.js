import { parentPort } from "worker_threads";
 
parentPort.on("message", (max) => {
  let sum = 0;
  for (let i = 0; i < max; i++) {
    sum += i;
  }
  parentPort.postMessage(sum);
});