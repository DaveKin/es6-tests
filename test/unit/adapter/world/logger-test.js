import Logger from '../../../../src/adapter/world/logger.js'

describe('Logger', () => {
    describe('shout', () => {
        it('should output the source and the message', () => {
            const fire = sinon.stub()
            const logger = new Logger(fire)
            const caller = { constructor: { name: 'MyClazz'} }

            logger.shout(caller, 'hello')

            fire.should.have.been.calledWith('[MyClazz] hello')
        })
    })
})