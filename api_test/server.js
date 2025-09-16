import express from "express"; //npm start
const app = express();

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
//pag sinearch dapat makikita yung dinagdag na data

app.listen(3000, () => {
    console.log("server running at localhost 3000");
});