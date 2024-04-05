
function Client (scene) {
  // const name = "demo"

    this.name = "DEMOOO";
    this.socket = io();
    this.game = game;
// console.log("scene ",scene);
// console.log("game ",game);
    this.socket.on('init',function(data){
      console.log("saludo",scene);
      Game.initWorld(data,scene);
      // console.log(game.ini);
    });

    this.socket.on('reset',function(data){
      console.log("move player. ...");
      Game.moveCharacter(Game.player.id,data,0,Game.latency);
    });


}

Client.prototype.init=function(){
    console.log("init client");
  }
Client.prototype.getInitRequest=function(){
    let id = 1;
    let server = true;
    return {new:false,id:id,server:server,clientTime:Date.now()};
  }
Client.prototype.requestData=function(){
    console.log("inicio de pedido de datos del servidor",this.getInitRequest());
    this.socket.emit('init-world',this.getInitRequest());
}
Client.prototype.sendPath = function(path,action,finalOrientation){
  console.log("enviando data ...");
  this.socket.emit('path',{
        path:path,
        action:action,
        or:finalOrientation
      });
}
