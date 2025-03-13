async function addUser() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const age = document.getElementById("age").value.trim();
    const resultat = document.getElementById("resultat");

    // Validate the inputs
    if (!firstName || !lastName || !age) {
        resultat.textContent = "All fields are required!";
        resultat.style.color = "red";
        return;
    }

    try {
        const response = await add_to(firstName, lastName, age);
        if (response.ok) {
            const newUser = await response.json();
            let li = document.createElement('tr');
            li.innerHTML=`
                    <td>${newUser.firstName}</td>
                    <td>${newUser.lastName}</td>
                    <td>${newUser.age}<td>
            `
            // resultat.textContent = `User added: ${newUser.firstName} ${newUser.lastName} (Age: ${newUser.age})`;
            // resultat.style.color = "green";
            // Clear the inputs after successful addition
            document.getElementById("firstName").value = '';
            document.getElementById("lastName").value = '';
            document.getElementById("age").value = '';
            resultat.appendChild(li)
        } else {
            throw new Error("Failed to add user");
        }
    } catch (error) {
        resultat.textContent = `Error: ${error.message}`;
        resultat.style.color = "red";
    }
}

async function add_to(firstName, lastName, age) {
    const url = "http://localhost:3000/users"; // Replace with your API endpoint

    const userData = {
        firstName,
        lastName,
        age
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    displayUsers();
    return response; }


async function displayUsers(){
    const response = await fetch("http://localhost:3000/users",{
        method : 'Get'})
        
        .then(response => response.json())
        .then(data => {
            const newUser = JSON.stringify(data);
            
            let li = document.createElement('tr');
            li.innerHTML=`
                    <td>${newUser.firstName}</td>
                    <td>${newUser.lastName}</td>
                    <td>${newUser.age}<td>
            `
        })
        .catch(error => console.error('Error : ',error))
    
}