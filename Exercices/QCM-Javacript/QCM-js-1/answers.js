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


let myList = [23,41,0,87];
const R= myList.filter(myfunction);

function myfunction(a){
    let b = `${a}`;
    return b.length >50;
}

console.log(R)