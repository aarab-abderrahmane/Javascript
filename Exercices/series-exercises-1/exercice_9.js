function addParagraphe(){
     const input = document.getElementById('itemInput');
     const text = input.value.trim();

     if (text==='') return ;

     const paragraphes = document.getElementById('paragraphes');
     const paragraphe = document.createElement('p');

     paragraphe.innerHTML = `
        ${text}
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
    `;

     paragraphes.appendChild(paragraphe);
     input.value="";

}