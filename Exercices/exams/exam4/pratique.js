let livres = [
    {"ISBN":"01234","titre":"Langage C","image":"langage.jpg","prix":150},
    {"ISBN":"56789","titre":"Programmation Javascript","image":"javascript.jpg","prix":250},
    {"ISBN":"11778","titre":"Laravel","image":"laravel.jpg","prix":200}
]

const search = document.getElementById('search');

window.onload = function(){display()}

function display(array){
    const array_= Array.isArray(array) && array.length>0 ? array : livres;

    if(search.value.length>0 && array.length===0){
        document.getElementById('container').innerHTML += '<h1 class="alert">No livre found !</h1>';
        return
    }


    document.getElementById('container').innerHTML =""
    array_.forEach(liv=>{
        const div = `
            <div class="livre">

            <img class="image" src="${liv.image}"/>
            <div class="liv_info">
                <p><b>ISBN : </b>${liv.ISBN}</p>
                <p><b>titre : </b>${liv.titre}</p>
                <p><b>prix : </b>${liv.prix}</p>
                <button class="ajouter" value="${liv.ISBN}">Ajouter</button>
            </div>

            </div>

        `;

        
        document.getElementById('container').innerHTML += div;
    })


}




document.getElementById('search').addEventListener('input',function(e){

    if (search.value===""){display()}
    else{
        document.getElementById('container').innerHTML="";

        let resultat = livres.filter(liv=>{

            return Object.values(liv).some(val=>{
                
                return typeof(val)==="string" && val.toLowerCase().includes(search.value.toLowerCase())

            })


        })

        display(resultat)

        
    }

})