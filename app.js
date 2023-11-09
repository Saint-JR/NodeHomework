const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/hello", (req, res) => {
    res.send({
        msg: "Hello world",
    });
});

app.get("/echo/:id", (req, res) => {
    const id = req.params["id"];

    res.send({ id });
});

app.post("/sum", (req, res) => {
    const { numbers } = req.body;

    res.send({
        sum: numbers.reduce((a, b) => a + b),
    });
});

const list = [];

app.post("/list", (req, res) => {
    const { text } = req.body;

    list.push(text);

    res.send({ list });
});

app.listen(3000, () => {
    console.log("success!");
});
