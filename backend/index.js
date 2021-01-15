const express = require('express');
const cors = require('cors');
const { contact, serviceCompany, Order } = require('./db/dummyData')
console.log(serviceCompany)
console.log(Order)

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send(Order)
})

app.listen(1337, (console.log('Server is running on port 1337')));