function generer(){
    let longueur  = Math.floor(Math.random() * (20-15 + 1) +15)
    genererMotdepasse(longueur)
}

function genererMotdepasse(longueur){
    const cararcteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    console.log(cararcteres.length)
    let moddepasee = "";

    for (let i=0  ; i<longueur ; i++){
        let indexAleatoire = Math.floor(Math.random() * cararcteres.length)
        moddepasee+=cararcteres[indexAleatoire]
    }


    document.getElementById('resultat').textContent=moddepasee
}

document.getElementById('resultat').addEventListener('dblclick',() =>{
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('resultat'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range)
    document.execCommand('copy');
})


