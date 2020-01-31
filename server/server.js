const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT||3000;
const dist_path = path.join(__dirname,'..','dist');
app.use(express.static(dist_path));

app.get('*',(req,res) => {
  res.sendFile(path.join(dist_path,'index.html'));
});

app.listen(port,() => {
  console.log('server is up on port',port);
});