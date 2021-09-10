const express = require("express");
const app = express();
const PORT = 5000;

let tasks = {
    tasks: ["Express", "PostgreSQL", "MongoDB", "React"]
}

let students = {
    students: [
        {
        name: "Jihad",
        gender: "Male"
        },
        {
        name: "Joshua",
        gender: "Male"
        },
        {
        name: "Rayan",
        gender: "Male"
        },
        {
        name: "Rayhan",
        gender: "Male"
        },
        {
        name: "Rizky",
        gender: "Male"
        },
        {
        name: "Vasya",
        gender: "Female"
        },
        {
        name: "Wahid",
        gender: "Male"
        },
    ]
};

app.get("/", (req, res) => {
    res.send("Welcome to Jihad's World");
});

app.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
});

app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// error handling untuk page/route not found
app.get('*', function(req, res){
    res.status(404).send('Error not found');
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
