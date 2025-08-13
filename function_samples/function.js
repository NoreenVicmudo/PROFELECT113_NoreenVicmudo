
firstfunction();

function firstfunction() {
    console.log("This is the first function");
    }


const greet = function() {
    console.log("Hello, this is a greeting function!");
}
greet ();
const multiple = ()=> console.log("This is a multiplication function");

multiple();

const firstname="sly";
const lastname="chan";
console.log(`hello, my first name is ${firstname} and my last name is ${lastname}`);


function greetname(name,cb) {
    setTimeout(() => {
        cb(`Hello, ${name}`);
    }, 500);

}

greetname("slychan", message=> {
    console.log(message);
});
