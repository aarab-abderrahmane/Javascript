// undefined : La variable n'a pas encore recu de valeur 
// null : valeur vide

// var : une variable que vous pouvez modifier , cela fonctionne partout dans une fonction
// let : une variable que vous pouvez modifier , cela fonctionne uniquement a l'interieur des blocs {}
// const : variable non modifiable , cela fonctionne a l'interieur des blocs {}

let day = new Date().getDay();
day===0 ? "" : console.log("Days remainng until the weekend : ");

switch(5){

    case 0 :
        console.log('you are on weekend')
        break
    
    case 1 : 
        console.log('Monday')
    
    case 2 : 
        console.log('Tuesday')
    
    case 3 : 
        console.log('Wednesday')
    
    case 4 : 
        console.log('Thursday')

    case 5 : 
        console.log('Friday')

    case 6 : 
        console.log('Saturday')
        break

    default : 
        console.log('error')
    
}

let number = 10;

for(let i=0 ; i<10 ; i++){
    console.log(i)
}

while(number>0){

    console.log("count : "+number)
    number--

}

// at least one

do{
    console.log("do count : "+number);
    number++;

}while(number<0)


number=0;
console.log('_____')

do{
    console.log("do count : "+number);
    number++;

}while(number<2)


const person = {
    name: "Ali",
    age: 18,
    city: "Fes"
};


for (let key  in person){  // for object like dic
    console.log(key)
}


const colors = ["red", "green", "blue"];

for (let col of colors){  // for array
    console.log(col)
}

for (let index  in colors){  
    console.log(index)
}


console.log(colors)

colors.push('yellow') // add in the end (push = #pop)
console.log(colors)

colors.unshift('gray') // in the first  (unshift = #shift)
console.log(colors)

const sliced = colors.slice(1,4); // copy and modify the original array (firts index , lastindex-1)
console.log("cliced: "+sliced)
console.log('original : '+colors)


colors.splice(1,2) // edit the original array (firstindex , number of elements after first index)
console.log(colors)

//delete and add  (replace)

colors.splice(0,1,"green",'blue')
console.log(colors)


colors.splice(2,1,"gray")
console.log(colors)


const person2 = {
    name : "Abdulrahman",
    age : 17 ,
}

//update
person2.age = 18 ; 

// add 
person2.city = "agadir";
console.log(person2)


// delete
delete person2.city

console.log(person2)


_______________________________________
document.getElementById('box').classList.add('active') // add class
document.getElementById('box').classList.remove('active') // delete class

document.getElementById('myBtn').addEventListener('click',()=>{

    document.getElementById('box').classList.toggle('active') // auto remove , add 

    // 📌 Each time you click the button:

    // If the class active exists, it removes it.

    // If it doesn’t exist, it adds it.

})


const now = new Date()

console.log('Year : '+now.getFullYear())
console.log('Month : '+(now.getMonth()+1))   // between 0-11
console.log('Day for the month : '+now.getDate())  // day number for th month 
console.log('Day for the week : '+now.getDay() ) // 0 => Sunday
console.log('Hours : '+now.getHours())
console.log('Minutes : '+now.getMinutes());
console.log('seconds : '+now.getSeconds());


const myDate = new Date('2023-2-28');
console.log(myDate)

myDate.setFullYear('2025');
myDate.setMonth(5);
myDate.setDate(15)

console.log(myDate)



// search and reapace functions ; 


const text = "I love programming in Javascript";
const position = text.search('in'); // return first index

console.log(position)

const message = "Hello World !";
let newMessage = message.replace('world',"Abderrahmane");
console.log(newMessage);

newMessage = message.replace('World',"Abderrahmane");
console.log(newMessage);


// ajax (send request)

function loadPost(){

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data=>{
            document.getElementById('result').innerHTML=`
                <h3>${data.userId}</h3>
                <h4>${data.id}</h4>
                <p>${data.title}</p>
                <p>${data.body}</p>
            `
        })

        .catch(error =>{
            console.error('Error',error);
        })
}

loadPost()


// with async await
async function loadData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json() ; 
        document.getElementById('result').innerHTML+=`
                <h3>${data.userId}</h3>
                <h4>${data.id}</h4>
                <p>${data.title}</p>
                <p>${data.body}</p>
            `;
        
    }catch (error){
        console.error('Error : ',error)
    }
}

loadData()


//localstorage
const data = JSON.parse(localStorage.getItem('data')||'[]'); // array json to simple array

//update 
data.push({name:'abdu'})
localStorage.setItem('data',JSON.stringify(data)) ; // array simple to  array json

localStorage.removeItem("data"); // specific item
localStorage.clear(); // all


//clear array
let arr = [1, 2, 3, 4];
arr = [];



class Person{

    // properties (private)
    #nom 
    #pernom
    constructor(nom,prenom,age){
        this.#nom = nom;
        this.#pernom = prenom;
        this.age = age
    }

}


//inheritance

class Student extends Person {

    constructor(nom,prenom,age,niveau){
        super(nom,prenom,age)
        this.niveau = niveau
    }

}

const p1 = new Person("aarab","abderrahmane",18)
const s1 = new Person("aarab","abderrahmane",18,"ex")
