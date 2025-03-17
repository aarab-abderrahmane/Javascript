let names = ['ahmed',"ali","abdulrahman","ayoub"]

console.log(names)

names.push('taha') // add element to last index

console.log(names)

names.unshift('mouad')  // add element to first index

console.log(names)


names.shift() //delete first element 
console.log(names)
console.log(names.shift())
console.log(names)

names.pop() // delete last element
console.log(names)


console.log('________________________2_________:')

let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange", "Peach", "Grapes", "Strawberry", "Pineapple", "Watermelon"]

// splice(start,count,add_element)
fruits.splice(1,2)
console.log(fruits)

fruits.splice(5) // 5 --> end
console.log(fruits)


fruits.splice(5,0,"add_element","second_element")
console.log(fruits)

// slice(start,end)
fruits.slice(5,-1)
console.log(fruits) // don't change
console.log(fruits.slice(5,-1))
console.log(fruits.slice(5))


console.log('________________________3_________:')

let names_2 = ['ayoub','abdu',"taha",'mouad',"abdu",'walid','ayoub']


//indexof : returns the first index where the value is found , or -1 if not found
//indexof : starting from left to right
console.log(names_2.indexOf("ayoub"))
console.log(names_2.indexOf('ayoub',1)) // search (index :1 to end)
console.log(names_2.indexOf('abdu',4))
console.log("not found: ",names_2.indexOf('abdu',5))



//lastIndexof :  same way as 'indexof' but starts from right to left 
// return index or -1 if not found
console.log(names_2.lastIndexOf("abdu"))
console.log(names_2.lastIndexOf("ayoub",-1))
console.log(names_2.lastIndexOf("ayoub",-2))

// includes : return true or false
//start form left to right
console.log(names_2.includes('abdu'))
console.log(names_2.includes('abdu',4))
console.log(names_2.includes('abdu',5))




//findIndex() : useed to find the index of an element based on a condition (calback function)
// return the first index where the condition is true (uses function) or -1 if no match is found 
//starting from left to rigth 

let index_name = names_2.findIndex(name => name.length === 4);
console.log(index_name) // index 1 means 'abdu'


console.log('________________________4_________:')

console.log(names_2)
console.log(names_2.reverse())
console.log(names_2)


//sort the elements of an array based on a default order (default :alphabetical) or (numerical order for numbers )

console.log(names_2.sort())

console.log([200,8,0,1,-1].sort()) // incorrect !!

let numbeers = [1,9,10,-1,0,8]
numbeers.sort((num_1,num_2) => {
    console.log(num_1.toString().localeCompare(num_2.toString()))
  
})

console.log(numbeers)

console.log('________________________5_________:')




const number_elements = names_2.reduce((acc,value,index)=>{
    acc[value] = (acc[value] || 0)+1;
    return acc
},[])

console.log(number_elements)

const number_abdu = names_2.reduce((acc,value,index)=>{
    
    return value === "abdu" ? acc+1 : acc;
},0)

console.log(number_abdu)


function find_all_index(array,value__){
    const all_index_abdu = array.reduce((acc,value,index)=>{

        if (value === value__){
    
            acc.push(index)
        }
        return acc
    
    
    },[])
    
    return all_index_abdu
}

console.log(find_all_index(names_2,"abdu"))



// dictionary = {}
// dictionary['apple'] = dictionary['apple'] || 0
// console.log(dictionary)

// dictionary['apple'] = 8
// console.log(dictionary)

// dictionary['apple'] = dictionary['apple']+8
// console.log(dictionary)

