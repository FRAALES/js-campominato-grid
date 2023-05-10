
const gridElement = document.getElementById('test');
console.log(gridElement);

//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.

document.getElementById("test").style.display ="none";

function openTest() {
       document.getElementById("test").style.display = "block";
 }

 document.getElementById('btn').addEventListener('click', openTest);



//Cicliamo i numeri da 1 a 100
for (let i = 1; i <= 100; i++){

    const newSquare = createGridSquare("div", "square");

    gridElement.append(newSquare);

    //stampiamo i numeri da 1 a 100 in console
    console.log([i]);

    //Ogni cella ha un numero progressivo, da 1 a 100.
    let numeroNellaCella = i;
    newSquare.innerHTML = numeroNellaCella;

    //Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata
    const addColorandNumber = document.getElementsByClassName('square');
    
    document.getElementsByClassName("square").addEventListener("click", 
    function() {
        newSquare.classList.add('clicked-true');
      });
    
}






//Funzioni
function createGridSquare(tagType, classToAdd){
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
};



























