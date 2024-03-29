// const path = require('./path')

// Classes 

// class GameObjects {

// }

class Foundations {
    constructor() {
        // this.image = path.join(__dirname, '../images/empty_card.png');
        this.suit;
        this.cards = []
    }

    // addCards = () => {
        //
    // }

    // canAddCards = () => {
        //
    // }

    // canAddCardsByValue = () => {
        //
    // }

    // getBounds = () => {
        //
    // }

    // update = () => {
        //
    // }

    // render = () => {
        //
    // }
}

class Tableaux {
    constructor() {
        // this.image = path.join(__dirname, '../images/empty_card.png');
        this.cards = []
    }
}

class Talon {
    constructor() {
        this.cards = []
    }
}

class Hand {
    constructor() {
        this.cards = []
    }
}

class Game {
    constructor() {
        this.visible = true;
        this.stock = [];
        this.foundations = [];
        for (let i = 0; i < 4; i++) {
            this.foundations.push(new Foundations());
        }
        this.tableaux = [];
        for (let j = 0; j < 7; j++) {
            this.tableaux.push(new Tableaux());
        }
        this.talon = new Talon()
        this.hand = new Hand()
    }
    setupTableaux() {
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < i + 1; j++) {
                let shifted = allCards.shift()
                this.tableaux[i].cards.push(shifted) 
                if (j == i) {
                    shifted.flipped = true;
                }
            }
        }
        this.stock = allCards
    }   
}

class Card {
    constructor(suit, value, color, src) {
        this.visible = true;
        this.flipped = false;
        this.suit = suit
        this.value = value
        this.color = color
    }
    // loadImages() {
    //     console.log(images)
    // }
}

// Functions outside of classes

const resetStock = () => {
    if (game.stock.length == 0) {
        // for(let i = 0; i < game.talon.length; i++) {
        //     game.stock.push(game.talon)
        // }
        // game.talon = []
        console.log()
        document.getElementById("stockImage").src = `images/circle.png`
        console.log("Hello")
        game.stock = game.talon.cards
        // set cards back to flipped = false
        game.talon = [] 
    }
}

// move if to global

const shuffle = (array) =>  {
    array.sort(() => Math.random()-0.5);
    return array 
}

const generateGame = () => {
    for (let i = 0; i < 7; i++) {    
        let list = document.createElement("Li");
        for (let j = 0; j < i+1; j++) {
            let image = document.createElement("img");
            image.className = "cardImage"
            if (i != j) {
                console.log("not turned")
                image.src = `images/card_back.png`
            }
            else {
                console.log("turned")
                image.src = `images/${game.tableaux[i].cards[j].value}${game.tableaux[i].cards[j].suit}.png`;
            }
            list.appendChild(image);
            list.id = "image"
            document.getElementById("tableau").appendChild(list);
        }
    }

    // All top cards display with below code

    // for (let i = 0; i < 7; i++) {
    //     document.getElementById(`tableau${i+1}Image`).src = `images/${game.tableaux[i].cards[i].value}${game.tableaux[i].cards[i].suit}.png`
    // }

    // let testDiv = document.getElementById("tableaux")
    // console.log(testDiv.offsetTop)
    // testDiv.offsetTop = testDiv.offsetTop + 1000;
    // console.log(testDiv.offsetTop)
}

let allCards = [
    new Card("S", "A", "black"),
    new Card("S", 2, "black"),
    new Card("S", 3, "black"),
    new Card("S", 4, "black"),
    new Card("S", 5, "black"),
    new Card("S", 6, "black"),
    new Card("S", 7, "black"),
    new Card("S", 8, "black"),
    new Card("S", 9, "black"),
    new Card("S", 10, "black"),
    new Card("S", "J", "black"),
    new Card("S", "Q", "black"),
    new Card("S", "K", "black"),
    new Card("H", "A", "red"),
    new Card("H", 2, "red"),
    new Card("H", 3, "red"),
    new Card("H", 4, "red"),
    new Card("H", 5, "red"),
    new Card("H", 6, "red"),
    new Card("H", 7, "red"),
    new Card("H", 8, "red"),
    new Card("H", 9, "red"),
    new Card("H", 10, "red"),
    new Card("H", "J", "red"),
    new Card("H", "Q", "red"),
    new Card("H", "K", "red"),
    new Card("C", "A", "black"),
    new Card("C", 2, "black"),
    new Card("C", 3, "black"),
    new Card("C", 4, "black"),
    new Card("C", 5, "black"),
    new Card("C", 6, "black"),
    new Card("C", 7, "black"),
    new Card("C", 8, "black"),
    new Card("C", 9, "black"),
    new Card("C", 10, "black"),
    new Card("C", "J", "black"),
    new Card("C", "Q", "black"),
    new Card("C", "K", "black"),
    new Card("D", "A", "red"),
    new Card("D", 2, "red"),
    new Card("D", 3, "red"),
    new Card("D", 4, "red"),
    new Card("D", 5, "red"),
    new Card("D", 6, "red"),
    new Card("D", 7, "red"),
    new Card("D", 8, "red"),
    new Card("D", 9, "red"),
    new Card("D", 10, "red"),
    new Card("D", "J", "red"),
    new Card("D", "Q", "red"),
    new Card("D", "K", "red")
]

let deck = shuffle(allCards)
let game = new Game(deck)
game.setupTableaux()
generateGame()

document.getElementById("stock").addEventListener("click", function() {
    let drawnCard = game.stock.shift()
    drawnCard.flipped = true
    console.log(drawnCard)
    game.talon.cards.push(drawnCard)
    document.getElementById("talonImage").src = `images/${drawnCard.value}${drawnCard.suit}.png`
    resetStock()
})

const grab = document.getElementById('image')
const pilesForCards = document.querySelectorAll('.pile')

const dragStart = (e) => {
    console.log("Start")
    let current = e.target
    console.log(current)
}

const dragEnd = () => {
    console.log("end")
}

const dragOver = (e) => {
    e.preventDefault()
    console.log("over")
}

const dragEnter = (e) => {
    e.preventDefault()
    console.log("entered")
}


const dragLeave = (e) => {
    e.preventDefault()
    console.log("leave")
}


const dragDrop = (e) => {
    e.preventDefault()
    console.log("dropped")
    if ((e.screenX > 145 && e.screenX < 245) && (e.screenY > 390 && e.screenY < 540)) {
        console.log("inside if statement")
        // for (let i=0; i <7; i++) { // Loop through tableaux?
        //     let tableau = []
        //     tableau.push(document.getElementById(`tableau${i+1}`))
        //     tableau.appendChild(current[i]) // DOM not created yet, setTimeout
        // }
    }
}

grab.addEventListener('dragstart', dragStart);
grab.addEventListener('dragend', dragEnd);

for(piles of pilesForCards) {
    piles.addEventListener('dragover', dragOver);
    // piles.addEventListener('dragenter', dragEnter);
    // piles.addEventListener('dragleave', dragLeave);
    piles.addEventListener('drop', dragDrop);
  }