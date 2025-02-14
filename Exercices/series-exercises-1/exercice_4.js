let compteur = 1;

        function addParagraphe() {
            let paragraphe = document.createElement('p');
            paragraphe.textContent = "paragraphe numero " + compteur;

            paragraphe.style.textAlign="center"

            paragraphe.onmouseover = function() {
                paragraphe.style.cursor = 'pointer';
                paragraphe.style.textDecoration = "underline";
                paragraphe.style.fontWeight = "bold";
            };

            paragraphe.onmouseout = function(){
                paragraphe.style.textDecoration = "none";
                paragraphe.style.fontWeight = "normal";
            };

            paragraphe.addEventListener('click', function() {
                if (paragraphe.tagName === "P") {
                   
                    const h1 = document.createElement('h1');
                    h1.textContent = paragraphe.textContent;
                    h1.style.textAlign="center"
                    paragraphe.replaceWith(h1); 
                    ChangeButtonwidth();
                    paragraphe = h1; 
                } else if (paragraphe.tagName === "H1") {
                    const newp = document.createElement('p');
                    newp.textContent = paragraphe.textContent;
                    paragraphe.replaceWith(newp); 
                    ChangeButtonwidth(); // Replace h1 with p
                    paragraphe = newp; 
                }
            });

            document.getElementById('paragraphes').appendChild(paragraphe);
            compteur++;
        };

        function ChangeButtonwidth() {
            const buttons = document.querySelectorAll('.btn-add, .btn-delete');
            buttons.forEach(button => {
                button.style.width = "70vw";  // Change width of both buttons
            });
        }

        function deleteAllParagraphs() {
            document.getElementById('paragraphes').innerHTML = "";  // Clear all paragraphs
        }