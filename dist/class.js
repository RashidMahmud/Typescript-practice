"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} is making sound: ${this.sound}`);
    }
}
const dog = new Animal("Carlo", "Dog", "Gew Gew");
// Call the method
dog.makeSound();
// If you want to access the sound property:
console.log(dog.sound);
//# sourceMappingURL=class.js.map