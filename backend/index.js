const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const contentRoutes = require('./routes/articalRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/content', contentRoutes);
app.use('/user', userRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
