const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
  res.json({
    data: 'hello world'
  })
});

app.listen(PORT, () => {
  console.log('app is running');
});