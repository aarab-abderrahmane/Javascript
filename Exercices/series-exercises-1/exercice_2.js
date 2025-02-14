let compteur = 1 ; 
function addParagraphe(){
    let paragraphe = document.createElement('p');
    paragraphe.textContent="Paragraphe numero "+ compteur;
    paragraphe.onmouseover = function() {
        this.style.textDecoration = "underline";
        paragraphe.style.cursor = "pointer";
        paragraphe.style.fontWeight="bold"

    };
    paragraphe.onmouseout = function() {
        this.style.textDecoration = "none";
        paragraphe.style.fontWeight="normal"
    }

    paragraphe.addEventListener("click", function() {
        this.remove();
    });
    document.getElementById('paragraphes').appendChild(paragraphe);
    compteur++ ; 
}