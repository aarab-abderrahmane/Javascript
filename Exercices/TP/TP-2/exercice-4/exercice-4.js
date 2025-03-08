function vérifier(){
    date = new Date(document.getElementById('date').value);console.log(date);

    if (date.getDay() === 0 || date.getDay() === 6){
        document.getElementById('resultat').textContent="Oui c'est un week-end!"
    }else {
        document.getElementById('resultat').textContent="Not yet arrived."
    }
}