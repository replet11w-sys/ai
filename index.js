require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// نقاط النهاية الخاصة بالمراقبة لإبقاء التطبيق نشطاً
app.get('/', (req, res) => res.send('Status: OK'));
app.get('/health', (req, res) => res.status(200).send('OK'));

app.listen(port, () => {
    console.log(`[SERVER] Health check running on port ${port}`);
});

// تحميل وتشغيل البوت من الملف الثاني
require('./back.js');
