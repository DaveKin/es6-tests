export default class Card {

    constructor(options) {
        this.logger = options.logger
        this.faceUp = options.faceUp
        this.cardSuit = options.cardSuit
        this.cardValue = options.cardValue
        this.testVal = 'qwqwrqwr'
    }

    getSuit() {
        this.logger.shout(this, `getSuit [${this.cardSuit}]`)
        return this.cardSuit
    }

    getValue() {
        this.logger.shout(this, `getSuit [${this.cardValue}]`)
        return this.cardValue
    }

    getCardName() {
        this.logger.shout(this, `getCardName [${this.cardValue} ${this.cardSuit}]`)
        return `${this.cardValue} ${this.cardSuit}`
    }

    look(){
        this.logger.shout(this,'looked at the card')
        if(this.faceUp){
            return this.getCardName()
        } else {
            return 'can\'t tell'
        }
    }
    peek(){
        return this.getCardName()
    }
}