document.addEventListener('DOMContentLoaded',()=>{


    document.querySelectorAll('.error').forEach(span=>span.style.display='none');

    const nom = document.getElementById('nom');
    const email = document.getElementById('email');
    const age = document.getElementById('age');
    const date = document.getElementById('date');


    const contry = document.getElementById('contry');
    const condition = document.getElementById('check');
    const file_image = document.getElementById('file');


    const soumettre_button = document.getElementById('btn-submit');

    gestion_error={"nom":"","email":'','age':'','date':'','gender':'','condition':'','file':'file'}


    if (soumettre_button){
        soumettre_button.addEventListener('click',Soumettre)
    }

    function Soumettre(event){
        const gender = document.querySelector('input[name="gender"]:checked')
        

        Object.entries(gestion_error).forEach(([key,value])=>{
            gestion_error[key]="";
        })

        console.log(condition.checked)

        !nom.value ? gestion_error['nom']=false : gestion_error['nom']=true;


        !email.value? gestion_error['email']=false : gestion_error['email']=true;

        !age.value? gestion_error['age']=false: gestion_error['age']=true;

        !date.value? gestion_error['date']=false: gestion_error['date']=true;

        !gender? gestion_error['gender']=false: gestion_error['gender']=true;

        !condition.checked? gestion_error['condition']=false: gestion_error['condition']=true;

        if (file_image.files[0]){

            const fileType = file_image.files[0].type;

            if (fileType.startsWith('image/')){
                gestion_error['file']=true
            }else{
                gestion_error['file']=false
            }

        }else{
            gestion_error['file']=false
        }

        console.log(gestion_error)

    }

})

