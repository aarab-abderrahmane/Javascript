let employees =[
{id: 1, nom: 'Zineb', salaire: 5000},
{id: 2, nom: 'Ahmed', salaire: 4000},
{id: 3, nom: 'Sara', salaire: 7000 },
{id: 4, nom: 'Rachid', salaire: 6000 },
{id: 5, nom: 'Ali', salaire: 5500 }
]


// 1 : 

employees.forEach(emp=>console.log(emp))

// 2 :
employees.push(
    {id:6,nom:'mohamed',salaire:6000},
    {id:7,nom:"hajar",salaire:4500})

console.log(employees)

// 3 :
employees.pop() // end
employees.shift() // first

// 4 :
employees[3].salaire  = 6300
console.log(employees)

// 5 :
let somme1 = employees.reduce((accumulator,currentValue,index,array)=>{
    return  accumulator += currentValue.salaire
},0)

console.log(somme1)

let somme2 = employees.reduce(function(acc,curr){
    return curr.nom.startsWith('A') ? acc+= curr.salaire : acc
},0)

console.log(somme2)

// 7 :
const filter_salaire = employees.filter(emp=>emp.salaire >=5500)
console.log(filter_salaire)

// 8 : 
const table_names = employees.reduce((acc,curr)=>{ acc.push(curr.nom)  ; return acc},[])
// const table_names = employees.map(emp => emp.nom)
console.log(table_names)

// 9 : 
let  emp_sort = employees.sort((a,b)=>a.salaire - b.salaire)

console.log(emp_sort)

