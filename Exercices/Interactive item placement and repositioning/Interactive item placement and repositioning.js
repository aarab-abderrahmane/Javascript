let selectedItem = null

function selectItem(item) {
    document.querySelectorAll('.element').forEach(el => {
        el.classList.remove('selected');
        el.style.backgroundColor="white"
    })

    item.classList.add("selected");
    item.style.backgroundColor="yellow";
    selectedItem = item
}

function placeItem(val){

    if (selectedItem){
        if (val.innerHTML.trim() === ""){
            val.innerHTML = selectedItem.innerHTML;
            val.style.width="auto";
            selectedItem.style.display = "none";
            selectedItem = null;
        }
    
    }else if (val.innerHTML.trim !==""){
        let elements = document.querySelectorAll('.element');
        for (let el of elements){
            if (el.style.display="none" && el.innerHTML=== val.innerHTML){
                el.style.display = "inline-block";
                break;
            }
        }

        val.innerHTML=""
        val.style.width="20px"
    }
}
