const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname));

app.use((req, res, next) => {
    req.path === '/' ? next() : res.redirect('/');
});

app.get('/', (req, res) => {
    res.sendfile('index.html');
});

app.listen(port, (err) => {
    console.log(`server started on ${port}`);
})
