// OOP
/**
 *
 * 1. Absraccion
 * 2. Encapsulamiento
 * 3. Herencia
 * 4. Polimorfismo
 *
 */

// MODELAR
// - DESCRIBIR CARACTERISTICAS
// - DESCRIBIR COMPORTAMIENTOS

// Clases

// Ejemplo: Modelar una canción

// Caracteristicas:
// autor
// nombre

// Comportamientos:
// reproducir

function sum(a: number, b: number) {
  return a + b;
}

let x = sum(1, 1); // 2

// objeto = llave, valor
const song = {
  author: 'Chente',
  name: 'Celos',
};

const song2 = {
  author: 'Dualipa',
  name: 'Hi',
};

// Objecto = repositorio de datos

class Song {
  author: string;
  name: string;
  description: string;

  constructor(a: string, n: string) {
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

// const songs = [
//   new Song('Chente', 'Celos'),
//   new Song('Dualipa', 'Hi'),
//   new Song('Maroon5', 'Payphone'),
// ];

// songs.forEach((song: Song) => console.log(song.play()));
