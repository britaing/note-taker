const express = require('express');
const path = require('path')
const PORT = 3001;
const app = express();
const uuid = require('uuid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

// The following HTML routes should be created:

// GET /notes should return the notes.html file.
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET * should return the index.html file.
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.

app.get('/api/notes', (req,res) => 
  res.sendFile(path.join(__dirname, '/db/db/json'))
);

app.post('/api/notes', (req, res) => 





app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);