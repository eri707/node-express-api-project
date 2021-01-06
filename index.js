// install express module
const express = require('express');
// instantiate express
const app = express();
// define server port
const port = 10;
// middleware requires to parse incoming json
app.use(express.json());
// get recipe and recipes
require('./getroutes')(app);
// add recipe
require('./postroutes')(app);
// update recipe
require('./putroutes')(app);
// delete recipe
require('./deleteroutes')(app);
// access server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
