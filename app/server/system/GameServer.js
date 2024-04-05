class GameServer{
  constructor(server){
    this.map= null; // object containing all the data about the world map
    this.mapReady= false; // is the server done processing the map or not
    this.AOIwidth= 34; // width in tiles of each AOI ; 6 AOIs horizontally in total
    this.AOIheight= 20; // height in tiles of each AOI ; 16 AOIs vertically in total
    this.players=[];
    this.socketMap=[];
    this.mapUsers=[];
    this.token=null;
    this.modo=0;
    this.nbConnectedChanged= false;
    this.items=[];
    this.playersMap=[];
    this.monsters=[];
    this.lastItemID= 0; // ID of the last item object created
    this.lastMonsterID= 0;
    this.lastPlayerID= 0;
    this.socketMap= {}; // map of socket id's to the player id's of the associated players
    this.IDmap= {};
    this.server = server;
  }

  readMap(){
    console.log("read map ...");
  }

}

module.exports.GameServer = GameServer;
