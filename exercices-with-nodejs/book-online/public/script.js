window.onload = updateUser()

function getData(){
    fetch('http://localhost:3000/books',{
        method: 'Get',  // by default
    },  
    )
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText=JSON.stringify(data,null,2)
        })
        .catch(error => console.error('Error : ',error))
}
 

function sendData(){
    const namee =document.getElementById('name').value;
    fetch('http://localhost:3000/user',{
        method: 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({namee:namee})
    })
    .then(response => response.json())
    .then(data=> {
        document.getElementById('response').innerText=data.message;
    })
    .catch(error => console.log('Error : ',error))
}

function updateUser(){
    const namee=document.getElementById('name').value;
    const age = document.getElementById('age').value;

    fetch('http://localhost:3000/other',{
        method : 'PUT',
        headers : {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({namee:namee,age:age})
    }) 

    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent=`${data.message}:${JSON.stringify(data.user)}`
    })
    .catch(error => console.error('Error:',error));
}