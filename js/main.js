
const gridElement = document.getElementById('test');
console.log(gridElement);

const arrayNum = writeNumber(1, 100);
console.log(arrayNum);



//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.


document.getElementById("test").style.display ="none";

function openTest() {
    document.getElementById("test").style.display = "block";
}

document.getElementById('btn').addEventListener('click', openTest);

//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Ogni cella ha un numero progressivo, da 1 a 100.
for (let i = 0; i < 100; i++){

    const newSquare = createGridSquare("div", "square");

    newSquare.addEventListener("click",
        function(){
            newSquare.classList.add("clicked-true");
            console.log(newSquare);
        }
    ); 

    gridElement.append(newSquare);


}


//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.














//Funzioni
function createGridSquare(tagType, classToAdd){
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
};



//Funzione che crea i numeri da 1 a 100 in ordine crescente
function writeNumber (min, max){
    const numeriArr = [];

    for (let i = 1; i <= 100; i++){
        console.log([i]);
    }

    return numeriArr; 

}