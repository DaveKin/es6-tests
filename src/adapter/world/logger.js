
export default class Logger {
    /** @param {function} fire */
    constructor(fire) {
        this.fire = fire
    }

    /**
     * @param {*} source
     * @param {string} message
     */
    shout(source, message) {
        this.fire(`[${source.constructor.name}] ${message}`)
    }
}