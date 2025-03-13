async function addUser() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const age = document.getElementById("age").value.trim();
    const resultat = document.getElementById("resultat");

    if (!firstName || !lastName || !age) {
        alert("All fields are required!");
        return;
    }

    try {
        const response = await add_to(firstName, lastName, age);
        if (response.ok) {
            document.getElementById("firstName").value = '';
            document.getElementById("lastName").value = '';
            document.getElementById("age").value = '';

            displayUsers();
        } else {
            throw new Error("Failed to add user");
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

async function add_to(firstName, lastName, age) {
    const url = "http://localhost:3000/users"; // مسار API

    const userData = { firstName, lastName, age };

    return await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });
}

async function displayUsers() {
    try {
        const response = await fetch("http://localhost:3000/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users.");
        }

        const users = await response.json();
        const resultat = document.getElementById("resultat");

        resultat.innerHTML = "";

        users.forEach(user => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td><button onclick="deleteUser(${user.id})">delete</button></td>
            `;
            resultat.appendChild(tr);
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
}


async function deleteUser(userId){
    try {
        const response = await fetch(`http://localhost:3000/users/${userId}`,{
            method: "DELETE"
        })   ;

        if(!response.ok){
            throw new Error('Failed to delete user.')
        }

        displayUsers();

    }catch(error){
        console.log("Error : ",error);
    }

}


window.onload = displayUsers;
