// child.js
// Goal: receive a text from the parent, "process" it (uppercase), then send it back

//Listen for a message from the parent process:
process.on("message", (text) => {
    //simulate a tiny bit of work (1 second), like "processing"
  setTimeout(() => {
    const result = text.toUpperCase();

    //send the result back to the parent over IPC
    //also include this child's PID to show it's a separate OS process
    process.send({ pid: process.pid, result });

    //exit cleanly
    process.exit(0);
  }, 1000); //1000 millisecond
});
 