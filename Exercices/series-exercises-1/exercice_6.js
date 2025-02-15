let number = 0

function addParagraphe() {
    number++ ; 
    let container = document.getElementById('paragraphes');
    let new_paragraphe = document.createElement('p');
    new_paragraphe.style.textAlign="center";
    new_paragraphe.textContent = 'Nouveau paragraphe ajoute en premiere ( '+number+" )";
    change_width_1() ;
    container.appendChild(new_paragraphe);

    document.getElementById('number').textContent=number;

}




function deleteAllParagraphs(){
    change_width_2();
    document.getElementById('paragraphes').innerHTML="";
    number=0;
    document.getElementById('number').textContent=number;
    
}


function change_width_1(){
    document.getElementById('container-id').style.width="50vw";
    const buttons = document.querySelectorAll('.btn-add , .btn-delete');
    buttons.forEach(button => {
        button.style.width="50vw"
    })

    const number_para = document.querySelectorAll('.nbr-para');
    number_para.forEach(div => {
        div.style.width="45vw"
    })
}

function change_width_2() {
    document.getElementById('container-id').style.width="30vw";
    const buttons = document.querySelectorAll('.btn-add , .btn-delete');
    buttons.forEach(button => {
        button.style.width="30vw";
    })
}