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
        this.src = src
    }
    loadImages() {
        console.log(images)
    }
}

// Functions outside of classes

const shuffle = (array) =>  {
    array.sort(() => Math.random()-0.5);
    return array 
}

// Card generation

let allCards = [
    new Card("S", "A", "black", "../images/AS.png"),
    new Card("S", 2, "black", "../images/2S.png"),
    new Card("S", 3, "black", "../images/3S.png"),
    new Card("S", 4, "black", "../images/4S.png"),
    new Card("S", 5, "black", "../images/5S.png"),
    new Card("S", 6, "black", "../images/6S.png"),
    new Card("S", 7, "black", "../images/7S.png"),
    new Card("S", 8, "black", "../images/8S.png"),
    new Card("S", 9, "black", "../images/9S.png"),
    new Card("S", 10, "black", "../images/10S.png"),
    new Card("S", "J", "black", "../images/JS.png"),
    new Card("S", "Q", "black", "../images/QS.png"),
    new Card("S", "K", "black", "../images/KS.png"),
    new Card("H", "A", "red", "../images/AH.png"),
    new Card("H", 2, "red", "../images/2H.png"),
    new Card("H", 3, "red", "../images/3H.png"),
    new Card("H", 4, "red", "../images/4H.png"),
    new Card("H", 5, "red", "../images/5H.png"),
    new Card("H", 6, "red", "../images/6H.png"),
    new Card("H", 7, "red", "../images/7H.png"),
    new Card("H", 8, "red", "../images/8H.png"),
    new Card("H", 9, "red", "../images/9H.png"),
    new Card("H", 10, "red", "../images/10H.png"),
    new Card("H", "J", "red", "../images/JH.png"),
    new Card("H", "Q", "red", "../images/QH.png"),
    new Card("H", "K", "red", "../images/KH.png"),
    new Card("C", "A", "black", "../images/AC.png"),
    new Card("C", 2, "black", "../images/2C.png"),
    new Card("C", 3, "black", "../images/3C.png"),
    new Card("C", 4, "black", "../images/4C.png"),
    new Card("C", 5, "black", "../images/5C.png"),
    new Card("C", 6, "black", "../images/6C.png"),
    new Card("C", 7, "black", "../images/7C.png"),
    new Card("C", 8, "black", "../images/8C.png"),
    new Card("C", 9, "black", "../images/9C.png"),
    new Card("C", 10, "black", "../images/10C.png"),
    new Card("C", "J", "black", "../images/JC.png"),
    new Card("C", "Q", "black", "../images/QC.png"),
    new Card("C", "K", "black", "../images/KC.png"),
    new Card("D", "A", "red", "../images/AD.png"),
    new Card("D", 2, "red", "../images/2D.png"),
    new Card("D", 3, "red", "../images/3D.png"),
    new Card("D", 4, "red", "../images/4D.png"),
    new Card("D", 5, "red", "../images/5D.png"),
    new Card("D", 6, "red", "../images/6D.png"),
    new Card("D", 7, "red", "../images/7D.png"),
    new Card("D", 8, "red", "../images/8D.png"),
    new Card("D", 9, "red", "../images/9D.png"),
    new Card("D", 10, "red", "../images/A0D.png"),
    new Card("D", "J", "red", "../images/JD.png"),
    new Card("D", "Q", "red", "../images/QD.png"),
    new Card("D", "K", "red", "../images/KD.png")
]
// shuffles all the cards

let deck = shuffle(allCards)
let game = new Game(deck)
game.setupTableaux()

// gets coordinate of mouse click

// coordinateCheck = () => {
//     let x = event.clientX;
//     let y = event.clientY;
//     let coords = "X coords: " + x + ", Y coords: " + y;
//     console.log(coords)
// }

// game.setTableaux(deck)

document.getElementById("stock").addEventListener("click", function() {
    if (game.stock.length == 0) {
        for(let i = 0; i < game.talon.length; i++) {
            game.stock.push(game.talon)
        }
        game.talon = []
    }
    let drawnCard = game.stock.shift()
    console.log(drawnCard)
    game.talon.cards.push(drawnCard)
    document.getElementById("talonImage").src = `images/${drawnCard.value}${drawnCard.suit}.png`
    if (game.stock.length == 0) {
        document.getElementById("stockImage").src = `images/empty_card.png`
    }
})