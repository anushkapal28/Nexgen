const express = require('express');
const dotenv = require('dotenv');
const authController = require('./controllers/Auth.js');
const { connect } = require('./config/database'); 
const contactController = require('./controllers/Contact');

require('dotenv').config();

const app = express();

app.use(express.json());

connect();

app.post('/api/v1/login', authController.login);
app.post('/api/v1/signup', authController.signUp);
app.post('/api/v1/contact', contactController.sendContactForm);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
