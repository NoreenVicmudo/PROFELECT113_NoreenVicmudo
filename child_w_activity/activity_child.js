// child.js
// Goal: receive a text from the parent, "process" it range 1-50, sum, count, then send it back

//Listen for a message from the parent process:
process.on("message",  ({ min, max }) => {
    
  setTimeout(() => {
    //declare the values as minimum and maximum and the variables to be used

    const minNum = Number(min);
    const maxNum = Number(max);
    let sum = 0;
    let oddCount = [];

    //count and add odd numbers
    for (let i = minNum; i <= maxNum; i++) {
        if (i % 2 === 1) {
          oddCount.push(i);
          sum += i;
        }
      }

    //send the result back to the parent over IPC
    //also include this child's PID to show it's a separate OS process
    process.send({ pid: process.pid, oddCount, sum, min: minNum, max: maxNum });

    //exit cleanly
    process.exit(0);
  }, 1000); //1000 millisecond
});
 