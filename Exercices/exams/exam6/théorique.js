let tableau = ["abdu","mouad","ahmed","ziko"]

tableau.push('faro9',"sami")

console.log(tableau)

tableau.unshift('yassir')
console.log(tableau)

tableau.pop()
console.log(tableau)

tableau.shift()
console.log(tableau)


// QSM 1 : c
// QSM 2 : a 
// QSM 3 : b
// QSM 4 : a 

const namee = "hello world!";
const new_namme = namee.replace('world',"mouad");
console.log(new_namme)

// QSM 5 :  c 

$(document).ready(function() {

    console.log("La valeur de href est :", $('#link').attr('href'));

    console.log($('#city').val())

    console.log($('.password').val())

    console.log($("#titre").text())

});




// []  araray

//{nom:'abdu',age:18}  object



const simple_aaray = [
    { nom: 'Abdu', age: 18 },
    { nom: 'Jean', age: 25 },
    { nom: 'Alice', age: 30 },
    { nom: 'Mohamed', age: 22 }
]

const json_aaray = [

    { "nom": "Abdu", "age": 18 },
    { "nom": "Jean", "age": 25 },
    { "nom": "Alice", "age": 30 },
    { "nom": "Mohamed", "age": 22 }
]

{key:value}



simple_aaray.forEach(person=>{

    // Object.keys(person).forEach(key=>{
    //     console.log(key+" -> "+person[key])
    // })

    for (let key in person){
        console.log(key+" -> "+person[key])
    }

})


for (let person of simple_aaray){


    // Object.keys(person).forEach(key=>{
    //     console.log(key+" -> "+person[key])
    // })

    for (let key in person){
        console.log(key+" -> "+person[key])
    }

}



// json_aaray.forEach(var=>{})

// other syntax
// json_aaray.forEach(function(obj){

// })


