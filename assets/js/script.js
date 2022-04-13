let inputs = document.querySelectorAll('input');
let facture = document.querySelector('#facture');
let pourcentages = document.querySelectorAll('#pourcentage div, #other-percentage');
let otherPourcentage = document.querySelector('#other-percentage');
let numberOfPeople = document.querySelector('#number-of-people');
let totalPerPerson = document.querySelectorAll('.total-per-person');
let btnReset = document.querySelector('#btn__reset');
// console.log(totalPerPerson);

// récupère la valeur des inputs
inputs.forEach( input => {
    input.addEventListener('change', () => {
        calcul();
    });
})

// récupère la valeur du pourcentage selectionné
pourcentages.forEach ( pourcentage => {
    pourcentage.addEventListener('click', () => {
        for(i=0; i < pourcentages.length; i++) {
            pourcentages[i].classList.remove('btn-active');
        }
        pourcentage.classList.toggle("btn-active");
        otherPourcentage.value="";
        calcul();
    })
})

// calcul
function calcul () {
    for (i=0; i < totalPerPerson.length; i++) {
        totalPerPerson[0].textContent = Math.round(((facture.value * (1 + (otherPourcentage.value/100))) - facture.value) / numberOfPeople.value) + " €";

        totalPerPerson[1].textContent = facture.value / numberOfPeople.value + " €";
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
})



