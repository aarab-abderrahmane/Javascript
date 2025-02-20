function addContact(){
    let name= document.getElementById('nom').value ;
    let email = document.getElementById('email').value ; 
    let phone = document.getElementById('telephone').value ; 
    let image = document.getElementById('choose-image');

    if (!name || !email || !phone){
        window.alert('Please fill in all fields.');
        return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(image.files[0]);

    reader.onload = function() {
        let image =reader.result;
        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push({name,email,phone,image});

        console.table(contacts)
    
        localStorage.setItem('contacts' , JSON.stringify(contacts));
    
        document.getElementById('nom').value="";
        document.getElementById('email').value="";
        document.getElementById('telephone').value="";
    
        loadContacts();
    };

   
};


function loadContacts() {
    document.getElementById('contactList').innerHTML= "";
    let contacts = JSON.parse(localStorage.getItem('contacts')) || []; 

    contacts.forEach((variable,index) => {
        

        let contactDiv = document.createElement('div');
        contactDiv.className= "contactDiv";
        contactDiv.innerHTML = `
            <img  src="${variable.image}" alt=""image" width="100"/>
            <p><b>Name : </b>${variable.name}</p> 
            <p><strong>Email:</strong> ${variable.email}</p>
            <p><strong>Phone:</strong> ${variable.phone}</p>
            <button  id="btn-edit" onclick="editContact(${index})">Edit</button>
            <button id="btn-delete" onclick="deleteContact(${index})">Delete</button>
        `;

        // document.getElementById('contactList').style.display="block";
        document.getElementById('contactList').appendChild(contactDiv);
    });

    if (contacts.length > 0){
        document.getElementById('contactList').style.display="block";
    }else {
        document.getElementById('contactList').style.display="none";
    }
}


function deleteContact(index) {
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts.splice(index,1);
    localStorage.setItem('contacts',JSON.stringify(contacts));
    loadContacts()
}


function editContact(index){
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    let contact = contacts[index]

    document.getElementById('nom').value =contact.name;
    document.getElementById('email').value = contact.email;
    document.getElementById('telephone').value = contact.phone;
    document.getElementById('choose-image').value=contact.image;

    let addButton = document.getElementById('addContact');
    addButton.textContent = "Save Changes";
    addButton.onclick = function() {
        saveEditedContact(index);
    };
}


function saveEditedContact(index){
    let name = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('telephone').value;
    let image = document.getElementById('choose-image');


    if (!name || !email || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    let contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts[index] = { name, email, phone ,image};

    localStorage.setItem('contacts',JSON.stringify(contacts))

    loadContacts();

    document.getElementById('nom').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telephone').value = "";

    let addButton = document.getElementById('addContact');
    addButton.textContent = "Add Contact";
    addButton.onclick = addContact;

}

window.onload =loadContacts