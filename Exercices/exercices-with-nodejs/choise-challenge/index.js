const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors())
app.use(express.json())


const questions = [
    {index:0,question:'what is the name of the owner of this project?',choices:['abdulrahman','ayoub','ahmed']},
    {index:1,question:'what is the name of the owner of this project?',choices:['abdulrahman','ayoub','ahmed']},
    {index:2,question:'what is the name of the owner of this project?',choices:['abdulrahman','ayoub','ahmed']},
    {index:3,question:'what is the name of the owner of this project?',choices:['abdulrahman','ayoub','ahmed']},
]

const answers = [
    {index:0,answer:0},
    {index:1,answer:3},
    {index:2,answer:0},
    {index:3,answer:2},
]

app.get('/challenge',(req,res)=>{

    res.json(questions)
})

app.post('/verification',(req,res)=>{

    const client_answer = req.body;

    const correctAnswer = answers.find(ans => ans.index == client_answer.index);
    console.log(correctAnswer)
    console.log(client_answer.answer)

    const iscorrect = parseInt(client_answer.answer) === correctAnswer.answer;

    
    return res.json({message:iscorrect})
        
    
})


app.listen('3000',()=>{
    console.log('i am listening in port 3000')
})