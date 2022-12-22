const EventExecuter = require("../handler/eventExecuter.js");
const {EventEmitter} = require("events");
const { Group : Collection } = require( "./structures/dist" );

class CustomEvent extends EventEmitter {
    constructor(client) {
        super(client);
        this.client = client;
        this.commands = new Collection();
        this.client.customEvents = this;
    }

    command(d = {}) {
        if (!d.listen) {
            throw new TypeError(`${d.name} içinde dinleme sağlanmaz`);
        }
        if (!d.code) {
            throw new TypeError(`${d.name} içinde kod sağlanmaz`);
        }

        this.commands.set(d.name, d);
    }

    listen(event) {
        this.on(event, async (...data) => {
            const commands = this.commands.filter(
                (x) => x.listen.toLowerCase() === event,
            );
            EventExecuter(event, this.client, commands, ...data);
        });
    }
}

module.exports = CustomEvent;
