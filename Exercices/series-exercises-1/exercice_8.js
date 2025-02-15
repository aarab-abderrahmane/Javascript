number = 1 ; 

const colors = ['black','red','blue','purple','orange'];
let currentColorIndex = 0 ;

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
       currentColorIndex = Math.floor(Math.random() * colors.length);
       paragraphe.style.color = colors[currentColorIndex];
    };


}

function deleteAllParagraphs(){
    document.getElementById('paragraphes').innerHTML="";
    number = 0;
    
}