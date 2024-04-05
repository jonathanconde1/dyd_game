// import { Home } from './home.js';
// import { Game } from './game.js';
// import { Client } from '../Client.js';
// import { Ruta1 } from './ruta1.js';

const CANVAS_WIDTH = 980;
const CANVAS_HEIGHT = 500;

//console.log("Client",Client);
const config = {

    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene: [Home,Game],
    scale: {
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    backgroundColor: "#48C4F8"
};

const game = new Phaser.Game(config);
//game.add.plugin(PhaserInput.Plugin);
//console.log("game device",game.device.desktop);
