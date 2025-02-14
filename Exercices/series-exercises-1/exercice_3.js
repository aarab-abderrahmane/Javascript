let compteur = 1;

function addParagraphe() {
    let paragraphe = document.createElement('p');
    paragraphe.textContent="paragraphe numero "+ compteur;
    paragraphe.onmouseover = function() {
        paragraphe.style.cursor='pointer';
        paragraphe.style.textDecoration="underline";
        paragraphe.style.fontWeight="bold"
    }

    paragraphe.onmouseout = function(){
        paragraphe.style.textDecoration="none";
        paragraphe.style.fontWeight="normal"
    }

    paragraphe.addEventListener('click',function(){
            this.remove();
    });
    

    document.getElementById('paragraphes').appendChild(paragraphe);
    compteur++ ; 
}


function deleteAllParagraphs(){
      document.getElementById('paragraphes').innerHTML = ""
}