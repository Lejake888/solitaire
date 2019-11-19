// Constants

// Classes 

class Foundations {
    constructor() {
        this.image = '../images/empty_card.png';
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

class Game {
    constructor() {
    this.visible = true;
    this.stock = [];
    this.foundations = new Foundations();
    }
}

class Card {
    constructor(suit, value, color) {
        this.visible = true;
        this.flipped = false;
        this.suit = suit
        this.value = value
        this.color = color
    }
}

// Functions outside of classes

const shuffle = (array) =>  {
    array.sort(() => Math.random()-0.5);
    return array 
}

// Card generation

let allCards = [
    new Card("spades", 1, "black"),
    new Card("spades", 2, "black"),
    new Card("spades", 3, "black"),
    new Card("spades", 4, "black"),
    new Card("spades", 5, "black"),
    new Card("spades", 6, "black"),
    new Card("spades", 7, "black"),
    new Card("spades", 8, "black"),
    new Card("spades", 9, "black"),
    new Card("spades", 10, "black"),
    new Card("spades", 11, "black"),
    new Card("spades", 12, "black"),
    new Card("spades", 13, "black"),
    new Card("hearts", 1, "red"),
    new Card("hearts", 2, "red"),
    new Card("hearts", 3, "red"),
    new Card("hearts", 4, "red"),
    new Card("hearts", 5, "red"),
    new Card("hearts", 6, "red"),
    new Card("hearts", 7, "red"),
    new Card("hearts", 8, "red"),
    new Card("hearts", 9, "red"),
    new Card("hearts", 10, "red"),
    new Card("hearts", 11, "red"),
    new Card("hearts", 12, "red"),
    new Card("hearts", 13, "red"),
    new Card("clubs", 1, "black"),
    new Card("clubs", 2, "black"),
    new Card("clubs", 3, "black"),
    new Card("clubs", 4, "black"),
    new Card("clubs", 5, "black"),
    new Card("clubs", 6, "black"),
    new Card("clubs", 7, "black"),
    new Card("clubs", 8, "black"),
    new Card("clubs", 9, "black"),
    new Card("clubs", 10, "black"),
    new Card("clubs", 11, "black"),
    new Card("clubs", 12, "black"),
    new Card("clubs", 13, "black"),
    new Card("diamonds", 1, "red"),
    new Card("diamonds", 2, "red"),
    new Card("diamonds", 3, "red"),
    new Card("diamonds", 4, "red"),
    new Card("diamonds", 5, "red"),
    new Card("diamonds", 6, "red"),
    new Card("diamonds", 7, "red"),
    new Card("diamonds", 8, "red"),
    new Card("diamonds", 9, "red"),
    new Card("diamonds", 10, "red"),
    new Card("diamonds", 11, "red"),
    new Card("diamonds", 12, "red"),
    new Card("diamonds", 13, "red")
]

// shuffles all the cards

let deck = shuffle(allCards)
for (i=0; i < deck.length; i++) {
    console.log(deck[i])
}

// gets coordinate of mouse click

// coordinateCheck = () => {
//     let x = event.clientX;
//     let y = event.clientY;
//     let coords = "X coords: " + x + ", Y coords: " + y;
//     console.log(coords)
// }

let game = new Game()
// game.setTableaux(deck)