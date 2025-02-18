let items = JSON.parse(localStorage.getItem('items')) || [];



function saveAndRender(){
    localStorage.setItem('items',JSON.stringify(items));
    renderList();
}

function renderList(){
    const list = document.getElementById('itemList');
    list.innerHTML = "";
    items.forEach((item,index) => {
        list.innerHTML += `<li class="item_c">
        <span class="text-item">${item}</span>
        <div class='buttons'>
            <button class="btn-edit" onclick="editItem(${index})">Edit</button>
            <button class="btn-delete" onclick="deleteItem(${index})">Delete</button>
        </div>   
        </li>`
    })
}

function addItem() {
    const input = document.getElementById('itemInput');
    if (input.value.trim() !== "") {
        items.push(input.value);
        input.value="";
        saveAndRender()
    }
}

function editItem(index){
    const newValue = prompt('edit item : ',items[index]);
    if (newValue !== null){
        items[index] = newValue;
        saveAndRender()
    }
}

function deleteItem(index){
    items.splice(index,1);
    saveAndRender()
}

renderList()
