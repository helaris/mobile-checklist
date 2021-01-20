const express = require('express');
const cors = require('cors');
const { firstContact } = require('./db/dummyData')


const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send(firstContact)
})

app.listen(4200, (console.log('Server is running on port 4200')));