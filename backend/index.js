const express = require('express');
const cors = require('cors');
const { contacts } = require('./db/dummyData')


const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send(contacts)
})

app.listen(4200, (console.log('Server is running on port 4200')));