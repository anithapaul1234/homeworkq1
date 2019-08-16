const Express=require('express');
var app=new Express();
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/home',(req,res)=>{
    //res.send("hello welcome");
    res.render('home');
});

app.get('/home/login',(req,res)=>{
    //res.send("hello welcome");
    res.render('login');
});
app.get('/home/login/reg',(req,res)=>{
    //res.send("hello welcome");
    res.render('reg');
});

app.listen(3000,()=>
{
    console.log("Server running on http://localhost:3000");
});