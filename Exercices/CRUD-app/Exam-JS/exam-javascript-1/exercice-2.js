function  findMax(array){
    let max = array[0]

    for (let index=1;index < array.length ;index++){

        if(array[index]> max){
            max=array[index]
        }
    }

    console.log(max);
    return;
}