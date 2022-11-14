const startBtnEl = document.querySelector(".btn");
// utilizzo come variabili globali i due array e il numero di numeri indovinati, 
// dichiaro anche un array nel quale metto i numeri che combaciano
let randomArray = [];
let numUtente = [];
let contaCorrette = 0;
let arrayNumCorretti = [];
// al click sul pulsante compaiono i numeri e parte il timer
startBtnEl.addEventListener("click", function(){
    const numContainer= document.querySelector(".numContainer");

    // creo i numeri che poi faccio scomparire tramite il container
    for (let i=0; i<5; i++){
        randomArray[i]=getRndNumber(1, 100);

        let numEl=document.createElement("div");

        numContainer.append(numEl);

        numEl.innerHTML= randomArray[i];

        numEl.classList.add("numero")

    }

    // Per far sì che il prompt avvenga dopo che scompaiano i numeri faccio un altro settimeout
    setTimeout(() => {
            numContainer.classList.add("d-none")
    }, 3000);

    setTimeout(() => {
        let j = 0;
        for (let i = 0; i<5; i++){
            numUtente[i] = prompt("inserisci i numeri che ti ricordi, vai con il numero: " + (i+1));

            if (randomArray.includes(parseInt(numUtente[i]))){
                contaCorrette += 1;
                arrayNumCorretti[j] = numUtente[i];
                j += 1;
            }
        }
        // stampo i numeri trovati
        const numGiustiEl = document.querySelector(".numGiusti")
        numGiustiEl.innerHTML = `Hai trovato ${contaCorrette} numeri giusti, ed essi sono ${arrayNumCorretti}`
        console.log(contaCorrette);
        console.log(arrayNumCorretti);
    }, 3500);
    
})



function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}