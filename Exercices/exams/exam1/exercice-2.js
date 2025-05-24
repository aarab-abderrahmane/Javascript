var lesContinents = [
    { "code": "AF", "nom": "Afrique", "pays": ["Maroc", "Tunisie", "Egypte"] },
    { "code": "ER", "nom": "Europe", "pays": ["France", "Espagne", "Suisse"] },
    { "code": "AM", "nom": "Amérique", "pays": ["US", "Canada", "Mexique"] },
    { "code": "AS", "nom": "Asie", "pays": ["Japon", "Chine", "Malaisie"] },
    { "code": "Aus", "nom": "Australie", "pays": ["Australie", "Nouvelle-Guinée", "New Zealand"] }
];

document.getElementById('afficher').addEventListener('click',function(){

    lesContinents.forEach(reg=>{

            let ul = document.createElement('ul');
            ul.classList.add('list_Contients');

            reg.pays.forEach(pay=>{ul.innerHTML+=`<li>${pay}</li>`;console.log(pay)})
            document.getElementById('resultat').innerHTML += `
                <h3>${reg.nom}</h3>
            `;

            document.getElementById('resultat').appendChild(ul)
            

        })

})