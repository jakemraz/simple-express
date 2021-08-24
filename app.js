const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  console.log('GET /');
  res.status(200).json({
    message: 'GET /',
  });
});

app.post('/', (req, res) => {
  console.log('POST /');
  res.status(200).json({
    message: 'POST /',
  });
});

app.all('/hello', (req, res) => {
  console.log(`${req.method} /hello`);
  res.status(200).json({
    message: `${req.method} /hello`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

exports.app = app;
