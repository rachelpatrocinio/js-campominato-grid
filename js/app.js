console.log("JS-CAMPIONATO-GRID");

//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// CREO UNA VARIABILE CHE MI DICA QUANTE CELLE DEVO CREARE
let size = 10;
const numOfCells = size * size;

// CON UN CICLO PRENDO OGNI SINGOLA CELLA
for(let i = 0; i < numOfCells; i++){
    const num = i + 1; 
    console.log(num); // DA 1 A 100

    //L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
    // RECUPERO IL BOTTONE DAL DOM
    const playBtn = document.querySelector(".play-btn");
    console.log(playBtn);
    // MI METTO IN ASCOLTO DEL CLICK SUL BOTTONE
    playBtn.addEventListener("click", function(){
        // AL CLICK GENERO UNA GRIGLIA
        // 1. RECUPERO IL CONTENITORE PADRE CHE DOVRA' CONTENERE LA GRIGLIA
        const gridElement = document.querySelector(".grid");
        console.log(gridElement);
        // 2. CREO L'ELEMENTO OGGETTO CHE DOVRO' APPENDERE NEL CONTENITORE PADRE
        const gridCell = document.createElement("div");
        // 2A. AGGIUNGO UNA CLASSE ALL'ELEMENTO OGGETTO
        gridCell.className ="grid-cell";
        // 3. APPENDO L'ELEMENTO OGGETTO AL CONTENITORE PADRE
        gridElement.append(gridCell);
        // 4. INSERISCO IL NUMERO ALL'INTERNO DELL'ELEMENTO OGGETTO.
        gridCell.innerHTML += num;
    })
}

//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.