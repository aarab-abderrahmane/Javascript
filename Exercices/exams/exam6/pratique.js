
let datastring= [ 
{"nom": "Dupont", "prenom": "Jean", "telephone": "0123456789","dateNaissance": "1990-05-15", "adresse": "10 rue de la Paix","pays": "france","siteWeb": "http://www.jeandupont.fr"},
{"nom": "Garcia", "prenom": "Marie", "telephone": "0698765432","dateNaissance": "1985-12-01", "adresse": "25 avenue des Lilas","pays": "espagne","siteWeb": "http://www.mariegarcia.es"},
{"nom":"Smith", "prenom": "John", "telephone": "0711223344","dateNaissance": "2000-07-20","adresse": "5 rue du Château", "pays": "canada", "siteWeb": "http://www.johnsmith.ca"}
]

function chargerDonnees(data){

    const data_now = Array.isArray(data) && data.length>0 ? data : datastring;

    document.getElementById('rows').innerHTML="";

    data_now.forEach(data=>{
        const tr = document.createElement('tr');

        Object.keys(data).forEach(key=>{
            if(key==="dateNaissance") return ;
            const td = document.createElement('td')
            key==="siteWeb" ? td.classList.add('url') : ""

            td.innerHTML=data[key];
            tr.appendChild(td)
        })

        tr.innerHTML+=`<td><button id="supprimer" value="${data["telephone"]}">Supprimer</button></td>`

        document.getElementById('rows').appendChild(tr)

    })

    addEvent()

}

chargerDonnees()


function ValiderFormulaire(){

    const nom = document.getElementById('nom').value.trim()
    const tel = document.getElementById('téléphone').value.trim()
    const adr = document.getElementById('adr').value.trim()
    const prenom = document.getElementById('prenom').value.trim()
    const date = document.getElementById('date').value;
    const pays = document.getElementById('pays').value;
    const site = document.getElementById('site_web').value;

    let isAllvalid = true;

    pays ? '' : isAllvalid = false;

    (/^[a-zA-Z]+$/).test(nom)  ? "" : isAllvalid=false;

    tel.startsWith('0') && !isNaN(tel) && tel.length===10 ? "" : isAllvalid=false;

    // isNaN(10) => false 
    // isNaN('abs') => true

    adr.length >= 4 ? "" : isAllvalid=false;


    if(isAllvalid){
        ajouterData(nom,prenom,tel,date,adr,pays,site)
    }else{
        document.getElementById('alert').innerHTML='<p style="color:red">Error</p>';
    }

}


function ajouterData(nom,pre,tel,date,adr,pays,site){

    datastring.push({
        "nom":nom,
        "prenom":pre,
        "telephone":tel,
        "dateNaissance":date,
        "adresse":adr,
        "pays":pays,
        "siteWeb":site
    })

    chargerDonnees()

}


document.getElementById('submit').addEventListener('click',function(event){

    event.preventDefault()

    ValiderFormulaire()

})


document.getElementById('adr').addEventListener('input',function(){
    document.getElementById('nbr_mots').innerHTML=`${this.value.length}`;
})

document.body.addEventListener('dblclick',function(){
    this.style.backgroundColor="yellow"
})


function addEvent(){
    const all_tr = [...document.querySelectorAll('tr')]
    all_tr.forEach(tr=>tr.addEventListener('click',function(){

        this.style.cursor='pointer';

        const all_td = [...this.querySelectorAll('td')]
        const tel = all_td[2].textContent

        deleteformData(tel)



    }))

}


function deleteformData(tel){

    datastring = datastring.filter(data => data["telephone"] !== tel)

    chargerDonnees()


}


document.getElementById('filter').addEventListener('input',function(){

    const value_now = this.value.toLowerCase();

    const new_data = datastring.filter(con=>con.pays.toLowerCase().includes(value_now))

    chargerDonnees(new_data)

})


function  display(){

    document.getElementById('resultat').classList.toggle('display')

}