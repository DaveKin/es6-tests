export default class Deck {
	constructor(options){
		this.logger = options.logger
		this.cards = options.cards
	}

	getCount(){
		this.logger.shout(this, `count requested [${this.cards.length}]`)
		return this.cards.length
	}
	insert(card){
		this.logger.shout(card, 'inserted')		
		this.cards.push(card)
	}
	deal(){
		return this.cards.shift()
	}
	shuffle(){
		let shuffled = [], rnd = Math.random
		while(this.cards.length > 0){
			let selected = Math.floor(rnd() * this.cards.length)
			shuffled.push(this.cards.splice(selected,1)[0])
		}
		this.cards = shuffled
	}

}