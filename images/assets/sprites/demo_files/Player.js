//import { Factory } from './Factory.js';

function Player (x,y,id,e) {
  // Human.call(this,x,y,id,e)
    // this.anchor.set(0.25,0.35);
    console.log("in player",e);
    this.scene = e;
    this.x = x;
    this.y = y;
    this.maxLife=22;
    this.orientation = 4; // down
    this.speed = Game.playerSpeed;// mala practica pero funciona XD
    this.dialoguesMemory = {};
    // this.maxLife = game.playerLife;
    this.life = this.maxLife;
    this.inFight = false;
    // this.events.onInputUp.add(game.handlePlayerClick, this); // interacion

    // this.playerSprite = Phaser.sprite(game,150,150,"player",1);
    this.sprite = e.add.sprite(150, 150, "player",55);
    this.sprite.setOrigin(0.5,1);
    this.sprite.setOrigin(0.5,1);
    this.sprite.setFrame(55);
    this.sprite.setDepth(2);
    this.sprite.scale = 2.5;

    // this.weapon = game.add.sprite(100,100,'atlas3');
    // this.shadow = game.add.sprite(100,100, 'atlas1','shadow');

    this.nameHolder = e.add.text(100,80, 'demo', {
        font: '14px pixel',
        fill: "#ffffff",
        stroke: "#000000",
        strokeThickness: 2
    })

    this.defaultFrames = {
        // the third value is the frame to come back to at the end of the animation
        "attack_right": [0,4,9],
        "attack_up": [11,15,20],
        "attack_down": [22,26,31],
        "attack_left": [33,37,42],
        "right": [5, 8],
        "up": [16, 19],
        "down": [27, 30],
        "left": [38, 41],
        "idle_right": [9, 10],
        "idle_up": [20, 21],
        "idle_down": [31, 32],
        "idle_left": [42, 43]
    };
}
Player.prototype.constructor = Player;
Player.prototype.setIsPlayer = function(flag){ // sets the isPlayer flag to true or false to indicate if a sprite is the main player or another player
    this.isPlayer = flag;
    // if(this.isPlayer) this.nameHolder.addColor("#f4d442",0);
};
Player.prototype.setPosition = function(position) {
    console.log("setPosition : ",position);
    console.log("get tile pos",this.tilePos);

       this.sprite.setPosition(position.x, position.y);



  }
Player.prototype.prepareMovement=function(end,finalOrientation,action,delta,sendToServer,game){
      // if(!this.alive) return; // si no esta vivo
      // if(!end) return; // si no hay destino
      console.log("this player",this);
      let start = Game.computeTileCoords(this.sprite.x,this.sprite.y);
      /*
      logica del juego 1 x 1
      */
      let diff_x = end[0]-start[0];
      let diff_y = end[1]-start[1];
      if(diff_x<0)diff_x=diff_x*(-1);
      if(diff_y<0)diff_y=diff_y*(-1);
      // console.log("-------------------->diffx",diff_x);
      // console.log("-------------------->diffy",diff_y);
      let aux_end = [start[0],start[1]];
      if(diff_x>diff_y){
        console.log("-----------> mover en x",diff_x+","+diff_y);
        if((end[0]-start[0])>0){
          console.log("sumando 1  en x");
          aux_end[0] = start[0]+1;
        }else {
          aux_end[0] = start[0]-1;
        }
      }else{
        console.log("-----------> moyer en y",diff_x+","+diff_y);
        if(end[1]-start[1]>0){
          aux_end[1] = start[1]+1;
        }else{
          aux_end[1] = start[1]-1;
        }
      }
    console.log("preparando movimiento start ->",start);
    console.log("preparando movimiento end ->",aux_end);
    // this.pathfindingCallback.bind(this,finalOrientation,action,delta,sendToServer)
    let path = [
      {
        x:aux_end[0],
        y:aux_end[1]
      }
    ];
    // path.push(aux_end);
    this.pathfindingCallback(finalOrientation,action,delta,sendToServer,path);

}
Player.prototype.pathfindingCallback=function(finalOrientation,action,delta,sendToServer,path){
  console.log("move sendToServer",sendToServer);

  console.log("client",Client);
  Game.client.sendPath(path,action,finalOrientation);// aqui enviamos a los demoas jugadores

  if(true){
    // if(!sendToServer){
          // Game.messageIn("route-sendToServer = false");
          this.move(path,finalOrientation,action,delta);

  }

}
Player.prototype.move=function(path,finalOrientation,action,delta){
  console.log("movimiento al fin");
  var x_steps = [];
  var y_steps = [];
  console.log("================>",path[0].x);
  // let newpath = [];
  // newpath.push(path)

  for(var q = 0; q < path.length; q++){
    if(path.length<10){
      if(q==(path.length-1)){
        x_steps.push(path[q].x*Game.map.tileWidth);
        y_steps.push(path[q].y*Game.map.tileWidth);
      }
    }else{
      x_steps.push(path[q].x*Game.map.tileWidth);
      y_steps.push(path[q].y*Game.map.tileWidth);
    }
  }
  console.log("x_steps",x_steps[0]);
  console.log("y_steps",y_steps[0]);
// console.log("game",game);
// console.log("scene",this.scene);
// console.log("this",this);
  //this.scene.tweens();
  //var tween = game.add.tween(this);
    this.lastOrientationCheck = 0; // timestamp at which the orientation of the sprite was checked for the last time
    var duration = Math.ceil(Math.max(1,path.length*this.speed - delta)); // duration of the movement, based on player speed, path length and latency
    console.log("duracion",duration);
    // //tween.to({x: x_steps,y:y_steps}, duration);
    // console.log("Game",Game);
    var checkRate = (this instanceof Player ? 0.7 : 0.4);
    let aux = this.sprite.x + 32;
    console.log("proximo ",aux);
    this.scene.tweens.add({
      targets: this.sprite,
      duration: duration,
      x:x_steps[0],
      y:y_steps[0],
      onStart: function(Player){
        console.log("start tweens x->",this.targets);
        if(Date.now() - this.lastOrientationCheck < this.speed*checkRate) return;
        this.lastOrientationCheck = Date.now();
        // if(this.targets[0].x > this.previousPosition.x){ // right
        //     this.orient(3);
        // }else if(this.x < this.previousPosition.x) { // left
        //     this.orient(1);
        // }else if(this.y > this.previousPosition.y) { // down
        //     this.orient(4);
        // }else if(this.y < this.previousPosition.y) { // up
        //     this.orient(2);
        // }
      },
      onComplete: function(){
        console.log("completo.. twenns");
        console.log("this",this);
        Game.enableClick();
      }
    });


}
