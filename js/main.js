const gridElement = document.getElementById('test');
console.log(gridElement);



//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
document.getElementById("test").style.display ="none";

function openTest() {
    document.getElementById("test").style.display = "block";
}

document.getElementById('btn').addEventListener('click', openTest);


//Ogni cella ha un numero progressivo, da 1 a 100.
for (let i = 0; i < 100; i++){


    const newSquare = createGridSquare();

    gridElement.append(newSquare);


}


//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.














//Funzioni

function createGridSquare(){
    const newElement = document.createElement("div");
    newElement.classList.add("square");
    return newElement;
}