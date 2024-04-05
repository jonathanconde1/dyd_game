//import { Button } from "./components/Button.js";

var Home = {
    maxNameLength : 20 // max length of the name of the player

};

  Home.init=function(){
    console.log("function init : ",this.game.device.os.desktop);
    console.log(this);
    // if(this.game.device.os.desktop==false){
    //   console.log('W : '+window.screen.width+', H : '+window.screen.height);
    //   if(Math.min(window.screen.width,window.screen.height) < this.game.width) { // If at least one of the two screen dimensions is smaller for the this.game, enable asking for device reorientation
    //         this.game.scale.scaleMode = Phaser.Scale.RESIZE;
    //
    //         //this.game.scale.forceOrientation(true,false);
    //   }
    //   // this.game.scale.scaleMode = Phaser.Scale.RESIZE;
    //   // console.log("this.game.scale.scaleMode",this.game.scale.scaleMode);
    //
    //   this.game.add.plugin(PhaserInput.Plugin);
    //   this.game.isNewPlayer = Client.isNewPlayer();
    // }

  }
  Home.preload= function(){
    console.log("preload ...");
    console.log(this);
    this.load.image("logo","images/assets/sprites/dyd2.png");
     this.load.atlas('atlas1', 'images/assets/sprites/atlas1.png', 'images/assets/sprites/atlas1.json'); // PNJ, HUD, marker, achievements ...
     this.load.atlas('atlas3', 'images/assets/sprites/atlas3.png', 'images/assets/sprites/atlas3.json'); // Items, weapons, armors
     this.load.json('db', 'images/assets/json/db.json');




  }
  Home.create=function(){
    if(this.game.device.desktop == false)
    {
       this.scale.enterIncorrectOrientation.add(this.game.displayOrientationScreen, this);
       this.scale.leaveIncorrectOrientation.add(this.game.removeOrientationScreen, this);
     }
     console.log("create this");
     console.log(this);
     Home.displayHomeScroll(this);
     Home.displayLogo(this);

     // console.log("start game")
     // this.startGame();
    //  this.game.scene.start("game");
  //  this.scene.start("game");

  }
  Home.displayHomeScroll=function(e){
    console.log("e",e);
    console.log("display scroll",this);
    Home.makeHomeContainer(e);
  }
  Home.displayLogo=function(e){
    // console.log("display logo");
    Home.logo = e.add.sprite(0, 20,'logo');
    // Home.logo = this.add.sprite(0, 20, 'atlas1','logo');

    // console.log(Home.logo);
    Home.logo.setOrigin(0.5,0);
    // console.log(Home.logo);
    Home.logo.x = e.game.config.width/2;
    // console.log(this.game.config.width);
    // Home.logo.hideTween = this.add.tween(Home.logo);
    // Home.logo.hideTween.to({alpha: 0}, Phaser.Timer.SECOND*0.2);
  }
  Home.makeHomeContainer=function(e){
    console.log("makehomecontainer e",e)
    Home.container = this.makeContainer(e);
    var buttonY = 220;
    Home.button = this.makeButton(e,Home.container,buttonY,'Start Game',this.startGame);

  }
  Home.makeButton=function(e,scroll,buttonY,label,callback){
    console.log("creando un boton",Button);
    // const button =
    const button = new Button(e,e.game.config.width/2, buttonY, label, this, callback);
    // scroll.add(button);
    // const button = scroll.add(new Button(0,0,'Start game', this, ()=> console.log('button')));
    //var button = scroll.add(this.add.sprite(210,buttonY, 'atlas1',callback, this, frame+'_0', frame+'_0', frame+'_1'));
  //   const button = scroll.add(this.add.text(100,100,"start"
  //
  // ).setOrigin(0.5)
  //   .setPadding(10)
  //   .setStyle({ backgroundColor: '#111' })
  //   .setInteractive({ useHandCursor: true })
  //   .on('pointerdown', this.startGame())
  //   .on('pointerover', () => startButton.setStyle({ fill: '#f39c12' }))
  //   .on('pointerout', () => startButton.setStyle({ fill: '#FFF' })));
    // button.x = scroll.width/2;
    // button.anchor.set(0.5,0);
    // button.input.useHandCursor = false;
    return button;
  }
  Home.makeContainer=function(e){
    console.log("game---",e);
    var scroll = e.add.sprite(0,0,'atlas1','scroll_1');
    scroll.x = e.game.config.width/2 - scroll.width/2;
    scroll.y = e.game.config.height/2 - scroll.height/2;
    // var container = this.add.container(scroll.x,scroll.y);
    var container = e.add.container(350,225);
    // console.log("scroll",scroll);
    container.add([scroll, e.add.sprite(-225,70,'atlas1','scroll_3'),e.add.sprite(500,70,'atlas1','scroll_2')]);

    // scroll.addChild(this.add.sprite(scroll.width,0,'atlas1','scroll_2'));
    container.fixedToCamera = true;
    // container.alpha = 0;
    // container.visible = false;
    return container;
  }
  Home.startGame=function(game){
    console.log("start Game",game);
    game.scene.start("game");
  }
