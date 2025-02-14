let compteur=1 ; 
function addParagraphe() {
    let paragraphe = document.createElement('p');
    paragraphe.textContent = "Paragraphe numero "+ compteur;
    document.getElementById('paragraphes').appendChild(paragraphe);
    compteur++ ; 
}