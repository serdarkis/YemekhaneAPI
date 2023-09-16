const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // PORT ortam değişkenini kullan

const indexRouter = require('./routes/index.js');

// Ortak ayarlar
app.use(express.json());

app.use('/', indexRouter); // Rotaları uygulamaya ekle

app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor.`);
});