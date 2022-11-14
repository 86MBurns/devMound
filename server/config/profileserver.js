const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
 
// default options
app.use(fileUpload());
 
app.get('/home',(req,res) => {
    res.sendFile(__dirname + "/index.html")
})
 
app.listen(3000)