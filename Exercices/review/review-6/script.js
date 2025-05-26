const array_1 = [1,2,4,9,10,0]
const array_1_edit = array_1.slice(1,array_1.length)
console.log(array_1_edit)

console.log(array_1)


const array_2 = [1,2,4,9,10,0]
const array_2_edit = array_2.splice(1,array_2.length)
console.log(array_2_edit)

console.log(array_2)


document.getElementById('para').setAttribute('style',"color:red")

document.getElementById('container').addEventListener('mouseover',function(){

    this.style.backgroundColor="red"

})

document.getElementById('container').addEventListener('mouseout',function(){

    this.style.backgroundColor="yellow"
    
})


document.getElementById('choose').addEventListener('change',function(){

    document.body.style.backgroundColor="green"

})



let timer = setTimeout(() => {
    console.log('hello farou9')
},2000);

clearTimeout(timer)

let timer_interval = setInterval(function(){
    console.log('hello abdu')
},3000)

clearInterval(timer_interval)


const text = "hello world";

console.log("hello world".search('w'))
console.log("hello world".indexOf('o'))
console.log("hello world".lastIndexOf('o'))


console.log(text.replace('world','mohamed'))

console.log(text)


async function GetData(){

    try{

        const response  = await fetch('file.json');
        const data = await response.json();


        data.forEach(obj=>{

            Object.keys(obj).forEach(key=>{
                console.log(key+' -> '+obj[key])
            })

        })


    }catch(error){
        console.log(error.message)
    }

}





function getData2(){

    fetch('file.json')

        .then(response=>response.json())
        .then(data=>{

            data.forEach(obj=>{

                Object.keys(obj).forEach(key=>{
                    console.log(key+' -> '+obj[key])
                })

                // console.log(Object.keys(obj),Object.values(obj))


            })

        })

        .catch(error=>{
            console.log(error.message)
        }) 


}

getData2()

const dic = {nom:"abdu"}
console.log(Array.isArray(dic))

let array_3 = new Array('7');
array_3.push('3')
console.log(array_3)


const myname = "abderrahmane"
console.log(myname.startsWith('A'))
console.log(myname.endsWith('e'))
console.log(myname.includes('d'))

const number = 1.1

console.log(number, number.toString())

console.log(parseInt(number))
console.log(parseInt(number))


console.log(Math.floor(number))

// floor 
// round (+5) -> +1 (-4)->nothing
// ceil +1

const your_name = prompt('what your name : ',"abderrahmane") // default value for input = abde..
console.log(your_name)

let nombres = [10, 20,1,0, 30, 40, 50];
let notes = [12.5, 14.75, 16, 9.5, 18.25];
let valeurs = [3, 7.2, 15, 0.5, -4, 100,20];

let alltypeNum = nombres.concat(notes,valeurs)
console.log(alltypeNum)

console.log(alltypeNum.find(num=>!Number.isInteger(num)))  // the first one
console.log(alltypeNum.filter(num=>!Number.isInteger(num)))
console.log(alltypeNum.map(num=>!Number.isInteger(num) ? num : "notfloat")) // replace
console.log(alltypeNum.findIndex(num=>!Number.isInteger(num)))  // the first index
console.log(alltypeNum.some(num=>!Number.isInteger(num) )) // at least one 
console.log(alltypeNum.every(num=>!Number.isNaN(num)))  // if the condition is met for all return tre

console.log(alltypeNum.indexOf(20))  // the first index
console.log(alltypeNum.lastIndexOf(20))  // the last index

console.log(alltypeNum.join(' / '))

console.log(nombres)
nombres=nombres.reverse()
console.log(nombres)

nombres = nombres.sort((a,b)=>a-b) 
console.log(nombres)

nombres = nombres.sort((a,b)=>b-a) 
console.log(nombres)



