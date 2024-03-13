console.log("JS-CAMPIONATO-GRID");

//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
    // RECUPERO IL BOTTONE DAL DOM
    const playBtn = document.querySelector(".play-btn");
    console.log(playBtn);
    // MI METTO IN ASCOLTO DEL CLICK SUL BOTTONE
    playBtn.addEventListener("click", function(){
        // AL CLICK GENERO UNA GRIGLIA
        // 1. RECUPERO L'ELEMENTO CHE DOVRA' CONTENERE LA GRIGLIA
        const gridElement = document.querySelector(".grid");
        console.log(gridElement);
        // 2. CREO L'ELEMENTO OGGETTO CHE DOVRO' APPENDERE NEL CONTENITORE PADRE
        const gridCell = document.createElement("div");
        gridCell.className ="grid-cell";
        // 3. APPENDO L'ELEMENTO OGGETTO AL CONTENITORE PADRE
        gridElement.append(gridCell);
    })

//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.