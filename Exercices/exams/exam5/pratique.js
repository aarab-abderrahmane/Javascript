let employees = [
    { id: 1, nom: "Ahmed", salaire: 5000 },
    { id: 2, nom: "Fatima", salaire: 6000 },
    { id: 3, nom: "Youssef", salaire: 4500 },
    { id: 4, nom: "Nada", salaire: 7000 }
];


// 1 : 
function displayEmployees(){

    document.getElementById('resultat').innerHTML=""

    employees.forEach(emp=>{
        const ul = document.createElement('ul');
        for (let key in emp ){
            
            const li = document.createElement('li');
            li.innerHTML=` <b>${key}</b> : ${emp[key]} `;
            ul.appendChild(li)
        }
        document.getElementById('resultat').appendChild(ul)
    })

}

displayEmployees()


// 2 : 
function addEmployee(employee){

    try{

        if(Object.keys(employee).length !==3){
            throw new Error('Data is incomplete')
        }

        const exists = employees.some(emp => emp.id === employee.id)
        if(exists){
            throw new Error('emp already exist')
        }

        employees.push(employee)

        displayEmployees()

    }catch(error){
        console.log(error.message);
    }


}

addEmployee({ id: 3, nom: "abderrahmane", salaire: 5000 })


// 3 : 
function removeLastEmployee(){

    employees.pop();
    displayEmployees();
}

removeLastEmployee()


function updateSalary(id,newSalary){

    if(isNaN(id) || isNaN(newSalary)) return ; 

    const emp = employees.find(emp=>emp.id===id);

    //find return the first element

    if(emp){

        emp.salaire=newSalary;

        displayEmployees()


    }else{
        return "error"
    }

}

updateSalary(3,1000)


function calculateTotalSalary(){

    const total = employees.reduce(function(acc,curr){

        return acc+=curr.salaire

    },0)


    return total


}

console.log(calculateTotalSalary())