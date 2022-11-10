const express = require('express');
const app = express();


app.get('',(req,res)=>{
       res.render('home.ejs');
});

app.get('/login',(req,res)=>{
    res.render('login.ejs');
});

app.get('/table',(req,res)=>{
    res.render('table.ejs',{companyName:"Newton School"});
});


app.listen(8080,()=>{
    console.log("server is running");
})