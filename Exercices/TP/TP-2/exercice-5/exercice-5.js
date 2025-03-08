function chiffrerCesar(){
    let textchiffre = "";
    const text = document.getElementById('entry').value;
    const decalage = document.getElementById('decalage').value;


    for (let i=0 ; i < text.length ; i++){

        let code = text.charCodeAt(i);

        if (code >=97 && code <= 122){ // if the letter is lowercase (a-z)
            code = ((code-97 + decalage) % 26)+97; // 26 number total of all letters

        }else if (code >=65 && code <=90 ){ // if the letter is uppercase (A-Z)
            code = ((code - 65 + decalage)% 26) + 65; // -65 get index of letter
        }

        textchiffre += String.fromCharCode(code);
    }

    document.getElementById('resultat').textContent=textchiffre
}