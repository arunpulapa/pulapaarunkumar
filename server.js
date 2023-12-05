var express=require("express");
var app=express();
const path = require('path');

app.use(express.static(__dirname + '/dist/Arun'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/Arun/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
