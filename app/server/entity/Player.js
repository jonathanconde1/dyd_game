const Entity = require('./Entity.js').Entity;

class Player extends Entity {
  constructor(id, name){
    super(id);
    this.name
  }

  getName(){
    return this.name;
  }

  saludo(){
    console.log("hola ...");
  }
}

module.exports.Player = Player;
