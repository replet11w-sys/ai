require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Status: OK'));
app.get('/health', (req, res) => res.status(200).send('OK'));

app.listen(port, () => {
    console.log(`[SERVER] Health check running on port ${port}`);
});

// تحميل البوت
require('./back.js');
