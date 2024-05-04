const database = require('../database/Database').Database;

const Avatar = {
  name:'avatars',
  params:[
    "id serial"
    "user_id INTEGER",
    "name VARCHAR",
    "slots",
    "image",
    "race",
    "class",
    "level",
    "background",
    "alignment",
    "experience_points",
    "force",
    "skill",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
    "inspiration",
    "competition_bonus",
    "salvation_force",
    "salvation_skill",
    "salvation_constitution",
    "salvation_intelligence",
    "salvation_wisdom",
    "salvation_charisma",
    "armor",
    "initiative",
    "speed",
    "hit_points_max",
    "hit_points",
    "temp_hit_points",
    "salvation_success",
    "salvation_failed",
    "status",
    "personality_traits",
    "ideals",
    "links",
    "defects",
    "attributes_default",
    "equipment",
    "competencies",
    "language"
  ]
};

module.exports.Avatar = Avatar;

Avatar.init = function(){
  console.log("name",this.name);
  // database.checkTableAndCreate(this);
}
