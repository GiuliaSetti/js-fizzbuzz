// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


/* Creo una variabile let nomeEl = document.getByElementId (id elemento).


- creo un ciclo con variabile index minore di 100.

- creo un elemento di tag div

- con .append() lo attribuisco come figlio di div principale

?SE i è divisibile i % 3 == 0 e i % 5 == 0 la console da FizzBuzz;

    :ALTRIMENTI SE i è divisibile i % 3 == 0 la console da Fizz;

    :ALTRIMENTI SE i è divisibile i % 5 == 0 la console da Buzz;

    :ALTRIMENTI in console si mostrerà i.

*/



let containerEl = document.getElementById("container")

for (let i = 1; i <= 100; i++){

    // creo elemento tag div

    let newEl = document.createElement("div");

    // div figlio di div container

    containerEl.append(newEl);


    // inizio if

    if (i % 3 == 0 && i % 5 == 0){

        // se divisibile per 3 e 5 - FIZZBUZZ

        console.log(i + " divisibili per 3 e 5");

        newEl.innerHTML = "FizzBuzz";

        // aggiunta classe
        
        newEl.classList.add("fizzbuzz");

    } else if (i % 3 == 0){

        // divisibile per 3 - FIZZ

        console.log(i + " divisibili per 3");

        newEl.innerHTML = "Fizz";

        // aggiunta classe

        newEl.classList.add("fizz");

    } else if (i % 5 == 0){
        
        
        // divisibile per 5 - BUZZ
        
        console.log(i + " divisibili per 5");
        
        newEl.innerHTML = "Buzz";

        // aggiunta classe

        newEl.classList.add("buzz");

    } else {

        // il resto dei numeri

        console.log(i);

        newEl.innerHTML = i;

        // aggiunta classe

        newEl.classList.add("standard");

    }

}

