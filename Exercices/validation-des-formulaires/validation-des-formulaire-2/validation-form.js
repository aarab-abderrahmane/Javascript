document.addEventListener('DOMContentLoaded',()=>{


    document.querySelectorAll('.error').forEach(span=>span.style.display='none');

    const nom = document.getElementById('nom');
    const email = document.getElementById('email');

    const sports_check = document.getElementById('sports-check');
    const musique_check = document.getElementById('musique-check');
    const lecture_check = document.getElementById('lecture-check');
    const hobbies = document.getElementById('hobbies');
    const message = document.getElementById('message');
    const contry = document.getElementById('contry');
    const file_image = document.getElementById('file');


    const soumettre_button = document.getElementById('btn-submit');

    //order
    gestion_error={
        "nom":"",
        "email":'',
        'gender':'',
        'interet':'',
        'hobbies':'',
        'message':'',
        'contry':'',
        'file':''}


    if (soumettre_button){
        soumettre_button.addEventListener('click',Soumettre)
    }

    function Soumettre(event){
        const gender = document.querySelector('input[name="gender"]:checked')
        

        Object.entries(gestion_error).forEach(([key,value])=>{
            gestion_error[key]="";
        })

        // console.log(condition.checked)

        !nom.value ? gestion_error['nom']=false : gestion_error['nom']=true;


        !email.value? gestion_error['email']=false : gestion_error['email']=true;


        !gender? gestion_error['gender']=false: gestion_error['gender']=true;

        if (sports_check.checked || lecture_check.checked || musique_check.checked){
            gestion_error['interet'] = true
        }else{
            gestion_error['interet'] = false
        }

        hobbies.value ==='Choose...' ? gestion_error['hobbies'] = false : gestion_error['hobbies']=true;

        !message.value ? gestion_error['message']=false : gestion_error['message']=true;

        contry.value==="Choose..." ? gestion_error['contry']=false: gestion_error['contry']=true;



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

        const isAlltrue= Object.values(gestion_error).every(value => value===true)


        const all_element=[
            nom,
            email,
            "gender",
            "interet",
            hobbies,
            message,
            contry,
            file_image]

        const all_errrs_classes = document.querySelectorAll('.error');

        if (isAlltrue){
            all_errrs_classes.forEach(el=>el.style.display="none")
            Object.keys(gestion_error).forEach((key,index)=> {

                if (key!=="gender" && key!=="interet"){
                    all_element[index].classList.remove('not-complete')
                }
            } )
            
            all_element.forEach(el=>el.classList.remove('not-complete'))
        }else{
            

            Object.keys(gestion_error).forEach((key,index)=>{

                console.log(index,key)
                console.log("_______________________")

                if(!gestion_error[key]===true && key!=="gender" && key!=="interet"){

                    all_element[index].classList.add('not-complete')
                        
                }else if(gestion_error[key]===true && key!=="gender" && key!=="interet"){
                    all_element[index].classList.remove('not-complete')
                }

                if(!gestion_error[key]===true){

                    all_errrs_classes[index].style.display="inline"

                }else{
                    all_errrs_classes[index].style.display="none";
                }
            })
        }
    }

})

