const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios')

const PORT = process.env.PORT || 8080;
const PUBLIC_PATH = path.join(__dirname, '../public');
const DIST_PATH = path.join(__dirname, '../dist');

app.use(express.json());
app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));

app.get('/dog', async(req, res, next) => {
  try {
    const { data: { message } } = await axios.get('https://dog.ceo/api/breeds/image/random')
    res.send(message)
  } catch (error) {
    console.log(error)
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
