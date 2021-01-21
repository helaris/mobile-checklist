const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send(contacts)
})


app.get('/checklists', (req, res) => {
  res.send(checklists[0])
})
app.get('/answers', (req, res) => {
  res.send(answers)
})
app.get('/questions', (req, res) => {
  res.send(questions)
})

app.listen(4200, (console.log('Server is running on port 4200')));