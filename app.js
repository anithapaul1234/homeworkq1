const Express=require('express');
var app=new Express();
app.set('view engine','ejs');

app.use(Express.static(__dirname+"/public"))
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/home',(req,res)=>{
    
    res.render('home');
});

app.get('/home/login',(req,res)=>{
    
    res.render('login');
});
app.get('/home/login/reg',(req,res)=>{
    
    res.render('reg');
});

app.listen(process.env.PORT || 3000,()=>
{
    console.log("Server running on http://localhost:3000");
});