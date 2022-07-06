const express = require("express");
const store = require("store2");
const app = express();
const port = 3000;

const apiRouter = require("./routes/api.js");

const path = require("path");


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
  }));




app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/html/home.html"));
});

app.get("/success", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/html/success.html"))
})

app.get("/error", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/html/error.html"))
})


app.listen(port, () => {
    console.log(`Intern Hub listening at http://localhost:${port}`)
});