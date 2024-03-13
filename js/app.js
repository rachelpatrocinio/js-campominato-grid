console.log("JS-CAMPIONATO-GRID");

//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// RECUPERO IL BOTTONE DAL DOM
const playBtn = document.querySelector(".play-btn");
//console.log(playBtn);
// MI METTO IN ASCOLTO DEL CLICK SUL BOTTONE
// AL CLICK GENERO UNA GRIGLIA
playBtn.addEventListener("click", function(){

    // RECUPERO LA SELECT DAL DOM
    const difficulty = document.getElementById("difficulty");
    console.log(difficulty.value);

    // 1. RECUPERO IL CONTENITORE PADRE CHE DOVRA' CONTENERE LA GRIGLIA
    const gridElement = document.querySelector(".grid");
    //console.log(gridElement);

    gridElement.innerHTML="";

    // con difficoltà HARD (DEFAULT) => 100 caselle DA 1 e 100 (10 x 10)
    // con difficoltà MEDIUM => 81 caselle DA 1 e 81 (9 x 9)
    // con difficoltà EASY => 49 caselle DA 1 e 49 (7 x 7)
    let size = 10;
    let gridClass = 'hard';
    if(difficulty.value === "easy"){
        size = 7;
        gridClass = 'easy';
    }else if(difficulty.value === "medium"){
        size = 9;
        gridClass = 'medium';
    }

    const numOfCells = size * size;

    // CON UN CICLO PRENDO OGNI SINGOLA CELLA
    for(let i = 0; i < numOfCells; i++){
        const num = i + 1; 
        console.log(num);

        
        // 2. CREO L'ELEMENTO OGGETTO CHE DOVRO' APPENDERE NEL CONTENITORE PADRE
        const gridCell = document.createElement("div");
        // 2A. AGGIUNGO LA CLASSE CHE DIA LO STILE ALL'ELEMENTO OGGETTO
        gridCell.className ="grid-cell";
        // 2B. AGGIUNGO LA CLASSE CHE DIA LA DIMENSIONE ALL'ELEMENTO OGGETTO
        
        gridCell.classList.add(gridClass);

        // 3. APPENDO L'ELEMENTO OGGETTO AL CONTENITORE PADRE
        gridElement.append(gridCell);
        // 4. INSERISCO IL NUMERO ALL'INTERNO DELL'ELEMENTO OGGETTO.
        gridCell.innerHTML += num;
        //Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        // MI METTO IN ASCOLTO DEL CLICK SULLA CELLA
        gridCell.addEventListener("click", function(){
            console.log("Hai cliccato la cella", num);
            // QUANDO L'UTENTE CLICCA IL BACKGROUND-COLOR CAMBIERA'
            this.classList.toggle("bg-azzure");
        })
    }
})

