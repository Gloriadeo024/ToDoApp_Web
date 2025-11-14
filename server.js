require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});

const PORT = process.env.PORT || 5000;


connectDB().then(() => {
    app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);
    });
});