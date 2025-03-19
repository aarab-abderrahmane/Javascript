let id=0;
let allProduct = [];
const id_product = document.getElementById('product_id');
const button_add = document.getElementById('btn-add');
const prod_name = document.getElementById('product_name');
const prod_quantity = document.getElementById('product_quantity');
const prod_prix = document.getElementById('product_prix');



function addProduct(){
    const name = document.getElementById('product_name').value;
    let quantity = document.getElementById('product_quantity').value;
    let prix = document.getElementById('product_prix').value;
    id++;


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

    
    allProduct.push({id,name,quantity,prix})

    document.getElementById('product_id').value=id+1;
    updateTable()
}


function updateTable(){
    let tablebody =document.getElementById('allproducts');
    tablebody.innerHTML ="";

    id=0;
    allProduct.forEach((prod)=>{
        id++
        prod.id=id;
    })

    id=0;

    for (let i=0;i<allProduct.length;i++){
        product = allProduct[i]

        id++

        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="checkbox" value="${id}" class="checkboxx" ></td>
            <td>${id}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.prix}</td>
            <td>
            <button onclick="deleteProduct(${product.id})" class="btn-delete" >Delete</button>
            <button onclick="editProduct(${product.id})" class="btn-edit" >Edit</button>
            </td>
        `

        tablebody.appendChild(tr)
    }   
    

}

function deleteProduct(idPr){
    allProduct = allProduct.filter(product => product.id !== idPr);
    id=allProduct.length;
    id_product.value=id+1;
    updateTable()

}

function delete_selected(){


    document.querySelectorAll('.checkboxx').forEach((checkbox)=>{
    
        if (checkbox.checked){
            allProduct = allProduct.filter(product => product.id !== parseInt(checkbox.value))
            console.log(allProduct)
        }
    })

    id=allProduct.length;
    id_product.value=id+1;

    updateTable()


}



function editProduct(idPro){

    allProduct.forEach((prod,index)=>{
        if (prod.id===idPro){
            id_product.value=idPro;
            prod_name.value=prod.name;
            prod_quantity.value=prod.quantity;
            prod_prix.value=prod.prix;
            document.querySelectorAll('.btn-save').forEach(btn=>{
                btn.style.display="none";
            })
            button_add.style.display="none";


            const button_save = document.createElement('button');
            button_save.classList.add("btn-save");
            button_save.innerText="SAVE";
            
            button_save.style.display="block";
            button_save.addEventListener('click',()=>saveEdits(index));
            document.querySelector('.container').appendChild(button_save);

        }
    })
}



function saveEdits(index){

    const new_name = prod_name.value;
    const new_quantity = prod_quantity.value;
    const new_prix = prod_prix.value;

    
    let current_prod = allProduct[index];

    current_prod.name = new_name;
    current_prod.quantity = new_quantity;
    current_prod.prix = new_prix;

    prod_name.value="";
    prod_prix.value="";
    prod_quantity.value="";
    id_product.value=id;

    document.querySelector('.btn-save').style.display="none";
    button_add.style.display="block";
    updateTable();
}


const select_all = document.getElementById('select_all');

select_all.addEventListener('change',()=>{
    document.querySelectorAll('.checkboxx').forEach((checkbox)=>{
        checkbox.checked = select_all.checked
    });
})


