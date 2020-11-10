const express = require('express');
const cors = require('cors');
const connectDB = require('./startup/db');
const games = require('./routes/games');
const help = require('./responses/help.json');
const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/games', games);
app.use(function(req, res) {
   return res.status(404).send(help);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});