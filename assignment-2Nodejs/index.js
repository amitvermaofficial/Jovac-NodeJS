import express from "express";
import path from "path";
import url from "url";
const app = express();
const PORT = 5000;

// middleware
app.use(express.urlencoded({ extended: true }));

// Assignment 1: Simple Express Server

app.get('/', (req, res) => {
  res.send("Welcome to Home Page");
});

app.get('/about', (req, res) => {
  res.send("About Page");
})

app.get('/contact', (req, res) => {
  res.send("Contact Page");
})

// Assignment 2: Dynamic URL and Query Params

app.get('/user/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
}); 

app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`You Searched for => ${query}`);
});


//  Assignment 3: Handling POST Requests with Body Data
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
})

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Hello ${name}, your email is ${email}.`)
});

app.listen(PORT, () => {
  console.log(`Sever Started on PORT: ${PORT}`);
})