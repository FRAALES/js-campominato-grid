const gridElement = document.getElementById('grid');
console.log(gridElement);



//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
document.getElementById("test").style.display ="none";

function openTest() {
    document.getElementById("test").style.display = "block";
}

document.getElementById('btn').addEventListener('click', openTest);


//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


for (let i = 0; i < 100; i++){


    const newSquare = createGridSquare();


}











//Funzioni

function createGridSquare(){
    const newElement = document.createElement("div");
    newElement.classList.add("square");
    return newElement;
}