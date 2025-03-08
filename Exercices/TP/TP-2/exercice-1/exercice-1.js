function calculate(operation){
    first_num = document.getElementById('first_number').value;
    second_num = document.getElementById('second_number').value;

    if (isNaN(first_num) || isNaN(second_num)){
        document.getElementById('resultat').textContent="Veuillez enter des nombres valides."
    }

    let result = first_num+operation+second_num
    document.getElementById('resultat').textContent = eval(result)
}