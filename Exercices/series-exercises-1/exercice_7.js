number = 1 ; 



function addParagraphe(){
    number++;
    const container =  document.getElementById('paragraphes');
    let paragraphe = document.createElement('p');
    paragraphe.textContent="Paragraphe "+number;
    paragraphe.style.textAlign="center";
    paragraphe.style.fontSize="1.2rem";
    paragraphe.style.color="black"
    container.appendChild(paragraphe);

    paragraphe.onmouseover = function() {
        paragraphe.style.textDecoration="underline"; 
        paragraphe.style.cursor="pointer";
    };

    paragraphe.onmouseout = function() {
        paragraphe.style.textDecoration="none";
    };

    paragraphe.onclick  = function() {
        if (paragraphe.style.color === "black"){
            paragraphe.style.color = "green";
        } else {
            paragraphe.style.color= "black";
        }
    };


}

function deleteAllParagraphs(){
    document.getElementById('paragraphes').innerHTML="";
    
}