import express from "express"; 
const app = express();

app.use(express.json());

const books = [
    { id: 1, title: "The Hobbit", category: "fantasy"},
    { id: 2, title: "1984", category: "dystopia"},
    { id: 3, title: "Brave New World", category: "dystopia"},
    { id: 4, title: "The Name of the World", category: "fantasy"},
    { id: 5, title: "Clean Code", category: "programming"},
    { id: 6, title: "The Pragmatic Programmer", category: "programming"},
];

// Add a new book via POST request
app.post("/books", (req, res) => {
    const { title, category } = req.body;

    if (!title || !category) {
        return res.status(400).json({ error: "Title and category are required" });
    }

    const newBook = {
        id: books.length + 1,
        title,
        category
    };

    books.push(newBook);
    res.status(201).json({ message: "Book added", book: newBook });
});

app.get("/search/:category",(req, res) => {
    const { category } = req.params; 
    const matches = books.filter((b) => b.category === category); 
    res.json({total: matches.length, matches}) 
}); 

app.listen(2000, () => {
    console.log("Server running at http://localhost:2000");
});

