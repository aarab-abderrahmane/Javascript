function calculer(){
    const montant =  document.getElementById('montant').value;
    const taux  = document.getElementById('taux').value;
    const durée = document.getElementById('durée').value;

    let T = (parseFloat(taux)/100)/12

    let mensualite = (parseFloat(montant) * T)/(1-((1+T)**(-durée*12)  )) // or Math.pow(1+T,-duree*12) 
    
    document.getElementById('mensualite').textContent=mensualite.toFixed(2) + " €"
}