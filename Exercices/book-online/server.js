const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors())

let user = {namee:"John",age:30};

app.get('/books',function(req,res){
    res.json({message : "this is a Get request",data : {id:1,title:"abdulrahman"}})
});

app.post('/user',(req,res)=> {
    const namee= req.body.namee;
    res.json({message:`hello, ${namee}`});
    })

app.put('/other',(req,res)=>{
    user = {...user,...req.body};
    res.json({message : "User upsated",user})
})


app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')
})
