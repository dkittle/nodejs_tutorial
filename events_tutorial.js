const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (num1, num2)=>{
    console.log("sum is " + (num1 + num2));
});

eventEmitter.emit("tutorial", 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let don = new Person("Don");
let neha = new Person("Neha");

don.on("name", ()=> {
    console.log("My name is " + don.name);
})
neha.on("name", ()=>{
    console.log("My name is " + neha.name);
})
don.emit("name");
neha.emit("name");
