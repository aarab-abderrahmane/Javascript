let arra_1 = ['ahemd','abdu','ali']

let arra_2 = ["mona","ziko"]

console.log(arra_1.concat(arra_2))

console.log(arra_1.concat(arra_2,['nothing'],'reda'))

console.log(arra_1.join("+"))



console.log("________________________2____________:")

const email = '      abderrahmane@gmail.com     '
console.log(email)
console.log(email.length)

console.log(email.trim())
console.log(email.trim().length)

// == compare value
// === compare value and typedata


console.log("________________________2____________:")

function check(){
    let age = document.getElementById('age').value;

    try{
        if (isNaN(age)){
            console.log('you must entre only numbers')
            return
        }
        age = parseInt(age)

        if (!age){
            window.alert("the field must be filled in")
    
        }else if (age === 18){
            console.log("you are 18 now")
        }else if (age <18){
            console.log("you are young")
        }else{
            console.log('nothing')
        }

    }catch(error){
        console.log("Error :",error)
        return
    }


   
}

//other syntax

function check_2(){
    let age = document.getElementById('age').value;
    if (isNaN(age)){
        console.log('you must entre only numbers')
        return
    }
    age = parseInt(age)

    !age ? 
        window.alert('teh field you must be filled in') 
        : age<18?
        console.log("you are young")
        : console.log('nothing')


    console.log('jhjhj')


}


//other syntax
function check_3(){
    let age = document.getElementById('age').value;
    if (isNaN(age)){
        console.log('you must entre only numbers')
        return
    }
    age = parseInt(age)

    !age ? window.alert('teh field you must be filled in') : age<18? console.log("you are young") : console.log('nothing')



}



console.log("________________________3____________:")

let role = prompt('what is your role ? :');

switch(role){

    case 'admin':     //hala
        console.log('create + update + delete')
        break 
    
    case 'moderator'  :  // if case use (==)
        console.log('creat,update')
        break
    
    case 'editor':
        console.log('update')
        break
    
    default:  //else
        console.log('nothing')
}

console.log('______second method :')

switch(role){

    case 'admin':     //hala
        console.log('create + update + delete')
        break 
    
    case 'moderator'  :  // if case use (==)
        console.log('creat,update')
        // don't stop
        
    case 'editor':
        console.log('update')
    
    default:  //else
        console.log('nothing')
}
