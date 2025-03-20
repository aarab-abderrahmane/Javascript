for (let i=100 ; i>0; i-- ){
    console.log(i)
}


let names = ['ahmed','mazen','ali','gamal','mona','abdulrahman']

console.log(names)

function my_reverse(x){

    if (typeof x === "object" ){
        let array=[];
        for (let i=x.length-1 ; i>=0 ;i--){
            array.push(x[i])
        }
    
        return array

    }else if(typeof x === "string"){
        let string="";
        for(i=x.length-1;i>=0;i--){
            string+=x[i]
        }
        return string
    }else{
        return 'Error'
    }

}


console.log(typeof 'abdulrahman')
console.log(typeof ['ahmed','mazen','ali','gamal','mona','abdulrahman'])


console.log(my_reverse(names))
console.log("abdulrhman ----> ",my_reverse("abdulrahman"))

console.log(names.reverse())

let my_name="abdulrahman"
// console.log(my_name.reverse())



console.log("_________________2___________________")

for (let i=0 ; i<names.length;i++){

    if(names[i] === "ali"){
        continue //stop here , and start again loop
    }
    console.log(names[i])
}

console.log('________________')

for (let i=0 ; i<names.length;i++){

    if(names[i] === "ali"){
        break //stop loop
    }
    console.log(names[i])
}


console.log("_________________3___________________")

let k=0;

do{
    console.log("do");
    k++;
}while(k<4)

console.log('________________')

let j=0;
do{
    console.log("do");
    j++;
}while(false)

console.log(j)
