// Prendo il bottone dall'HTML
const buttonPlay = document.getElementById('button_play');

// Prendo il messaggio di errore per quando non verrà inserito un livello
const errorText = document.getElementById('error_text');

// Prendo la #grid nell'HTML
const gridElement = document.getElementById('grid');

buttonPlay.addEventListener('click', function () {

    // Prendo il valore della difficoltà
    const getDifficultyLevel = document.getElementById('difficulty_level').value;

    // Inizializzo le variabili per la griglia
    let gridDimension = 0;
    let squareClass = '';

    // Difficoltà facile
    if (getDifficultyLevel == 'easy') {
        // Resetto la griglia
        gridElement.innerHTML = '';
        gridDimension = 100;
        squareClass = 'easy';
    }

    // Difficoltà normale
    else if (getDifficultyLevel == 'normal') {
        // Resetto la griglia
        gridElement.innerHTML = '';
        gridDimension = 81;
        squareClass = 'normal';
    }

    // Difficoltà difficile
    else if (getDifficultyLevel == 'hard') {
        // Resetto la griglia
        gridElement.innerHTML = '';
        gridDimension = 49;
        squareClass = 'hard';
    }

    // Difficoltà non selezionata
    else {
        errorText.innerHTML = 'Error. Please select a level';
    }

    // Invoco la funzione
    generateGrid(gridElement, gridDimension);

    /**
     * Function that generates a dynamic grid with given HTMLElement and dimension
     * 
     * @param {HTMLElement} grid 
     * @param {number} dimension 
     */

    // Creo una funzione per generare una griglia
    function generateGrid(grid, dimension) {

        let squareGrid;

        // Creo un ciclo che si ripete per la dimensione della griglia, così da metterci gli square
        for (let i = 0; i < dimension; i++) {

            // Creo un <div> con classe .square
            squareGrid = document.createElement('div');
            squareGrid.classList.add('square', squareClass);
            squareGrid.innerHTML = i + 1;

            // Inserisco il <div> appena creato nella griglia
            grid.append(squareGrid);

            // Creo un event listener quando si clicca su un quadrato
            squareGrid.addEventListener('click', function () {
                this.classList.toggle('active');

                // Stampo un log con il numero della cella cliccata
                const squareNumber = this.innerHTML;
                console.log(squareNumber + ' cell clicked');

            })
        }
    }
})