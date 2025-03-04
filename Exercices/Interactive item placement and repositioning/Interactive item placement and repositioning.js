let selectedItem = null

function selectItem(item) {
    document.querySelectorAll('.element').forEach(el => {
        el.classList.remove('selected');
        el.style.backgroundColor="white"
    })

    item.classList.add("selected");
    item.style.backgroundColor="green";
    selectedItem = item
}

function placeItem(val){

    console.log(val , val.innerHTML)
    // if (!selectedItem) return ;

    if (val.innerHTML.trim() === ""){
        val.innerHTML  = selectedItem.innerHTML;
        val.style.width="auto";
        selectedItem.remove();
        val.style.border="none";
        selectedItem = null;

    }else {
        let move_back = document.createElement('div');
        move_back.innerHTML = `<div class="element" onclick="selectItem(this)">${val.innerHTML}</div>`
        document.querySelector('.choose').appendChild(move_back);
        val.textContent="";
        val.style.width="20px"
    }
}
