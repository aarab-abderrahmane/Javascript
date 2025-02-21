document.addEventListener('DOMContentLoaded',function(){
    loadContacts();

    document.querySelector('.close').addEventListener('click',function(){
        document.getElementById("editModal").style.display="none";
        document.querySelector('.container').style.filter="blur(0)";
    });

    document.getElementById('search').addEventListener('input',searchContacts);

});


function addContact(){
    let name= document.getElementById('nom').value ;
    let email = document.getElementById('email').value ; 
    let phone = document.getElementById('telephone').value ; 
    let image = document.getElementById('choose-image');

    if (!name || !email || !phone || !image.value){
        window.alert('Please fill in all fields.');
        return;
    }

    if (image.files[0].type !== "image/png" && image.files[0].type != "image/jpeg"){
        alert("only PNG and JPG images are allowed!");
        return;
    }

    if (image.files[0].size > 4*1024*1024){  /*convert to bytes*/
        alert("Image size must be less than 4MB!")
    }

    /* 
    🔹 1 KB (kilobyte) = 1024 bytes
    🔹 1 MB (megabyte) = 1024 KB
    🔹 1 MB = 1024 * 1024 bytes = 1,048,576 bytes
    */

    let reader = new FileReader();
    reader.readAsDataURL(image.files[0]);

    reader.onload = function() {
        let image =reader.result;
        console.log(reader.result)
        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

        contacts.push({name,email,phone,image});

        console.table(contacts)
    
        localStorage.setItem('contacts' , JSON.stringify(contacts));
    
        document.getElementById('nom').value="";
        document.getElementById('email').value="";
        document.getElementById('telephone').value="";
        document.getElementById('choose-image').value="";
    
        loadContacts();
    };

   
};

saveEdit

function loadContacts() {
    document.getElementById('contactList').innerHTML= "";
    let contacts = JSON.parse(localStorage.getItem('contacts')) || []; 

    contacts.forEach((variable,index) => {
        

        let contactDiv = document.createElement('div');
        contactDiv.className= "contactDiv";
        contactDiv.innerHTML = `
            <img  src="${variable.image}" alt=""image" width="100"/>
            <div class="info">
                <p><b>Name : </b>${variable.name}</p> 
                <p><strong>Email:</strong> ${variable.email}</p>
                <p><strong>Phone:</strong> ${variable.phone}</p>
            </div>

            <div class="buttons">
                <button  id="btn-edit" onclick="editContact(${index})">Edit</button>
                <button id="btn-delete" onclick="deleteContact(${index})">Delete</button>
            </div>
            

        `;

        // document.getElementById('contactList').style.display="block";
        document.getElementById('contactList').appendChild(contactDiv);
    });

    // if (contacts.length > 0){
    //     document.getElementById('contactList').style.display="block";
    // }else {
    //     document.getElementById('contactList').style.display="none";
    // }

    document.getElementById('contactList').style.display = contacts.length > 0 ? "block" : "none";
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

    document.querySelector('.container').style.filter = "blur(2px)";
    document.getElementById('editModal').style.display="block";

    document.getElementById('editName').value =contact.name;
    document.getElementById('editEmail').value = contact.email;
    document.getElementById('editPhone').value = contact.phone;

    document.getElementById('old-image').innerHTML=`
        <img src="${contact.image}" alt="old-image" class="old-image">
    `    ;   
    
    document.getElementById('editPhoto').value="";

    document.getElementById('saveEdit').onclick=function(){
        saveEditedContact(index);
    };

}


function saveEditedContact(index){
    let name = document.getElementById('editName').value;
    let email = document.getElementById('editEmail').value;
    let phone = document.getElementById('editPhone').value;
    let image = document.getElementById('editPhoto');


    if (!name && !email && !phone) {
        alert("Please fill in all fields.");
        return;
    }

    let contacts = JSON.parse(localStorage.getItem('contacts'));

    if (image.files.length > 0) {
        let reader = new FileReader();
        reader.readAsDataURL(image.files[0]);

        reader.onload=function(){
            contacts[index] = {name,email,phone,image:reader.result};
            localStorage.setItem('contacts',JSON.stringify(contacts));
            loadContacts();
            document.getElementById('editModal').style.display = "none" ;       };
            document.querySelector('.container').style.filter = "blur(0)";
    } else {
        contacts[index] = {name,email,phone,image: contacts[index].image};
        localStorage.setItem('contacts',JSON.stringify(contacts));
        loadContacts();
        document.getElementById("editModal").style.display="none";   }
        document.querySelector('.container').style.filter = "blur(0)";

}


function searchContacts(){
    let searchValue = document.getElementById('searc').value.toLowerCase();
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    let contactList = document.getElementById('contactList');

    contactList.innerHTML="";
}

window.onload =loadContacts