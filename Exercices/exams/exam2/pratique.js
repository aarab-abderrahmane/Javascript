document.getElementById('submit').addEventListener('click',function(event){
    event.preventDefault()

    validerForm()
    Display()
    

})

window.onload = function(){Display();addEvent()};


function validerForm() {
    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const age = document.getElementById("age").value.trim();


    const sexe =  document.querySelector('input[type="radio"]:checked')

    const disciplines = [
        document.getElementById("marathon"),
        document.getElementById("natation"),
        document.getElementById("sprint"),
        document.getElementById("saut"),
    ];

    // Check for empty fields
    if (!nom || !prenom || !age || !sexe) {
        alert("All fields must be filled!");
        return false;
    }

    // Validate name and username (letters only)
    const alphaRegex = /^[A-Za-z]+$/;
    if (!alphaRegex.test(nom)) {
        alert("Name must contain only letters.");
        return false;
    }

    if (!alphaRegex.test(prenom)) {
        alert("Surname must contain only letters.");
        return false;
    }

    // Check if at least one discipline is selected
    const atLeastOneDiscipline = disciplines.some(d => d.checked);
    if (!atLeastOneDiscipline) {
        alert("You must select at least one discipline.");
        return false;
    }



    // All good

    const chooseDiscipline = disciplines.filter(el=>el.checked)


    let data = JSON.parse(localStorage.getItem('data') || '[]');
    data.push({
        'nom':nom,
        'prenom':prenom,
        "age":age,
        "sexe":sexe.value,
        "pays":document.getElementById('pays').value,
        "disciplines": chooseDiscipline.map(el=>el.id)

    })

    localStorage.setItem('data',JSON.stringify(data))





    return true;

}


function Display(){
    let data = JSON.parse(localStorage.getItem('data') || '[]');
    if (data.length === 0){
        const div = document.createElement('div');
        div.classList.add('alert');
        div.innerHTML=`<h1  style="color:white">No data found!</h1>`;
        document.body.appendChild(div);
    }
    else{
        const alert = document.querySelector('.alert');
        alert ? alert.style.display="none" : "";

        document.getElementById('table').style.display="block";
        const table_result = document.getElementById('result');
        table_result.innerHTML="";
        data.forEach(dic=>{
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td >${dic['nom']}</td>
                <td>${dic['prenom']}</td>
                <td>${dic['age']}</td>
                <td>${dic['sexe']}</td>
                <td>${dic['pays']}</td>
                <td >${Array.isArray(dic['disciplines']) ? dic['disciplines'].join(' ,') : dic['disciplines']}</td>
            `;

            table_result.appendChild(tr);
        })
    }
}


//4 

document.addEventListener('keydown',function(event){

    if(event.code==='Space' || event.key=== " "){
        event.preventDefault();

        window.location.href="https://www.google.com"
    }
})



function addEvent() {
    let index = 0;
    const all_rows = [...document.querySelectorAll('tr')];

    all_rows.forEach(function (row,index) {
        index+=1;
        if (index===1) return;

        index%2 !== 0 ? row.style.backgroundColor=" rgba(144, 238, 144, 0.108)" : "";

        row.addEventListener('click', function (e) {


        document.querySelectorAll('.action-row').forEach(el=>el.remove())
        document.querySelectorAll('tr').forEach(td=>td.style.opacity="1")

        const tds = row.querySelectorAll('td');
        tds.forEach(td=>td.style.borderBottom="none")
        row.style.opacity  ="0.7"

        const newRow = document.createElement('tr');
        newRow.style.opacity="0.7"
        newRow.style.backgroundColor = getComputedStyle(row).backgroundColor;
        // newRow.style.backgroundColor = index%2 !== 0 ? " rgba(144, 238, 144, 0.108)"  :'transparent'


        newRow.classList.add('action-row');

        const new_td = document.createElement('td');
        new_td.colSpan = tds.length;
        new_td.innerHTML = `
            <div id="list_options">
            <button id="supprimer">Supprimer</button>
            <button id="modifier">Modifier</button>
            </div>`;
        newRow.appendChild(new_td);

        row.parentNode.insertBefore(newRow, row.nextSibling);
        });

        
        
        
    });
    }
