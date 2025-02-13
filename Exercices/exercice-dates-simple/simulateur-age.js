function CalculerAge(){
    let date = document.getElementById('date').value ; 
    if (!date){
        alert('Veuillez entrer votre date de naissance !');
        return ; 
    }

    let birthDate= new Date(date)
    let today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth() ;
    let ageDays = today.getDate() - birthDate.getDate();


    console.log(birthDate)
    console.log(today)

    console.log(today.getFullYear())
    console.log(birthDate.getFullYear())
    console.log(today.getDate())
    console.log(birthDate.getDate())

    console.log(ageMonths)

    console.log(ageDays)

    if (ageMonths < 0){
        ageYears--;
        ageMonths +=12;
    }

    if (ageDays < 0) {
        ageMonths--;
        let prevMounth = new Date(today.getFullYear() , today.getMonth() ,0)
        console.log(prevMounth)
        ageDays += prevMounth.getDate();
        console.log(prevMounth.getDate())
        console.log(ageDays)
    }

    document.getElementById('resultat').style.display = 'block'
    
    if (ageYears >= 0) {
        document.getElementById('resultat').innerHTML = `Vous avez <strong>${ageYears}</strong> ans , <strong>${ageMonths +1}</strong> mois , <strong>${ageDays}</strong> jours`
        
    }

    else {
        document.getElementById('resultat').innerHTML = `<b>Error</b>`
        
    }
   
}