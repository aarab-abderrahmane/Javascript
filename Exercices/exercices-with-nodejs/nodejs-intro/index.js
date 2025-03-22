const express =  require("express")
const app = express()

app.use(express.json())


app.get('/getmethod',(req,res)=>{

    res.send('this is get method.')
})

app.get('/getsumofnumbers/:num1/:num2',(req,res)=>{  

    // res.send(req.params) // path parameters
    Number1 = req.params.num1;
    Number2 = req.params.num2;

    if (isNaN(Number1) || isNaN(Number2)){

        res.send('please entre the correct number')
    }else{
         res.send(`the sum of numbers  ${Number1} and ${Number2}  are : ${parseFloat(Number1)+parseFloat(Number2)} `)
    }


})

app.get('/getlogin',(req,res)=>{

    res.send(req.body) // body parameters
})

app.get('/getname',(req,res)=>{  //http://localhost:3000/getname?name=abdulrahman

    res.send(req.query) // query parameters
})


app.get('/getjsontext',(req,res)=>{

    const language = "Arabic";
    name = req.body.name ;
    age = req.query.age ; 

    if (!name || !age || isNaN(age)){

        res.send('<h1>Error,try again!</h1>')

    }else{

        res.json({
            name,
            age,
            language
        })
    }

})

app.get('/gethtmlfile',(req,res)=>{

    // res.send(`this is html file path : ${__dirname + '/views-2/page.html'}`) 

    res.sendFile(__dirname + '/views-2/page.html') // send file html+css
})


app.get('/gethtmljsfile',(req,res)=>{

    // ejs : allows you use variables inside html file
    // ejs : use by default 'views folder' you must creat views folder name and add inside it html or js file

    const numbers ="12345"
    res.render('page.ejs',{
        numbers : numbers
    }) // send file html+css
})



app.put('/putmethod',(req,res)=>{
    
    res.send('this is put method.')
})


app.listen('3000', ()=>{
    
    console.log("I am listening in port 3000");
})