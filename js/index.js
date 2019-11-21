// const path = require('./path')

// Constants

const stock = {
    top: 30,
    left: 30
}

const talon = {
    top: 215,
    left: 30
}

const foundation = {
    top: 30,
    // FOUNDATION_POSITION = (MARGIN + CARD_OFFSET * 3, MARGIN)
}

const tableaux = {
    top: 30,
    left: 300
}

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
        this.position = []
    }
}

class Hand {
    constructor() {
        this.cards = []
    }
}

class Game {
    constructor(deck) {
        this.visible = true;
        this.stock = deck;
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
        for (let j = 0; j < 7; j++) {
            this.tableaux[j].push(this.stock[0])
        }
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
    new Card("spades", 1, "black", "../images/AS.png"),
    new Card("spades", 2, "black", "../images/2S.png"),
    new Card("spades", 3, "black", "../images/3S.png"),
    new Card("spades", 4, "black", "../images/4S.png"),
    new Card("spades", 5, "black", "../images/5S.png"),
    new Card("spades", 6, "black", "../images/6S.png"),
    new Card("spades", 7, "black", "../images/7S.png"),
    new Card("spades", 8, "black", "../images/8S.png"),
    new Card("spades", 9, "black", "../images/9S.png"),
    new Card("spades", 10, "black", "../images/10S.png"),
    new Card("spades", 11, "black", "../images/JS.png"),
    new Card("spades", 12, "black", "../images/QS.png"),
    new Card("spades", 13, "black", "../images/KS.png"),
    new Card("hearts", 1, "red", "../images/AH.png"),
    new Card("hearts", 2, "red", "../images/2H.png"),
    new Card("hearts", 3, "red", "../images/3H.png"),
    new Card("hearts", 4, "red", "../images/4H.png"),
    new Card("hearts", 5, "red", "../images/5H.png"),
    new Card("hearts", 6, "red", "../images/6H.png"),
    new Card("hearts", 7, "red", "../images/7H.png"),
    new Card("hearts", 8, "red", "../images/8H.png"),
    new Card("hearts", 9, "red", "../images/9H.png"),
    new Card("hearts", 10, "red", "../images/10H.png"),
    new Card("hearts", 11, "red", "../images/JH.png"),
    new Card("hearts", 12, "red", "../images/QH.png"),
    new Card("hearts", 13, "red", "../images/KH.png"),
    new Card("clubs", 1, "black", "../images/AC.png"),
    new Card("clubs", 2, "black", "../images/2C.png"),
    new Card("clubs", 3, "black", "../images/3C.png"),
    new Card("clubs", 4, "black", "../images/4C.png"),
    new Card("clubs", 5, "black", "../images/5C.png"),
    new Card("clubs", 6, "black", "../images/6C.png"),
    new Card("clubs", 7, "black", "../images/7C.png"),
    new Card("clubs", 8, "black", "../images/8C.png"),
    new Card("clubs", 9, "black", "../images/9C.png"),
    new Card("clubs", 10, "black", "../images/10C.png"),
    new Card("clubs", 11, "black", "../images/JC.png"),
    new Card("clubs", 12, "black", "../images/QC.png"),
    new Card("clubs", 13, "black", "../images/KC.png"),
    new Card("diamonds", 1, "red", "../images/AD.png"),
    new Card("diamonds", 2, "red", "../images/2D.png"),
    new Card("diamonds", 3, "red", "../images/3D.png"),
    new Card("diamonds", 4, "red", "../images/4D.png"),
    new Card("diamonds", 5, "red", "../images/5D.png"),
    new Card("diamonds", 6, "red", "../images/6D.png"),
    new Card("diamonds", 7, "red", "../images/7D.png"),
    new Card("diamonds", 8, "red", "../images/8D.png"),
    new Card("diamonds", 9, "red", "../images/9D.png"),
    new Card("diamonds", 10, "red", "../images/10D.png"),
    new Card("diamonds", 11, "red", "../images/JD.png"),
    new Card("diamonds", 12, "red", "../images/QD.png"),
    new Card("diamonds", 13, "red", "../images/KD.png")
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