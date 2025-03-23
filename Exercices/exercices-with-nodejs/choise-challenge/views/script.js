

document.addEventListener('DOMContentLoaded',async()=>{
    
    const questions = [];
    const container = document.getElementById('content');

    try{
        const response = await fetch('http://localhost:3000/challenge',{
            method:"GET",
            headers : {'content-Type' : 'application/json'}
        })
        
        const data = await response.json()
        questions.push(...data)


        console.log(questions)

        const question_1=questions[0]

        
        const div = document.createElement('div');
        div.classList.add('question');
        div.innerHTML=`
            <h1>${question_1.question}</h1>
            <select id="options">
                <option value="0">${question_1.choices[0]}</option>
                <option value="1">${question_1.choices[1]}</option>
                <option value="2">${question_1.choices[2]}</option>
            </select>
            <div class="buttons">
                <button onclick="moveto(${question_1.index+1})">Next</button>
                <button id="verification">Verification</button>
            </div>
        `
        container.appendChild(div)

        const verification_button = document.getElementById('verification');

        if (document.getElementById('options')){
            verification_button.addEventListener('click',()=>{
                verification(question_1.index,document.getElementById('options').value)
            })
        }

    } catch(error){
        console.error(error)
    }
    
})


function moveto(index){
    console.log(index)
}

function verification(index,answer){
    
    fetch('http://localhost:3000/verification',{
        method:'POST',
        headers : {'Content-Type':'application/json'},
        body: JSON.stringify({index,answer})

    }
    )

    .then(response=>response.json())
    .then(data=>{

        console.log(data.message)
        if (!data.message){

            document.querySelector('h1').style.color="red";
        }else{
            document.querySelector('h1').style.color="green";
        }
    })

    .catch(error => console.error(error))
}
