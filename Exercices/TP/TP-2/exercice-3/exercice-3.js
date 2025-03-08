function calculer(){
    const date_1  = new Date(document.getElementById('date-1').value);
    const date_2 = new Date(document.getElementById('date-2').value);

    let date_1_j = date_1.getDate()
    let date_2_j = date_2.getDate()

    if (date_2_j - date_1_j < 0){
        document.getElementById('resultat').innerHTML = `<b style="background-color:red">the second date must be greater than the first.</b>`;
        return ;
    }

    let timeDiff = date_2 - date_1
    days = timeDiff / (1000*60*60*24)
    // document.getElementById('resultat').textContent = date_2_j - date_1_j
    document.getElementById('resultat').textContent = days
}  