

   


    const btnCalculer = document.getElementById('calculer');
    const totlaInput = document.getElementById('total');
    const validForm = document.getElementById('validForm');
    const totalInput = document.getElementById('total');

    let total_réservation = 0;

    validForm.addEventListener('click',function(e){
            e.preventDefault();

            console.log(valideFormFun())
    })
    btnCalculer.addEventListener('click',function(e){
        e.preventDefault();

        valideFormFun()
    })
    
    function valideFormFun(){
        let nom = document.getElementById('nom').value;
        let ville = document.getElementById('ville').value;
        let class1 = document.getElementById('classe1').checked;
        let class2 = document.getElementById('classe2').checked;
        let especes = document.getElementById('especes').checked;
        let carteBanc = document.getElementById('carteBanc').checked; 

        let nbrPersonnes = document.getElementById('nbrPersonnes').value;
        let numBanc = document.getElementById('numBanc').value;
        let especesInput = document.getElementById('especesInput').value ; 

        const  Inputs = [nom,ville,nbrPersonnes]

        let isValid = true;
        for (let i of Inputs){

            // console.log(i)
            if (typeof(i) !=="boolean" && i.trim()==="" ){
                isValid=false;
            }
        }

        if(!isNaN(nbrPersonnes) || !Number.isInteger(nbrPersonnes) ||  parseInt(nbrPersonnes)<=0 ){
                isValid=false
        }

        if (!class1 && !class2){
            isValid=false;
        }

        if(!carteBanc && !especes){
            isValid=false;

        }else if(carteBanc && numBanc.trim()===""){
            isValid=false;

        }else if(especes && especesInput.trim()===""){
            isValid = false;
        }

        const réservation = {"rabat":50,"kenitra":90,"fés":120,"oujda":180}

        total_réservation = réservation[ville];

        totalInput.value = total_réservation;
        

        return isValid
    }




