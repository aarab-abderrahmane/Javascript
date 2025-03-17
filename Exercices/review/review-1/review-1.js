console.log(Number('0.11'))
console.log(Number("1"))
console.log(Number(1))
console.log(Number(1.2))


console.log(Number('4ka'))
console.log(parseInt("4ka"))
console.log(parseInt("k4ka"))
console.log(parseInt("4.6"))
console.log(parseFloat("4.5"))
console.log(Number.isInteger(98) )
console.log(Number.isInteger('98') )
console.log(Number.isInteger('9'+9))
console.log(Number.isNaN(9))
console.log(Number.isNaN('hello'+9) ) // why false(not true) , In js the + is a considered a merge (integer + ..) and not a operation  

console.log(Number.isNaN('9'))  // if true - covert to -> Nane  | Do not convert text to  number before verification

console.log(isNaN('9'))


console.log("________________2______________")

console.log(Math.E)
console.log(Math.PI)
console.log(Math.abs(-7))
console.log(Math.sqrt(9)) //racine
console.log(Math.pow(5,2)) // 5**2
console.log(Math.round(10.7)) 
console.log(Math.round(10.5))
console.log(Math.round(10.4))

//round (x.y)  if y > 50..0 --> x+1 | else x-1

console.log(Math.ceil(10.7))  // x+1
console.log(Math.floor(10.7)) // x

numbers = [1,8,0,-1,100]
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))


console.log("________________3______________")

let x=100

console.log(x.toString())
console.log((12.2).toString())
console.log((12.2).toString())
console.log(("12").toString())
console.log(90..toString())


console.log("________________4______________")

let name_="aarab"

for (let k=0 ;k<5;k++){
    name_+="aarab"
}
console.log(name_)

// name_+=(name_*5)
// console.log(name_)  --> NaN

name_+=name_.repeat(5)
console.log(name_)

console.log(name_.length)

console.log(name_[0])
console.log(name_[-1])

text="Java,Script"
console.log(text.slice(0,6)) // 0 --> 6-1
console.log(text.slice(0,4))
console.log(text.slice(-6,0)) //nothig
console.log(text.slice(-6,-1)) 
console.log(text.slice(-6)) 


console.log(text.indexOf('v'))
console.log(text.indexOf('a'))
console.log(text.indexOf('a',2))  //start search width index 3

console.log(text.lastIndexOf('a',2)) // katbda men ex 3 il teht 3akes indexof katbda il fo9 ex 3

text_2 = "We build text-based products. Chat, Automate, Solve, Educate,"


console.log(text.split(','))

console.log(text_2.split(','))
console.log(text_2.split(',',2))


console.log("________________5______________")

console.log(text.substr(0,4)) // 4 means : 4 litters afetr index 0

console.log(text.includes('a')) // return true or false (if ex 'a' letter in text)
console.log(text.includes('a',7)) // 7 start index

console.log(text.includes('f'))

console.log(text.startsWith('J'))
console.log(text.startsWith('j'))
console.log(text.startsWith('a',1))

console.log(text.endsWith('t'))


console.log("________________5______________")

// creat array
let names=['abdulrahman','aarab']
let objects = [1,2,3,'abdulrahman',true,false,undefined,null,[1,2,3],{"age":18}]

console.log("my first name is : ",names[0])
console.log(objects[9]['age'])

objects[4]='aarab'
console.log(objects)



