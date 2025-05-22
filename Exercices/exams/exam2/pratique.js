document.getElementById('submit').addEventListener('click',function(event){
    event.preventDefault()

    validerForm()

})


function validerForm() {
    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const age = document.getElementById("age").value.trim();
    const sexeF = document.getElementById("fem").checked;
    const sexeM = document.getElementById("mas").checked;

    const disciplines = [
        document.getElementById("marathon"),
        document.getElementById("natation"),
        document.getElementById("sprint"),
        document.getElementById("saut"),
    ];

    // Check for empty fields
    if (!nom || !prenom || !age || (!sexeF && !sexeM)) {
        alert("All fields must be filled!");
        return false;
    }

    // Validate name and surname (letters only)
    const alphaRegex = /^[A-Za-zÀ-ÿ]+$/;
    if (!alphaRegex.test(nom)) {
        alert("Name must contain only letters.");
        return false;
    }

    if (!alphaRegex.test(prenom)) {
        alert("Surname must contain only letters.");
        return false;
    }

    // Check if at least one discipline is selected
    const atLeastOneDiscipline = disciplines.some(d => d.checked);
    if (!atLeastOneDiscipline) {
        alert("You must select at least one discipline.");
        return false;
    }

    // All good
    return true;
}
