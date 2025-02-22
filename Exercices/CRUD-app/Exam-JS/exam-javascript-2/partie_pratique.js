let panier  = [];

function Add_product(){
    let inputs = document.querySelectorAll('#inputs > input');
    let select_TVA = document.getElementById('select_TVA').value;
    let code_article = inputs[0].value;
    let libelle = inputs[1].value;
    let quantite = parseInt(inputs[2].value);
    let prix_HT = parseInt(inputs[3].value);
    
    let taux_TVA = parseInt(select_TVA)/100;

    console.log(code_article)
    console.log(libelle)
    console.log(quantite)
    console.log(prix_HT)

    if (!libelle || isNaN(quantite) || isNaN(prix_HT) || !code_article){
        alert('Veuillez remplir tous les champs correctement .');
        return  ;

    };

    let prix_TTC = quantite * prix_HT *(1+taux_TVA);

    // panier.push({code_article,libelle,quantite,prix_HT,taux_TVA,prix_TTC});
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({code_article,libelle,quantite,prix_HT,taux_TVA,prix_TTC});
    localStorage.setItem('products',JSON.stringify(products));

    updatePanier()
}

function updatePanier(){
    let tobody = document.getElementById('panier');
    tobody.innerHTML='';

    let products = JSON.parse(localStorage.getItem('products'))  || [];

    products.forEach((product,index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
                <td>${product.code_article}</td>
                <td>${product.libelle}</td>
                <td>${product.quantite}</td>
                <td>${product.prix_HT}</td>
                <td>${product.taux_TVA}</td>
                <td>${product.prix_TTC}</td>
                <td><button class="btn-delete" onclick="delete_row(${index})">Supprimer</button></td>
        `;

        tobody.appendChild(row);
        
    })
}