// src/app.ts

let express = require('express');
let bodyParser = require('body-parser');
let bookRoutes = require('./routes/bookRoutes');
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', bookRoutes);

export default app;
