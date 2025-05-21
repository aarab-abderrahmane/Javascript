const  checks = {};
error_el = [...document.querySelectorAll('.error')]




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
    const rangeInput = document.getElementById('rangeInput').value;

    //radio buttons 
   
    const radioBtns = [...document.querySelectorAll('input[type="radio"]:checked')]


    //checkboxs

    const checkboxs = [...document.querySelectorAll("input[type='checkbox']:checked")]

    checks['textInput'] = (/^[a-zA-Z]{3,}$/).test(textInput) ? "ok" : "error" ; 
    checks['passwordInput'] = (/^[a-zA-Z]{4,}[0-9]{3,}[@\.]$/).test(passwordInput) ? "ok" : "error" ; 
    checks['numberInput'] = numberInput > 1 ? "ok" : "error" ; 
    checks['rangeInput'] = parseInt(rangeInput) == 0 ? "error" : "ok";
    checks['dateInput'] = new Date(dateInput) > new Date() ? "ok" : "error";
    checks['urlInput'] = (/^(https?:\/\/)(www\.)?[a-zA-Z0-9]{3,}\.[a-z]{2,}$/).test(urlInput) ? "ok" : "error";
            //     ^ : Start of the string.
            // (https?:\/\/) : Matches http:// or https:// (s? makes the s optional).
            // (www\.)? : Optionally matches www. (the ? makes it optional).
            // [a-zA-Z0-9-]+ : Matches one or more alphanumeric characters or hyphens for the domain name.
            // \. : Matches a literal dot (.) for the domain extension.
            // [a-zA-Z]{2,} : Matches the top-level domain (e.g., com, org) with two or more letters.
            // $ : End of the string.

    const pdf_file = pdfInput.files[0];

    if(!pdf_file || pdf_file.size > 5*1024*1024 || !['application/pdf'].includes(pdf_file.type)){

        !pdf_file ? "" : pdf_file.value='';
        checks['pdfInput']="error";

        

    }else{
        checks['pdfInput']="ok";
    }


    const img_file = imageInput.files[0];
    if(!img_file || img_file.size > 5*1024*1024 || !['image/png','image/jpeg'].includes(img_file.type)){

        !img_file ? "" : img_file.value='';
        checks['imageInput']="error";

        
    }else{
        checks['imageInput']="ok";
    }

    checks['singleSelect'] = singleSelect.value==="Select one" ? "error" : "ok";
    checks['multiSelect'] = multiSelect.value ==="" ? "error" : "ok";
    checks['textareaInput'] = textareaInput.value.trim()==="" ? "error" : "ok";
    

    checks['radioBtns'] = radioBtns.length==0 ? "error" : "ok" ;
    checks['checkboxs'] = checkboxs.length==0 ? "error" : "ok";

    console.log(error_el)
    console.log(Object.keys(checks))
    if(Object.keys(checks).length > 0){
            error_el.forEach((e,index)=>{
                e.textContent = checks[Object.keys(checks)[index]]
            })
    }

    const all_ok = error_el.filter(el => el.textContent.includes('ok'))
    all_ok.forEach(e=>{e.style.color="green"})
    const all_error = error_el.filter(el => el.textContent.includes('error'))
    all_error.forEach(e=>{e.style.color="red"})



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






// rangeInput.addEventListener("input",(e)=>{
//     rangeVlaue.textContent = e.target.value;

// })// arrow function 



// rangeInput.addEventListener("input",function(){
//     rangeVlaue.textContent = this.value;

// })// regular function 