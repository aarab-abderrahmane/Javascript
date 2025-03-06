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


//.childNodes	All nodes (comments, text, elements)
//.children	Only elements (ignores comments & text)


