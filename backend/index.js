const express = require('express');
const cors = require('cors');
const { contacts, checklists, answers, questions, elevators, serviceCompanies } = require('./db/dummyData')


const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send(contacts)
})


app.get('/checklists', (req, res) => {
  res.send(checklists)
})
app.get('/answers', (req, res) => {
  res.send(answers)
})
app.get('/all-data', (req, res) => {
  res.send([checklists, answers, questions, elevators, serviceCompanies])
})

app.get('/questions', (req, res) => {
  res.send(questions)
})

app.listen(1337, (console.log('Server is running on port 1337')));