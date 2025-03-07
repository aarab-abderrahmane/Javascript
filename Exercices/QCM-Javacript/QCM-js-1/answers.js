let table = [12,40,36,10,100];
var x= table.shift() ; // remove the first element
console.log(x);
console.log(table);


console.log('___________________________2__________')


const array_1 = [1,4,10,8];
const map_1 = array_1.map(x => x*2)
console.log(map_1)


console.log('___________________________3__________')


const isGreat = (score) => score >=10;
const Scores_1 = [18,10,45,30];
console.log(Scores_1.every(isGreat));  // return true or false 'every()'
console.log(Scores_1.every((x) => (x >=20)))


console.log('___________________________4__________')

var i =2;
window.i = 0;
console.log(i);

window.j = 0;
var j =2;
console.log(j);



setInterval(() =>{
    console.log('It is time to Drink Water !!');
},60000 )  // this message repeats every 1 minute!   (60000 miliseconds = 1minute * 60 second * 1000 milisecond)

setInterval(function(){
    console.log('it is same function as before , but in a different way !!')
},60000)

setTimeout(function() {
    console.log('___________________________5__________')
    console.log('this use the method function <setTimeout> !') // this runs once after 10 second!  (10000 = 10 second * 1000 milisecond)
},10000)


console.log('___________________________6__________')


let a=10;
function outer(){
    let b=20;
    function inner(){
        let c=30;
        console.log(a,b,c);
    }

    inner();
}

outer()


console.log('___________________________7__________')


let myList = [23,41,0,897];
const R= myList.filter(myfunction);

function myfunction(a){
    let b = `${a}`;
    return b.length >2;
}

console.log(R)


console.log('___________________________8__________')

var fruits = ['Banane','orange','Pomme'];
var x= fruits.pop()

console.log(x)
console.log(fruits)


console.log('___________________________9__________')

console.log(NaN == NaN)
console.log("infinity"==Infinity)
console.log("0xa"===10) //because one is a number and the other is a string 
console.log("0xa"===10) //  this is True , because "0xa" is converted to number (10) before theh comparison


console.log('___________________________10__________')

console.log(Math.floor(2.9))
console.log("3",parseInt('3'))
console.log(Math.max(-4,3,100,30))
var o =3 ; console.log(o++)
var o =3 ; console.log(++o)


console.log('___________________________11__________')

let firstParagraph = document.querySelector('p');
let next = firstParagraph.nextSibling;
console.log(next);

let firstParagraph_2 = document.querySelector("p");
let nextElement = firstParagraph_2.nextElementSibling; // Returns the next sibling element node (the second paragraph)
console.log(nextElement); // Outputs: <p>Second paragraph</p>

let firstParagraph_3 = document.querySelector('.container_2 p');
let next_2 = firstParagraph_3.nextSibling;
console.log(next_2)


// nextSibling ==> return only the text and comments + if there is white space or a newline between the elements , it will be considered as a text node
// nexElemntSibling ==> return only the elemnt 

console.log('___________________________12__________')

let ex_node = document.getElementById('node-exemple');
console.log(ex_node.childNodes)
console.log(ex_node.children)
console.log(ex_node.firstChild)
console.log(ex_node.firstElementChild)
console.log(ex_node.firstChild.nextElementSibling)
console.log(ex_node.firstElementChild.nextElementSibling)
console.log(ex_node.firstElementChild.nextSibling)




//.childNodes	All nodes (comments, text, elements)
//.children	Only elements (ignores comments & text)


console.log('___________________________13__________')


console.log(parseInt("010",8))  // (8 means base 8 --> octal system)


console.log('___________________________14__________')

// for loop
for (let i = 1 ; i<6 ; i++){
    console.log(i,"for loop")
}

//while loop

let k=0;
// while (!isNaN(k)) {
//     console.log(k,"while loop");
//     k++;
// }  

while (k<5){
    console.log(k,"while loop");
    k++;
}


// do .. while 

let kk = 0 ;
// do --> is the part of the code that will run at least once (au moins 1 repeat !)
do { 
    console.log(kk,"do while");
    kk++;
}while ( kk = 0)


// for.. In loop
// use when you need to iterate (get) over keys or indices (index)
let person = {name : "abdulraman",age : 18, city : "Agadir"};
for (let key in person) {
    if(key ==="name") {
        console.log('____for .. In loop')
    }
    console.log(key," : "+person[key]);
}


// for .. of loop
// uses when you need to iterate over values
let colors = ['red','green','yellow','blue',"brown"]
for (let color of colors){
    console.log(color);
}


// for .. in loop 
// use when you need to iterate (get) over keys or indices (index)
for(index in colors ){
    console.log("index : "+index, colors[index])
} 


// forEach method (belongs to an object. kayntami)
let numbers = [1,2,3,4,5];
numbers.forEach(function(num){
    console.log(num,"forEach mrthod")
})

console.log('___________________________15__________')

let res = numbers.reduce(function(accumulator,current,index,array){ // index + array (optional)
    console.log(accumulator,current,accumulator+current)
    return accumulator+current;
},0); // initial value is : 0
console.log("total numbers : ", res)


const  nestedArrays =  [ [1,2] , [3,4] , [5,6]];
const flattened = nestedArrays.reduce(function(accumulator,currentValue){
    console.log(accumulator,currentValue)
    return accumulator.concat(currentValue)  // exempel append  == concat
},[]) // initial with emty array

console.log(flattened)


const fruits_1 = ['apple','banana','orange','apple','banana','apple'];
const count = fruits_1.reduce(function(accumulator,currentValue){

        console.log(accumulator,currentValue,accumulator[currentValue])

        accumulator[currentValue] = (accumulator[currentValue] || 0) +1;
        //(accumulator[currentValue] || 0) +1)
        // if currentValue (key) is not exist (undefined) in accumulator (dectionary {}) it will be 0  and +1 has been added
        // if exist , the old value is kept and +1 is added
        return accumulator
},{}) // initial with emty dectionary 
console.log(count)


// abdu= {}
// abdu['age']=18
// abdu['city']='agadir'
// abdu['age']=17
// abdu['age']+=1
// console.log(abdu)


console.log('___________________________16__________')

const elements_1 = ['fire',"Air","Water"];
const aaa = elements_1.join();
const bbb = elements_1.join('')
const ccc = elements_1.join(' | ')


console.log(elements_1)
console.log(aaa)
console.log(bbb)
console.log(ccc)

