//CODE SCENARIO #1
/*console.log("Start the process") //1st
setTimeout(() => { //3rd
    console.log("run")
}, 0)
console.log("End process") //2nd*/
//In displaying or reading the line, it 

/*
//syntax error
Promise.resolve().then => console.log("Allen")
    console.log("David")


Promise.resolve().then(() => console.log("Allen"))
    .then(() => console.log("David")) //David, Allen
*/

/*
//unhandled promise rejection
async function run()
{
    console.log("one");
    await Promise.reject();
    console.log("two");
}
console.log("three");
run();*/

/*
const name = "allen";
name="allen"
console.log(name); //TypeError: Assignment to constant variable.*/

/*
function testScope()
{
    if (true){ //default true so it will run
        var x = 30
        let y = 50
    }
    console.log(x)
    console.log(y)
}
testScope()*/

/*
const fruits=["apple", "banana", "mango"];
fruits[2]="banana";
console.log(fruits); //["apple", "banana", "banana"]*/

/*
const person=["david", "michael", "allen"]
const age=[20,30,40]

console.log(person[0], age[0]); //david 20
console.log(person[1], age[1]); //michael 30
console.log(person[2], age[2]); //allen 40

for (let i = 0; i < person.length; i++) {
    console.log(`${person[i]}: ${age[i]}`);
}
//david:20
//michael:30
//allen:40*/


const veg=[["okra","upo"],["petsay","cabbage"]];
for (let i = 0; i<veg.length; i++) { //if customzied, use for, while, do while
    for (let j = 0; j < veg[i].length; j++) {
        console.log(`${veg[i][j]}`);
    }
}
/*
veg.forEach((item) => { //foreach is a higher order functions, shortcut and kukunin ang laman
    item.forEach((subItem) => { //read each item on the bracket array
        console.log(`${subItem}`);
    });
});

veg.forEach((item) => { //read the first bracket array
        console.log(`${item}`);
});*/

/*
let rows = 10;

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
        process.stdout.write(" "); // Use process.stdout.write to avoid new line
    }
    for (let j = 1; j <= i; j++) {
        if (j === i) {
            process.stdout.write("*"); // Use process.stdout.write to avoid new line
        } else {
            process.stdout.write("* "); // Use process.stdout.write to avoid new line
        }
    }
    console.log(); // Move to the next line after each row is printed
}*/

/*
let rows = 10;

for (let i = 1; i <= rows; i++) {
    // build one row at a time
    for (let j = 1; j <= rows - i; j++) {
        process.stdout.write(" ");  // spaces before stars
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");  // star
        if (j < i) process.stdout.write(" "); // add space only between stars
    }
    console.log(); // new line after finishing the row
}*/

























let rows = 10;

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
        process.stdout.write(" "); // Use process.stdout.write to avoid new line
    }
    for (let j = 1; j <= i; j++) {
        if (j === i) {
            process.stdout.write("*"); // Use process.stdout.write to avoid new line
        } else {
            process.stdout.write("*"); // Use process.stdout.write to avoid new line
        }
    }
    console.log(); // Move to the next line after each row is printed
}