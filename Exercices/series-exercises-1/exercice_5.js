let number = 1

function addParagraphe() {
    let container = document.getElementById('paragraphes');
    let new_paragraphe = document.createElement('p');
    new_paragraphe.textContent = 'Nouveau paragraphe ajoute en premiere ( '+number+" )";
    number++ ; 

    change_width_1() 

    if (container.firstChild)  {
        container.insertBefore(new_paragraphe,container.firstChild);
    }else {
        container.appendChild(new_paragraphe);
    }
}


 
function deleteAllParagraphs(){
    change_width_2()
    document.getElementById('paragraphes').innerHTML=""
}


function change_width_1(){
    const buttons = document.querySelectorAll('.btn-add , .btn-delete');
    buttons.forEach(button => {
        button.style.width="50vw"
    })
}

function change_width_2() {
    const buttons = document.querySelectorAll('.btn-add , .btn-delete');
    buttons.forEach(button => {
        button.style.width="30vw";
    })
}