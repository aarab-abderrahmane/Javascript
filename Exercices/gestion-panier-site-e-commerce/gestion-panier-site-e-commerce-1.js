let id=0
let allProduct = []


function addProduct(){
    const name = document.getElementById('product_name').value;
    let quantity = document.getElementById('product_quantity').value;
    let prix = document.getElementById('product_prix').value;


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

    quantity = parseInt(quantity);
    prix = parseFloat(prix);

    id++;
    document.getElementById('product_id').value=id;
    allProduct.push({id,name,quantity,prix})

    updateTable()
}


function updateTable(){
    let tablebody =document.getElementById('allproducts');
    tablebody.innerHTML ="";


    for (let i=0;i<allProduct.length;i++){
        product = allProduct[i]

        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="checkbox" value="${product.id}" class="checkboxx" ></td>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.prix}</td>
            <td><button onclick="deleteProduct(${product.id})" class="btn-delete" >Delete</button></td>
        `

        tablebody.appendChild(tr)
    }   
    

}

function deleteProduct(idPr){
    allProduct = allProduct.filter(product => product.id !== idPr)
    updateTable()

}

function delete_selected(){
    const select_all = document.getElementById('select_all');
    if (select_all.checked){

        allProduct = []

        updateTable()

    }else{

        document.querySelectorAll('.checkboxx').forEach((checkbox)=>{

            if (checkbox.checked){
                allProduct = allProduct.filter(product => product.id != checkbox.value)
            }
        })

        updateTable()
    }

}


const select_all = document.getElementById('select_all');

select_all.addEventListener('change',()=>{
    document.querySelectorAll('.checkboxx').forEach((checkbox)=>{
        checkbox.checked = select_all.checked
    })
})