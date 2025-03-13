let id=0

function addProduct(){
    const name = document.getElementById('product_name').value;
    const quantity = document.getElementById('product_quantity').value;
    const prix = document.getElementById('product_prix').value;


    if (!name || !quantity || !prix){
        alert('All fields must be completed.')
        return
    }

    if(quantity==0){
        alert('You must choose at least one.')
        document.getElementById('product_quantity').style.borderColor="red";
        return
    }

    document.getElementById('product_quantity').style.borderColor="black";

    if (isNaN(prix)){
        alert('Plase enter an correct number!')
    }

    quantity = parseInt(quantity)
    prix = parseFloat(quantity)
}

