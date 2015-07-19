import Card from '../../../../src/adapter/cards/card.js'
let card

beforeEach(() => {
    card = new Card({
    	logger: { shout: () => {} },
    	faceUp: true,
    	cardSuit: 'A',
    	cardValue: 'J'
    })
})

describe('Card', () => {
    describe('getSuit', () => {
        it('should output the card suit', () => {
            card.getSuit().should.equal('A')
        })
    })
    describe('getValue', () => {
        it('should output the card value', () => {
            card.getValue().should.equal('J')
        })
    })
    describe('getCardName', () => {
        it('should output "J A"', () => {
            card.getCardName().should.equal('J A')
        })
    })
    describe('look', ()=>{
    	it('should return the card name if the card is face up', () => {
    		card.look().should.equal('J A')
    	})
    	it('should return "can\'t tell" if the card is face down', () => {
    		card.faceUp = false
    		card.look().should.equal('can\'t tell')

    	})
    })
    describe('peek', () =>{
    	it('should return the card name', () => {
    		card.peek().should.equal('J A')
    	})
    })
})