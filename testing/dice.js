// const Dice = require("../app/server/Dice.js").Dice;
//
//
// // Ejemplo de uso
// const d20 = new Dice(4, 20); // Crear cuatro dados de veinte caras
// console.log(d20.roll()); // Tirar los dados y mostrar los resultados


// result [ 1, 6, 14, 6 ]

const Dice = require("../app/server/component/DiceComponent.js").DiceComponent;
// Ejemplo de uso
const d20 = new Dice(4, 20); // Crear cuatro dados de veinte caras
console.log(d20.roll()); // Tirar los dados y mostrar los resultados
