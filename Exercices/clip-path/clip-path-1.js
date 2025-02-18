function to_Triangle(){
    const image= document.getElementById('image');
    image.style.clipPath ="polygon(50% 0%, 0% 100%, 100% 100%)";
}

function to_Heptagon(){
    document.getElementById('image').style.clipPath ="polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"
}

function to_Rhombus(){
    document.getElementById('image').style.clipPath ="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
    
}   

function to_left_arrow(){
    document.getElementById('image').style.clipPath ="polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)"
    
}

function to_Right_arrow(){
    document.getElementById('image').style.clipPath ="polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)"

}

function to_Star(){
    document.getElementById('image').style.clipPath ="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"

}


function to_Circle(){
    document.getElementById('image').style.clipPath ="circle(50% at 50% 50%"

}