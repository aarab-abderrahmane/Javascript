let output = document.getElementById('result')

function appendValue(value){
    output.value+=value
}

function calculate() {
    output.value= eval(output.value)
}

function clearOutput(){
    output.value = ""
}


document.addEventListener('keydown',function(event){
    const allowedkeys = "0123456789+-*/.=EnterBackspace";
    if (allowedkeys.includes(event.key)){
        if (event.key === 'Enter'){
            calculate();
        }else if (event.key == 'Backspace'){
            output.value = output.value.slice(0,-1);
        }else {
            appendValue(event.key);
        }
    }
})


function backSpace(){
    output.value = output.value.slice(0,-1);
}