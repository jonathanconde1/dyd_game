class Dice {
  constructor(numDice, sides) {
    this.numDice = numDice;
    this.sides = sides;
  }

  roll() {
    const results = [];
    for (let i = 0; i < this.numDice; i++) {
      results.push(Math.floor(Math.random() * this.sides) + 1);
    }
    return results;
  }
}

// Ejemplo de uso
// const d20 = new Dice(4, 20); // Crear cuatro dados de veinte caras
// console.log(d20.roll()); // Tirar los dados y mostrar los resultados

module.exports.Dice = Dice;
