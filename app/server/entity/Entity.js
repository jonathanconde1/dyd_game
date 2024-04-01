class Entity {
  constructor(id){
    this.id = id;
    this.components = [];
  }

  addComponent(component){
    this.components[component.constructor.name] = component;
  }

  getComponent(componentType){
    return this.components[componentType.name];
  }

}

 module.exports.Entity = Entity;
