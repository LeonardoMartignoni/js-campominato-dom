// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).


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
    generateGrid(gridElement, gridDimension, squareClass);

})

/**
 * Function that generates a dynamic grid with given HTMLElement and dimension
 * 
 * @param {HTMLElement} grid 
 * @param {number} dimension 
 * @param {string} cellclass
 */

// Creo una funzione per generare una griglia
function generateGrid(grid, dimension, cellclass) {

    let squareGrid;

    // Creo un ciclo che si ripete per la dimensione della griglia, così da metterci gli square
    for (let i = 0; i < dimension; i++) {

        // Creo un <div> con classe .square
        squareGrid = document.createElement('div');
        squareGrid.classList.add('square', cellclass);
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

/**
 * Function that generates random bombs numbers
 * 
 * @param {number} dimension 
 * @returns Bombs number
 */

function generateBombs(dimension) {
    // Inizializzo un'array dove inserire i numeri delle bombe
    const bombsNum = [];

    // Fino a quando non ci sono 10 numeri dentro l'array ripeto il ciclo
    while (bombsNum.length < 10) {
        const bombs = Math.floor(Math.random() * dimension) + 1;

        // Se l'array NON include il numero appena generato
        if (!bombsNum.includes(bombs)) {

            // Pusho il numero nell'array
            bombsNum.push(bombs);
        }
    }
    return bombsNum;
}