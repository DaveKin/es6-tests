import Logger from '../../src/adapter/world/logger.js'
import Card from '../../src/adapter/cards/card.js'
import Deck from '../../src/adapter/cards/deck.js'

describe('Card Deck acceptance test', () => {
    const DEBUGGING = true // TOGGLE TO SEE CONSOLE OUTPUT OF Logger

    let logs, logger, clock
    let card, deck

    beforeEach(() => {
        clock = sinon.useFakeTimers()

        logs = []

        const logger = new Logger((log) => {
            DEBUGGING && console.log(log)
            logs.push(log)
        })

        card = new Card({logger:logger, cardSuit: 'Pirates', cardValue: 'pieces of eight'})
        deck = new Deck({
            logger: logger,
            cards: [
                new Card({logger:logger, cardSuit: 'Ninjas', cardValue: 'shuriken'}),
                new Card({logger:logger, cardSuit: 'Pirates', cardValue: 'booty'}),
                new Card({logger:logger, cardSuit: 'Robots', cardValue: 'battery'}),
                new Card({logger:logger, cardSuit: 'Ninjas', cardValue: 'katana'})
            ]
        })
    })

    afterEach(() => {
        clock.restore()
    })

    describe('the card', () => {
        it('should return the suit "Pirates"', () => {
            card.getSuit().should.equal('Pirates')
        })
        it('should return the value "pieces of eight"', () => {
            card.getValue().should.equal('pieces of eight')
        })
    })
    describe('the deck', () => {
        it('should have 4 cards', () => {
            deck.getCount().should.equal(4)
        })
        it('should allow card to be inserted', () => {
            deck.insert(card)
            deck.getCount().should.equal(5)
        })
    })
})