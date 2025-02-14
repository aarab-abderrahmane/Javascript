let compteur = 1;

function addParagraphe() {
    let paragraphe = document.createElement('p');
    paragraphe.textContent="paragraphe numero "+ compteur;
    paragraphe.onmouseover = function() {
        paragraphe.style.cursor='pointer';
        paragraphe.style.textDecoration="underline";
        paragraphe.style.fontWeight="bold"
    };

    paragraphe.onmouseout = function(){
        paragraphe.style.textDecoration="none";
        paragraphe.style.fontWeight="normal"
    };

    
    paragraphe.addEventListener('click',function(){

        if  (paragraphe.tagName== "P"){
            const h1 = document.createElement('h1');
            h1.textContent = paragraphe.textContent;
            
            h1.addEventListener('click',function(){
                const newp = document.createElement('p');
                newp.textContent = h1.textContent;

                newp;this.addEventListener('click',function(){
                    const newh = document.createElement('h1');
                    newh.textContent = newh.textContent;

                    newp.replaceWith(newh);
                    ChangeButtonwidth();

                });
                h1.replaceWith(newp);
                ChangeButtonwidth();
            });
            paragraphe.replaceWith(h1);
            ChangeButtonwidth();

            
        }
        

    });

    
    

    document.getElementById('paragraphes').appendChild(paragraphe);
    compteur++ ; 

};


function ChangeButtonwidth(){
    const buttons = document.querySelectorAll('.btn-add, .btn-delete');
            buttons.forEach(button => {
                button.style.width="70vw";
            })
}


function deleteAllParagraphs(){
      document.getElementById('paragraphes').innerHTML = ""
}