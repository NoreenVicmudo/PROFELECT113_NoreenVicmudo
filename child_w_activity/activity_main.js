import { fork } from "child_process";
 
// Start the child process (runs child.js in a separate OS process)
const child = fork("./activity_child.js");
 
//Display parent and child PID
console.log("Parent PID:", process.pid);
console.log("Spanned child PID:", child.pid);

// When the child sends us a message, print it
child.on("message", (msg) => {
  console.log(`Child PID (${msg.pid}) processed range  [${msg.min}..${msg.max}]`);
  console.log(`Odd Numbers: ${msg.oddCount}`);
  console.log(`Count:`, msg.oddCount.length, `| Sum:`, msg.sum);
});

// If the child exits, let’s know how it finished
child.on("exit", (code) => {
  console.log(`Child (${child.pid}) exited with code:`, code);
});


//Send values to child
child.send({ type: 'number', min: 1, max: 50 });

// Meanwhile, the parent keeps doing other work (showing they don’t block each other)
let ticks = 0;
const timer = setInterval(() => {
  ticks++;
  console.log("Parent still responsive...", ticks);
  if (ticks === 5) clearInterval(timer);
}, 300);
 