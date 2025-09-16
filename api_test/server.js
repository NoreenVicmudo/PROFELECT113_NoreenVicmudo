import express from "express"; //npm start
import bookRoutes from "../routes/bookRoutes.js"
import { Router} from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
/*
// Middleware to parse JSON
app.use(express.json()); //para maintindihan ni node js (taga parse)
app.use("/books",bookRoutes);

function checkStudentName(req, res, next) {
    const { studentName } = req.body;
    if (!studentName) {
        return res  
            .status(400) 
            .json({ error: "Please enter your name to check in" });
    }
    next();
}//

app.post("/checkin", checkStudentName, (req, res) => {
    const {studentName } = req.body;
    res.json ({ message: `Welcome ${studentName}! Your attendance is marked.`});
});
*/

/*
app.get("/books",(req, res) => res.send("GET -> List books"));
//      route          arrow function    2 parameters - method and response 
//http://localhost:3000/books

app.post("/books",(req, res) => res.send("Post -> Add a book") );
//normally for insertion

const books = [
    { id: 1, title: "The Hobbit", category: "fantasy"},
    { id: 2, title: "1984", category: "dystopia"},
    { id: 3, title: "Brave New World", category: "dystopia"},
    { id: 4, title: "The Name of the World", category: "fantasy"},
    { id: 5, title: "Clean Code", category: "programming"},
    { id: 6, title: "The Pragmatic Programmer", category: "programming"},
];

//request query na ididisplay sa front end
                //type of category
app.get("/search/:category",(req, res) => {
    const { category } = req.params; //in curly brackets so that it can be directly accessed + after search -> go to category 
    const matches = books.filter((b) => b.category === category); //filter is a higher order function (automatic) -- filters data based on rules category based on routes
    res.json({total: matches.length, matches}) //return the matches matched
}); //json because it returns to front end 
//http://localhost:3000/search/fantasy


//id dapat tayo mag provide
//makapagdagdag ng data
//pag sinearch dapat makikita yung dinagdag na data*/

const users = [];
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    if (users.find((u) => u.username === username)) {
        return res.status(400).json({ error: "Username already taken!" });
    }
    const hashedPassword = await bcrypt.hash(password,10);
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: "User successfuly created!" });
});

app.post("/login", async (req,res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);
    if (!user) return res.status(401).json({ error: "User not found" }); //if user exists in user array

    const valid = await bcrypt.compare(password, user.password);
    if(!valid) return res.status(401).json({ error: "Wrong password" }); //if valid, compare password given and the saved encrypted password in array
    ///If both valid, proceed
    //Generate JWT / Token Generation      v payload - reference na naka attach            --- token based
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { //header, payable, secret key
        expiresIn: '1h', //Optionals but sa front end ilologout 
    });
    res.json({ message: "Login successfully, this is your token: ", token }); 
})

app.listen(3000, () => {
    console.log("server running at localhost 3000");
});

//Postman if not thunderclient
//Shortcut before Handlers
//Shortcut - Compile to one folder before running
//Para one line lang sa server.js

//Middle - logic na parang guard bago pumunta sa logic
// For verification, validation before  pumunta sa logic
//middleware is mostly used in functions to be reused.
//req - ibabato ng user
//res - ibabato pabalik (response)
//next - pagaganahin ang original logic or naka next in line in the queue, pwede isa or 2 or 3
//jwt - jason web token - for authentication 
//after verifying- it will generate token that will create jwt or token
//it cannot be destroyed, if it is ruined, it won't run
//everytime gagawa ng transaction, iveverify if legit ang token
//sa bawat encryption, may signature
// JS is not capable of session, so use token
