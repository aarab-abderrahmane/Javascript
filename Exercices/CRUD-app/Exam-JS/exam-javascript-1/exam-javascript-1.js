let livres = [
    { isbn: "56789", titre: "Programmation Javascript", prix: 250, image: "EloquentJavaScriptAModernIntroductiontoProgramming_3rdEditionbyMarijnHaverbeke_z-lib.png" },
    { isbn: "12345", titre: "Langage C", prix: 150, image: "71wvDBsPRSL._AC_UF1000,1000_QL80_.png" }
];

let panier = [];

function charger(){
    let select  = document.getElementById('livres');
    select.innerHTML="";
    livres.forEach((livre,index) => {
        let option = document.createElement('option');
        option.value= index;
        option.textContent = livre.titre;
        select.appendChild(option);
    });

    afficher()

}

function afficher(){
    let index = document.getElementById('livres').value;
    let livre = livres[index];
    
    document.getElementById('titre').textContent = "Titre : "+livre.titre;
    document.getElementById('isbn').textContent="ISBN : "+ livre.isbn;
    document.getElementById('prix').textContent="Prix : "+ livre.prix;
    document.getElementById('image').src = livre.image;
}

function ajouter(){
    let index = document.getElementById('livres').value;
    let livre  = livres[index];

    if (panier.length === 0){
        document.getElementById('checkout').style.display="block";
    };


    panier.push(livre);
    mettreAjourPanier();
}


function mettreAjourPanier(){
    let tobody = document.getElementById('panier');
    
    tobody.innerHTML = "";
    let total = 0;

    panier.forEach ( (livre , index)  => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" class="checkLivre" data-index="${index}"></td>
            <td>${livre.titre}</td>
            <td>${livre.prix}</td>
            `;
        tobody.appendChild(row);
        total += livre.prix;
    });

    document.getElementById('total').textContent = total;
}

function retirer(){
    let checkboxes = document.querySelectorAll('.checkLivre:checked');

    if (!checkboxes ||  checkboxes.length === 0){
        alert('Selectionnez au moins un livre a retier!');
        return;
    }

    checkboxes.forEach(checkbox_index => {
        let index = checkbox_index.dataset.index;
        panier.splice(index,1);
    });

    // indicesASupprimer.sort((a,b) => b-a ).forEach(index => {
    //     panier.splice(index,1);
    // })  

    mettreAjourPanier();
}