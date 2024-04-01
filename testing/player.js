const Player = require("../app/server/entity/Player.js").Player;
const PositionComponent = require("../app/server/component/PositionComponent.js").PositionComponent;

let player = new Player(1);

player.saludo();

player.addComponent(new PositionComponent(20,40));

// console.log(player.components);
console.log(player.getComponent({name: 'PositionComponent'}));

// console.log("player",player);
