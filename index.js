const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

require(`${__dirname}/routes/dialogFLowRoutes`)(app);



app.listen(PORT, () => {
  console.log('app is running');
});