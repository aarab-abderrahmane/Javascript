function sendMessage(){

    const message = document.getElementById('my_message').value;

    fetch('http://localhost:3000/chat',{
        method: 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body : JSON.stringify({message:message})
    })

    .then(response =>{

        if (!response.ok){
            throw new Error('Network response was not ok')
        }
        return response.json();
    })
    .then(data => {

        const container = document.getElementById('chat');
        container.innerHTML="";
        data.forEach(message => {
            const div = document.createElement('div');
            div.classList.add('msg');
            div.innerHTML = message;
            container.appendChild(div);
        });
    })

    .catch(error => console.error('Error:',error))
}