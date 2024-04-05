//import { Button } from "./components/Button.js"
//import { Client } from './client.js';
// import { Player } from './components/Player.js';
// const Player = require('./components/Player.js').Player;

var Game = {
    playerSpeed : 300,
    clickEnabled : true,
    player : null,
    alive : true,
    charactersPool: {},
}
var orientationsDict = {
    1: 'left',
    2: 'up',
    3: 'right',
    4: 'down'
};
Game.init=function(){
    Game.easystar = new EasyStar.js();
}
Game.preload=function(){
    console.log("Soy preload");
     // this.game.scene.start("home");
     this.load.atlas('atlas1', 'images/assets/sprites/atlas1.png', 'images/assets/sprites/atlas1.json'); // PNJ, HUD, marker, achievements ...
     this.load.image("tiles", "images/mapas/cofre_rakkan/tilesheet.png");
     this.load.tilemapTiledJSON("home", "images/mapas/cofre_rakkan/home.json");
     this.load.spritesheet("player", "images/mapas/demo/characters.png", {
      frameWidth: 26,
      frameHeight: 36,
    });

  }
Game.create=function(){
    // const cloudCityTilemap = this.make.tilemap({ key: "home" });
    // cloudCityTilemap.addTilesetImage("home", "tiles");
    // for (let i = 0; i < cloudCityTilemap.layers.length; i++) {
    //   const layer = cloudCityTilemap
    //     .createLayer(i, "home", 0, 0)
    //   layer.setDepth(i);
    //   layer.scale = 1.5;
    // }
    console.log("create in game",this);
    Game.displayMap(this);
    Game.HUD = this.add.group();
    Game.HUD.add(this.add.sprite(this.game.config.width/2, this.game.config.height/2, 'atlas1','border')); // Adds the gray border of the game




    Game.client = new Client(this);
    Game.client.requestData();

  }
Game.upload=function(time,alpha){

  }
Game.moveCharacter=function(id,end,orientation,delta){
  console.log("move character...");
  // var character = Game.charactersPool[id];
  // console.log(character);
}
Game.initWorld=function(data,e){
    console.log("init world xdd");
    console.log(e);
    Game.displayHero(150,150,1,e);

  }
Game.displayHero=function(x,y,id,e){
    console.log("display hero ...",e);
    this.player = this.newPlayer(x,y,id,e);
    Game.player.setIsPlayer(true);
  }
Game.newPlayer=function(x,y,id,e){
    return new Player(x,y,id,e);
  }
Game.displayLoadingScreen=function(){
    this.loadingShade = this.add.graphics(0, 0);
    console.log("this.loadingShade",this.loadingShade);
  //  this.loadingShade.beginFill(0,1);
  }
Game.displayMap=function(e){
  console.log("game",e);
    Game.groundMapLayers = e.add.group();
    Game.highMapLayers = e.add.group();
    // const cloudCityTilemap = Game.make.tilemap({ key: "home" });
    Game.map = e.make.tilemap({key: "home"});
    // cloudCityTilemap.addTilesetImage("home", "tiles");
    Game.map.addTilesetImage("home", "tiles");

    for (let i = 0; i < Game.map.layers.length; i++) {
      const layer = Game.map
        .createLayer(i, "home", 0, 0)
      layer.setDepth(i);
      layer.scale = 1.5;
      // Game.map.layers[i].setInteractive();
    }
    console.log("Game.map.layers[0]",Game.map.layers[0]);
    // console.log("Game.map.layers[0]",Game.map.layers[0]);
    Game.map.layers[0].inputEnabled = true;
    //Game.map.layer[0].input.on('pointerdown', Game.handleMapClick);
    // Game.map.gameLayers[0].events.onInputUp.add(Game.handleMapClick, Game);
    // Game.input.on(Game.map.layers[0],Game.handleMapClick(Game));
    //Game.input.on('pointerdown', () => console.log('click')); //ok
    e.input.on('pointerdown', (layer)=>{
    //  console.log(Game);
      Game.handleMapClick(layer);
    });
    // Game.map.gameLayers[0].setInteractive();
  }
Game.enableClick=function(){
    this.clickEnabled = true;
  }
Game.disableClick=function(){
    this.clickEnabled = false;
  }
Game.handleClick=function(){
    if(this.clickEnabled){
      this.disableClick();
      return true;
    }
    return false;
  }
Game.handleMapClick=function(layer){

    console.log('click mapa');
    console.log("velocidad",this.playerSpeed);
    console.log("layer x-->",layer.downX);
    console.log("layer y-->",layer.downY);

    if(this.handleClick()){
      //verificamos colisiones
      let mov = true;
      if(mov){
        console.log("moviendose....",this);
        let end =  this.computeTileCoords(layer.downX,layer.downY);
        console.log("end",end);

        this.player.prepareMovement(end, 0, {action: 0}, 0, true, this);

      }
    }
  }

Game.computeTileCoords=function(x,y){
    //console.log("calculando x,y ->"+x+","+y);

    // var layer = this.map.layers[0].tilemapLayer;
    // return [layer.worldToTileX(x),layer.worldToTileY(y)];
    let aux_x = Math.ceil(x/32);
    let aux_y = Math.ceil(y/32);
    return [aux_x,aux_y];
  }
Game.startHome=function(game){

    game.scene.start("home");
  }
  // handlePlayerClick(moster){
  //   conssole.log("handle player click");
  //   if (this.handleClick()) {
  //    // this.messageIn("handlePlayerClick");
  //      // monster is the sprite that was clicked on
  //      // var end = this.computeTileCoords(monster.x, monster.y);
  //      // var action = {
  //      //     action: 5, // pvp
  //      //     id: monster.id
  //      // };
  //      // this.player.prepareMovement(end, 0, action, 0, true); // true : send path to server
  //  }
  // }
