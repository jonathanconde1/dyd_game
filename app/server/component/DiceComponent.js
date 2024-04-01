const Component = require('./Component').Component;

class DiceComponent extends Component {
  constructor(numDice, sides) {
    super();
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

module.exports.DiceComponent = DiceComponent;
