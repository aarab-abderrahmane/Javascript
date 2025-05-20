const  checks = {};
const multiSelect = document.getElementById('multiSelect');
let selectedOptions = ''
let nbr_click={a:0,b:0,c:0};


function valideForm(){  


    const textInput = document.getElementById('textInput').value;
    const passwordInput = document.getElementById('passwordInput').value;
    const numberInput = document.getElementById('numberInput').value;
    const dateInput = document.getElementById('dateInput').value;
    const urlInput = document.getElementById('urlInput').value;
    const pdfInput = document.getElementById('pdfInput');
    const imageInput = document.getElementById('imageInput');
    const singleSelect = document.getElementById('singleSelect');
    const textareaInput = document.getElementById('textareaInput');

    //radio buttons 
   
    const radioBtns = [...document.querySelectorAll('input[type="radio"]:checked')]


    //checkboxs

    const checkboxs = [...document.querySelectorAll("input[type='checkbox']:checked")]

    checks['textInput'] = (/^[a-zA-Z]{3,}$/).test(textInput) ? "ok" : "error" ; 
    checks['passwordInput'] = (/^[a-zA-Z]{4,}[0-9]{3,}[@\.]$/).test(passwordInput) ? "ok" : "error" ; 
    checks['numberInput'] = numberInput > 1 ? "ok" : "error" ; 
    checks['dateInput'] = new Date(dateInput) < new Date() ? "ok" : "error";
    checks['urlInput'] = (/^(https?:\/\/)(www\.)?[a-zA-Z0-9]{3,}\.[a-z]{2,}$/).test(urlInput) ? "ok" : "error";
            //     ^ : Start of the string.
            // (https?:\/\/) : Matches http:// or https:// (s? makes the s optional).
            // (www\.)? : Optionally matches www. (the ? makes it optional).
            // [a-zA-Z0-9-]+ : Matches one or more alphanumeric characters or hyphens for the domain name.
            // \. : Matches a literal dot (.) for the domain extension.
            // [a-zA-Z]{2,} : Matches the top-level domain (e.g., com, org) with two or more letters.
            // $ : End of the string.

    console.log(selectedOptions)

}

function displayRangleValue(){
    rangeVlaue.textContent = rangeInput.value;

}



const rangeInput = document.getElementById('rangeInput');
const rangeVlaue = document.getElementById('rangeValue');

displayRangleValue()

rangeInput.addEventListener('input',function(){
    displayRangleValue()
})

document.getElementById('sumbit-btn').addEventListener('click',(e)=>{
    e.preventDefault();

    valideForm();
})

multiSelect.addEventListener('click',function(){
    selectedOptions = Array.from(multiSelect.selectedOptions).map(option=>option.text);

})


for (let op of multiSelect.options) {
    op.addEventListener('click', function () {
        if (nbr_click[this.value] !== 0 ){
            this.selected = !this.selected
        }

        this.style.color = !this.selected ? 'black' : 'green';

        console.log(this.selected,this.style.color)

        nbr_click[this.value]+=1;

        console.log(this.selected,!this.selected)

        
    });
}

    


// rangeInput.addEventListener("input",(e)=>{
//     rangeVlaue.textContent = e.target.value;

// })// arrow function 



// rangeInput.addEventListener("input",function(){
//     rangeVlaue.textContent = this.value;

// })// regular function 