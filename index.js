const express = require('express');

const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {

    res.send('hello node all hello')

});

const users = [
    { id: 1, name: "Sabana", email: "xyz@gmail.com", phone: "766898998" },
    { id: 2, name: "Sabanjjfsj", email: "jjfsj@gmail.com", phone: "766898998" },
    { id: 3, name: "dlsld", email: "dlsld@gmail.com", phone: "766898998" },
    { id: 4, name: "aadsl", email: "aadsl@gmail.com", phone: "766898998" },
    { id: 5, name: "kopbana", email: "kop@gmail.com", phone: "766898998" },
    { id: 6, name: "pdsana", email: "pds@gmail.com", phone: "766898998" },
    { id: 7, name: " pop", email: "nmkmpo@gmail.com", phone: "766898998" },
]

app.get('/users', (req, res) => {
    // console.log('query', req.query);


    if (req.query.name) {

        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched)
    } else {
        res.send(users)
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);

    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);
    res.send(user)
});


app.post('/user', (req, res) => {

    console.log(req.body);

    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})


app.listen(port, () => {
    console.log("liseting to port", port);
})
