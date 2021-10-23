const express = require('express');

const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world! this is Lukman I am a muslim');
});

const users = [
    { id: 0, name: "Hamid" },
    { id: 1, name: "Hasan" },
    { id: 2, name: "Haque" },
    { id: 3, name: "Halim" },
    { id: 4, name: "Hadis" }
]

app.get('/users', (req, res) => {
    const search = req.query.search;

    // use query

    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))

        res.send(searchResult);

    } else {
        res.send(users)
    }
})

// app.Method

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    // res.send("inside the post");
    // res.send(JSON.stringify(newUser))
    res.json(newUser);

})


// Dynamic api/parameters
app.get('/users/:id', (req, res) => {

    const id = req.params.id;
    const user = users[id];
    res.send(user)

})

app.listen(port, () => {
    console.log("Listenign", port);
})