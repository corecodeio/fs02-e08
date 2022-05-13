"use strict";
function sum(a, b) {
    return a + b;
}
let x = sum(1, 1);
const song = {
    author: 'Chente',
    name: 'Celos',
};
const song2 = {
    author: 'Dualipa',
    name: 'Hi',
};
class Song {
    constructor(a, n) {
        this.author = a;
        this.name = n;
        this.description = `${this.author} - ${this.name}`;
    }
    play() {
        return `Playing... ${this.description}🎶`;
    }
}
let c = new Song('Chente', 'Celos');
console.log(c.author);
let h = new Song('Dualipa', 'Hi');
console.log(h.play());
let m = new Song('Maroon5', 'Payphone');
