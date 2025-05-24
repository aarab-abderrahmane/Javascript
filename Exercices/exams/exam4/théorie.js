// 1 : d

// 2 : 
console.log(parseInt('5'))

// 3 : 
setTimeout(()=>{console.log('hello')},300);

// 4 : pop()

// 5 : d

// 6 : c
let namee = "ABDU";
console.log(namee.toLocaleLowerCase())

// 7 : a

// 8 : c


// exercice 2 :
function getMax(table){

    try {

    
        if(!Array.isArray(table) || table.length ===0 ) return ;

        let max = table[0];

        table.forEach((ent,index)=>{

            if(max-table[index] < 0 ){max=table[index]}

        })

        return max 


    }catch(error){
        return error ; 
    }

}


console.log(getMax([0,10,9,100,20,1]))