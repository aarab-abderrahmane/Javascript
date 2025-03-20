const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())


all_messages=[]

app.get('/chat',(req,res)=>{
    
    res.json(all_messages)
})

app.post('/chat',(req,res)=>{
    const message = req.body.message;
    all_messages.push(message);
    res.json(all_messages);
})


app.listen(3000,()=>{
    console.log('server is working!')
})
