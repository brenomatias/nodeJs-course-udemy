const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const genres = [
  { id: 1, name: 'Action' },  
  { id: 2, name: 'Horror' },  
  { id: 3, name: 'Romance' },  
];

app.get('/api/genres', (req, res) => {
  res.send(genres);
});

app.post('/api/genres', (req, res) => {
  const { error } = validateGenre(req.body); 
  console.log(req.body)

  if (error) return res.status(400).send(error.details[0].message);
  const genre = {
    id: genres.length + 1,
    name: req.body.name
  };
  genres.push(genre);
  res.send(genre);
});

app.put('/api/genres/:id', (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  const { error } = validateGenre(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  genre.name = req.body.name; 
  res.send(genre);
});

app.delete('/api/genres/:id', (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});

app.get('/api/genres/:id', (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');
  res.send(genre);
});

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(genre, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


// // 
// So from this lecture, you're going to start building the backend
// services for our Vidly application. As I told you before,
// Vidly is an imaginary service for renting out movies.
// So throughout this course, we're going to build up the backend of Vidly
// bit by bit. Your first task is to create a
// service for managing the list of genres, so each movie
// has a genre, like action, horror, whatever. You should have
// an endpoint for getting the list of all genres, because somewhere
// in our client applications, perhaps we have a dropdown list for the user
// to select a gene. So we need an endpoint to get all the genres,
// we should also be able to create a new genre, as well as update,
// or delete an existing one. So if we're going any further, I
// want you to put what you have learned so far into practice. So even if you are an
// experienced developer, don't say, no Mosh, I don't know how to do this, this is so easy!
// I know it's easy but what matters now is that I want you to get used to this
// syntax, so go ahead, start a new project from scratch,
// call it Vidly, and build this http service for managing
// the list of genres. You can see my solution attached to this lecture.