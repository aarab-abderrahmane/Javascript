document.addEventListener('DOMContentLoaded',()=>{

    let emailPettern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  //    (/.) only '.'   |   []+ at least one 
    let namePattern = /^[A-Z][a-z]{2,}$/;
    let passwordPattern = /^[A-Z]{3,}[a-z]{5,}$/;

    //start with /^ ... $/
    const nom = document.getElementById('nom');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const conf_password = document.getElementById('conf-password');

    const sports_check = document.getElementById('sports-check');
    const musique_check = document.getElementById('musique-check');
    const lecture_check = document.getElementById('lecture-check');
    const hobbies = document.getElementById('hobbies');
    const message = document.getElementById('message');
    const contry = document.getElementById('contry');
    const file_image = document.getElementById('file');

    const soumettre_button = document.getElementById('btn-submit');

    //order
    gestion_error={"nom":"","email":'','password':'','gender':'','interet':'','hobbies':'','message':'','contry':'','file':''}


    if (soumettre_button){
        soumettre_button.addEventListener('click',Soumettre)
    }

    function Soumettre(event){
        const gender = document.querySelector('input[name="gender"]:checked')
        

        Object.entries(gestion_error).forEach(([key,value])=>{
            gestion_error[key]="";
        })

        !namePattern.test(nom.value) ? gestion_error['nom']=false : gestion_error['nom']=true;


        emailPettern.test(email.value)? gestion_error['email']=true : gestion_error['email']=false;
        
        let password_error_messgae = ""
        if (passwordPattern.test(password.value)){

            if (password.value === conf_password.value){
                gestion_error['password']=true;

            }else{gestion_error['password']=false;password_error_messgae="Password does not math"}

        }else{
            gestion_error['password']=false;
            password_error_messgae="you must enter a strong password"
        }


        !gender? gestion_error['gender']=false: gestion_error['gender']=true;

        if (sports_check.checked || lecture_check.checked || musique_check.checked){
            gestion_error['interet'] = true
        }else{
            gestion_error['interet'] = false
        }

        hobbies.value ==='Choose...' ? gestion_error['hobbies'] = false : gestion_error['hobbies']=true;

        message.value.length<10 ? gestion_error['message']=false : gestion_error['message']=true;

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


        const isAlltrue= Object.values(gestion_error).every(value => value===true)

        const all_element=[nom,email,document.getElementById('pass-error'),"gender","interet",hobbies,message,contry,file_image]

        const all_errrs_classes = document.querySelectorAll('.error');

        if (isAlltrue){
            all_errrs_classes.forEach(el=>el.style.display="none")
            Object.keys(gestion_error).forEach((key,index)=> {

                if (key!=="gender" && key!=="interet" ){
                    all_element[index].classList.remove('not-complete')

                }
            } )

            const forms = document.getElementById('form-valide');

            const interet=[];
            if (musique_check.checked){
                interet.push('Musique')
            }
            if (sports_check.checked){
                interet.push('Sports')
            }
            if (lecture_check.checked){
                interet.push('Lecture')
            }

            

            const div = document.createElement('div');
            div.classList.add('form');

            

            const reader = new FileReader();
            reader.readAsDataURL(file_image.files[0])

            reader.onload = function(e){

                div.innerHTML=`
                <div>
                    <p>
                    name : <b>${nom.value}</b><br>
                    email : <b>${email.value}</b><br>
                    password : <b>${password.value}</b><br>
                    sexe : <b>${gender.value}</b><br>
                    Centres d'intéret : <b>${interet.join(' / ')}</b><br>
                    Hobbies : <b>${hobbies.value}</b><br>
                    </p>
                </div>
                <div>
                    <p>
                    message : <br>
                        <pre>${message.value}</pre>
                    </p>
                </div>
                <img src='${e.target.result}' width=100 height=100>
            `   
                forms.appendChild(div);
            }


            
        }else{
            Object.keys(gestion_error).forEach((key,index)=>{

                console.log(index,key)

                if(!gestion_error[key]===true  && key!=="gender" && key!=="interet"){

                    all_element[index].classList.add('not-complete');

                    if (key==='password'){
                        all_element[index].textContent=password_error_messgae;

                    }
                        
                }else if(gestion_error[key]===true && key!=="gender" && key!=="interet"){
                    all_element[index].classList.remove('not-complete')
                }

                if(!gestion_error[key]===true){

                    all_errrs_classes[index].style.display="inline";

                }else{
                    all_errrs_classes[index].style.display="none";
                }
            })
        }
    }

})

