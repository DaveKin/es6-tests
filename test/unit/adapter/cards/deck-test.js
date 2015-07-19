import Deck from '../../../../src/adapter/cards/deck.js'
let deck

beforeEach(() => {
    deck = new Deck({
    	logger: { shout: () => {} },
        cards: ['J A','3 X','Y T']
    })
})

describe('Deck', () => {
    describe('getCount', () => {
        it('should return number of the cards in the deck', () => {
            deck.getCount().should.equal(3)
        })
    })
    describe('deal', () => {
        it('should return the first card from the deck', () => {
            deck.deal().should.equal('J A')
        })
    })
    describe('shuffle', () => {
        it('should randomly reorder the cards in the deck', () => {
            let order = deck.cards
            let countCheck = deck.getCount()
            deck.shuffle()
            deck.cards.should.not.equal(order)
            deck.getCount().should.equal(countCheck)
        })
    })
    describe('insert', () => {
        it('should increase the deck size by 1', () => {
            let count = deck.getCount()
            deck.insert('T C')
            deck.getCount().should.equal(count + 1)
        })
    })
})