const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDb = require('./config/dbConnection');
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDb();

const videoRoutes = require('./routes/videoRoutes');
app.use('/api/videos', videoRoutes);

app.listen(PORT, () => 
    console.log(`Server running on ${PORT}`));
