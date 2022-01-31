const Joi = require('joi');

const genres = require('./routes/genres');

const express = require('express');

const app = express();

const mongoose = require('mongoose');

// create/connect with database (MongDB Compassa)
mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connect to MongoDB...'))
    .catch(err => console.log(err))
// create/connect with database (MongDB Compassa)

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));