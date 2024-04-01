const Component = require('./Component').Component;

class PositionComponent extends Component{
  constructor(x, y){
    super();
    this.x = x;
    this.y = y;
  }

  getPosition(){
    return {x:this.x, y: this.y};
  }
}

module.exports.PositionComponent = PositionComponent;
