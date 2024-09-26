// src/app.ts 

let express = require('express');
let bodyParser = require('body-parser');
let bookRoutes = require('./routes/bookRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/api', bookRoutes);

export default app;
