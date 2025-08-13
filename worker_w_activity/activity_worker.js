import { parentPort } from "worker_threads";
//const { parentPort } = require("worker_threads");

parentPort.on("message", ({ min, max }) => {
  const minNum = Number(min);
  const maxNum = Number(max);
  let sum = 0;
  let evenCount = 0;
  for (let i = minNum; i <= maxNum; i++) {
    if (i % 2 === 0) {
      evenCount++;
      sum += i;
    }
  }
  parentPort.postMessage({ sum, even: evenCount });
});