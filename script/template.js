/*
Genera templates de avatars en formato JSON
en la ruta app/server/database/
*/
const  JSONdb  =  require ( 'simple-json-db' );
const db = new  JSONdb ( './app/server/database/template_avatar.json' );

// let name

// db.set('demo1',{name:"unico",id:"20"});

/*
  items

    pasivo
    activo
*/

let avatars = [
  {
    user_id:1,
    name:'',
    slots:0,
    image:'undefined.png',
    race:'',
    class:'Seleccione',
    level:0,
    background: '',
    alignment: '',
    experience_points:0,

    force: 0,
    skill: 0,
    constitution: 0,
    intelligence: +0,
    wisdom: +0,
    charisma: +0,

    inspiration: 0,
    competition_bonus: +0,

    salvation_force: +0,
    salvation_skill: 0,
    salvation_constitution: 0,
    salvation_intelligence:0,
    salvation_wisdom:0,
    salvation_charisma:0,

    armor:0,
    initiative:0,
    speed:0,

    hit_points_max:0,
    hit_points:0,
    temp_hit_points:0,

    salvation_success:0,
    salvation_failed:0,
    status:true,

    personality_traits: '',

    ideals: '',

    links:'',

    defects:'',

    attributes_default:[],

    equipment:[],

    competencies:'',

    language:[]

  },
  {
    user_id:1,
    name:'',
    slots:5,
    image:'humano-guerrero.png',
    race:'humano',
    class:'guerrero',
    level:1,
    background: 'noble',
    alignment: 'legal neutral',
    experience_points:0,

    force: +3,
    skill: -1,
    constitution: +2,
    intelligence: +0,
    wisdom: +1,
    charisma: +2,

    inspiration: 0,
    competition_bonus: +2,

    salvation_force: +5,
    salvation_skill: -1,
    salvation_constitution: +4,
    salvation_intelligence: +0,
    salvation_wisdom: +1,
    salvation_charisma: +2,

    armor:17,
    initiative: -1,
    speed:30,

    hit_points_max: 12,
    hit_points:12,
    temp_hit_points:0,

    salvation_success:0,
    salvation_failed:0,
    status: true,

    personality_traits: 'Mis halagos hacen sentirse importantes y '
    +'maravillosos a aquellos con los que hablo. '
    +'Además, no me gusta ensuciarme. Bajo '
    +'ningún concepto me alojaré en dependencias '
    +'inapropiadas a mi alcurnia.',

    ideals: 'Responsabilidad. Los nobles deben proteger '
    +'al pueblo llano, no abusar de ellos.',

    links:'Mi hacha a dos manos es una herencia '
    +'familiar. Se trata, con mucho, de mi posesión '
    +'más preciada.',

    defects:'Me cuesta resistirme a la tentación de las '
    +'riquezas, especialmente el oro. Una gran '
    +'fortuna podría ayudarme a restaurar mi '
    +'legado.',

    attributes_default:[
      'tomar aliento',
      'estilo de combate',
      'posición de privilegio'
    ],

    // attacks:[
    //   "hacha de dos manos",
    //   "jabalina"
    // ],

    equipment:[
      'cota de malla',
      'hacha de dos manos',
      'jabalina',
      'jabalina',
      'jabalina',
      'mochila',
      'manta',
      'yesquero',
      'racion',
      'racion',
      'cantinflora',
      'una muda de ropa de calidad',
      'anillo de sellar',
      'documento que acredita el linaje',
    ],

    competencies:'Todas las armaduras,'
    +'escudos, armas sencillas, armas marciales,'
    +'naipes.',

    language:['común','dracónico','enano']

  },
  {
    user_id:1,
    name:'',
    slots:5,
    image:'enano-clerigo.png',
    race:'enano',
    class:'clerigo',
    level:1,
    background: 'soldado',
    alignment: 'neutral bueno',
    experience_points:0,

    force: +2,
    skill: -1,
    constitution: +2,
    intelligence: +0,
    wisdom: +3,
    charisma: +1,

    inspiration: 0,
    competition_bonus: +2,

    salvation_force: +2,
    salvation_skill: -1,
    salvation_constitution: +2,
    salvation_intelligence: +0,
    salvation_wisdom: +5,
    salvation_charisma: +3,

    armor:18,
    initiative: -1,
    speed:25,

    hit_points_max: 11,
    hit_points:11,
    temp_hit_points:0,

    salvation_success:0,
    salvation_failed:0,
    status: true,

    personality_traits: 'Siempre soy educado y respetuoso. Además, '
    +'no confío en mis instintos, así que suelo '
    +'esperar a que otros actúen primero.',

    ideals: 'Respeto. La gente merece ser tratada con '
    +'dignidad y cortesía.',

    links:'Tengo tres primos: Gundren, Tharden y '
    +'Nundro Rockseeker. Son miembros de mi '
    +'clan y buenos amigos.',

    defects:'Dudo en secreto de si los dioses realmente se '
    +' preocupan por los asuntos de los mortales.',

    attributes_default:[
      'aptitud magica',
      'discipulo de la vida',
      'vision en la oscuridad',
      'resistencia enana',
      'aguante enano',
      'sargento mercenario'
    ],
    equipment:[
      'cota de malla',
      'escudo',
      'martillo de guerra',
      'dos hachas de mano',
      'simbolo sagrado',
      'mochila',
      'palanqueta',
      'martillo',
      '10 pitones',
      '10 antorchas',
      'yesquero',
      'raciones para 10 dias',
      'cantinflora',
      '50 pies de cuerda de cáñamo',
      'herramientas de albañil',
      'una daga de un enemigo caído tomada como trofeo',
      'naipes',
      'una muda de ropas comunes',
      'bolsa',
      'insignia de rango (sargento)'
    ],

    competencies:'Todas las armaduras y '
    +'escudos, todas las armas sencillas, hachas '
    +'de guerra, hachas de mano, martillos ligeros, '
    +'martillos de guerra, naipes, herramientas de '
    +'albañil y vehículos terrestres.',

    language:['común','enano']


  }
];

//nota: [atribute || consumible ]
let items = [
  {
    user_id:1,
    code:0,
    name:'tomar aliento',
    description: 'Tienes una pequeña reserva'
    +'de energías, a la que puedes recurrir para'
    +'protegerte del peligro. Puedes emplear una'
    +'acción adicional para recuperar tantos puntos'
    +'de golpe como 1d10 + tu nivel de guerrero.'
    +'Una vez utilizado este rasgo, deberás'
    +'terminar un descanso corto o largo para poder'
    +'volver a usarlo otra vez.(iniciativa: -1)',
    type:'atribute', // atribute, equip, consumible
    active:true,
    action:['hit_points','1d10','level'],
    live: 0, // o = para siempre
    price: 0,
    // modificadores
    modifiers: {
      force: +0,
      skill: +0,
      constitution: +0,
      intelligence: +0,
      wisdom: +0,
      charisma: +0,
      armor:0,

      inspiration: +0,
      competition_bonus: +0,

      armor:+0,
      initiative: -1,
      speed:+0,
      hit_points:+0,
      oro: 0,
      experience_points:0
    },
  },
  {
    code:1,
    name:'estilo de combate',
    description: 'Recibes un'
    +'+1 a la CA cuando lleves puesta cualquier'
    +'armadura. Este bonificador ya está incluido en'
    +'tu CA.(armadura +1)',
    type:'atribute', // atribute, equip, consumible
    active:false,
    action:[],
    live: 0, // o = para siempre
    price: 0,
    // modificadores
    modifiers: {
      force: +0,
      skill: +0,
      constitution: +0,
      intelligence: +0,
      wisdom: +0,
      charisma: +0,
      armor:+1,

      inspiration: +0,
      competition_bonus: +0,

      armor:+0,
      initiative: +0,
      speed:+0,
      hit_points:+0,
      oro: 0,
      experience_points:0
    }

  },
  {
    code:2,
    name:'posición de privilegio',
    description: 'Debido a tu noble'
    +'alcurnia, la gente se siente inclinada a pensar'
    +'lo mejor de ti. Eres bienvenido en la alta'
    +'sociedad y todos asumen que tienes derecho'
    +'a estar donde quiera que estés. El pueblo'
    +'llano hará lo posible para alojarte y evitar tu'
    +'desaprobación, mientras que personas de'
    +'clase alta te tratarán como a otro miembro'
    +'de su ámbito social. Si lo necesitas, podrás'
    +'conseguir audiencia con un noble local.',
    type:'atribute', // atribute, equip, consumible
    active:false,
    action:[],
    live: 0, // o = para siempre
    price: 0,
    // modificadores
    modifiers: {
      force: +0,
      skill: +0,
      constitution: +0,
      intelligence: +0,
      wisdom: +0,
      charisma: +0,
      armor:+0,

      inspiration: +0,
      competition_bonus: +0,

      armor:+0,
      initiative: +0,
      speed:+0,
      hit_points:+0,
      oro: 0,
      experience_points:0
    }

  }
];

db.set('avatars',avatars);
db.set('items',items);
