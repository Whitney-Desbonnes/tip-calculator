let inputs = document.querySelectorAll('input');
let facture = document.querySelector('#facture');
let pourcentages = document.querySelectorAll('#pourcentage div, #other-percentage');
let otherPourcentage = document.querySelector('#other-percentage');
let numberOfPeople = document.querySelector('#number-of-people');
let totalPerPerson = document.querySelectorAll('.total-per-person');
let btnReset = document.querySelector('#btn__reset');
let thisPourcent;

inputs.forEach( input => {
    // lance la fonction calcul() à chaque changements de valeur dans un input
    input.addEventListener('change', () => {
        btnReset.classList.add('btn__reset-active');
        calcul();
    });
})


pourcentages.forEach ( pourcentage => {
    pourcentage.addEventListener('click', () => {
        // récupère la valeur du pourcentage selectionné
        thisPourcent = pourcentage.getAttribute('data-number');

        // changement du style
        for(i=0; i < pourcentages.length; i++) {
            pourcentages[i].classList.remove('btn-active');
        }
        pourcentage.classList.toggle("btn-active");
        btnReset.classList.add('btn__reset-active');

        // reset de l'input autre %
        otherPourcentage.value="";
        
        // lance la fonction calcul() à chaque clic sur un des pourcentages prédéfinies
        calcul();
    })
})


 // calcul
 function calcul () {
    for (i=0; i < totalPerPerson.length; i++) {

        if (facture.value > 0 && numberOfPeople.value > 0) {

            totalPerPerson[1].textContent = Math.round(facture.value / numberOfPeople.value) + " €";

            if (otherPourcentage.value > 0) {
                totalPerPerson[0].textContent = Math.round(((facture.value * (1 + (otherPourcentage.value/100))) - facture.value) / numberOfPeople.value) + " €";

            }

            else if (thisPourcent > 0 ) {
                totalPerPerson[0].textContent = Math.round(((facture.value * (1 + (thisPourcent/100))) - facture.value) / numberOfPeople.value) + " €";
            }
        }
    }
}


// bouton reset
btnReset.addEventListener('click', () => {
    inputs.forEach( input => {
        input.value = "";
    });

    totalPerPerson.forEach( totalPerPersons => {
        totalPerPersons.textContent = "0,00 €";
    });
    btnReset.classList.toggle('btn__reset-active');
})



