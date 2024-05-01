$(document).ready(function(){
  console.log("load avatars ...");
  let templates = [];
  let table = $("#avatarsTable").DataTable({
    searching: false,
    bSort: false,
    aoColumns:[
      { sWidth: "2%" },
      { sWidth: "10%" },
      { sWidth: "10%" },
      { sWidth: "10%" }

    ]
  });
  listAvatars();

  $('#buttonCreateAvatar').click(function(){
    console.log('click button avatars ...');
  });
  $('#buttonCloseSession').click(function(){
    closeSession();
  });
  $("#selectTemplate").change(function(){
    console.log("cambio de valor",this.value);
    viewTemplate(this.value, templates);
  });

  loadTemplate(templates);
  viewTemplate(0, templates);

});

// const templates=[];

function loadTemplate(templates){
  console.log("cargando plantillas");
  $.ajax({
      url:'/avatar_all_template',
      type:'GET',
      success:(json) => {
        console.log('exito',json);
        drawListTemplate(json.data);
        templates = json.data;
        console.log("templates",templates);
        // $("#selectTemplate").append('<option value="data[i].class">Seleccione</option>');

      },
      error:(xhr,status) => {
        console.log('error');

        $.toast({
          heading: 'Error',
          text: xhr.responseJSON.message,
          showHideTransition: 'slide',
          position: 'bottom-right',
          icon: 'info'
        })
      }
    });
}
function drawListTemplate(data){
  for (var i in data) {
    //selectTemplate
    $("#selectTemplate").append('<option value="'+i+'">'+data[i].class+' '+data[i].race+'</option>');
  }
}
function viewTemplate(id, templates){
  console.log("view template .....");
  console.log("id template: ",id);
  // console.log("template: ",templates[id]);
  $.ajax({
      url:'/avatar_id?id='+id+'',
      type:'GET',
      success:(json) => {
        console.log('exito view',json);
        // drawListTemplate(json.data);
        templates = json.data;

        console.log("templates view",templates);
        if(json.data.length>0) drawViewTemplate(json.data[0]);

      },
      error:(xhr,status) => {
        console.log('error');

        $.toast({
          heading: 'Error',
          text: xhr.responseJSON.message,
          showHideTransition: 'slide',
          position: 'bottom-right',
          icon: 'info'
        })
      }
    });

}
function clearViewTemplate(){
  $("#p_name").html("");
  $("#p_slots").html("");
  $("#p_image").html("");
  $("#p_race").html("");
  $("#p_class").html("");
  $("#p_level").html("");
  $("#p_background").html("");
  $("#p_alignment").html("");
  $("#p_experience_points").html("");
  $("#p_force").html("");
  $("#p_skill").html("");
  $("#p_constitution").html("");
  $("#p_intelligence").html("");
  $("#p_wisdom").html("");
  $("#p_charisma").html("");
  $("#p_inspiration").html("");
  $("#p_competition_bonus").html("");

  $("#p_armor").html("");
  $("#p_initiative").html("");
  $("#p_speed").html("");
  $("#p_hit_points_max").html("");
  $("#p_hit_points").html("");
  $("#p_temp_hit_points").html("");
  $("#p_salvation_success").html("");
  $("#p_salvation_failed").html("");
  $("#p_status").html("");

  $("#p_personality_traits").html("");
  $("#p_ideals").html("");
  $("#p_links").html("");
  $("#p_defects").html("");
}
function drawViewTemplate(data){
  clearViewTemplate();
  console.log("dibujando info",data);
  $("#p_name").append("<strong>Nombre: </strong>"+$("#inputNameTemplate").val());
  // $("#p_slots").append("<strong></strong>"+data.slots);
  // $("#p_image").append("<strong></strong>"+data.image);
  $("#p_race").append("<strong>Raza: </strong>"+data.race);
  $("#p_class").append("<strong>Clase: </strong>"+data.class);
  $("#p_level").append("<strong>Nivel: </strong>"+data.level);
  $("#p_background").append("<strong>Transfondo: </strong>"+data.background);
  $("#p_alignment").append("<strong>Alineamiento: </strong>"+data.alignment);
  $("#p_experience_points").append("<strong>Experiencia: </strong>"+data.experience_points);
  $("#p_force").append("<strong>Fuerza: </strong>"+data.force);
  $("#p_skill").append("<strong>Destreza: </strong>"+data.skill);
  $("#p_constitution").append("<strong>Constitucion: </strong>"+data.constitution);
  $("#p_intelligence").append("<strong>Inteligencia: </strong>"+data.intelligence);
  $("#p_wisdom").append("<strong>Sabiduria: </strong>"+data.wisdom);
  $("#p_charisma").append("<strong>Carisma: </strong>"+data.charisma);
  $("#p_inspiration").append("<strong>Inspiracion: </strong>"+data.inspiration);
  $("#p_competition_bonus").append("<strong>Bonificacion de competicion: </strong>"+data.competition_bonus);

  $("#p_armor").append("<strong>Armadura: </strong>"+data.armor);
  $("#p_initiative").append("<strong>Iniciativa: </strong>"+data.initiative);
  $("#p_speed").append("<strong>Velocidad: </strong>"+data.speed);
  $("#p_hit_points_max").append("<strong>Puntos de golpe Maximos: </strong>"+data.hit_points_max);
  $("#p_hit_points").append("<strong>Puntos de golpe actuales: </strong>"+data.hit_points);
  $("#p_temp_hit_points").append("<strong>Puntos de golpe temporales: </strong>"+data.temp_hit_points);
  $("#p_salvation_success").append("<strong>Exito en salvacion: </strong>"+data.salvation_success);
  $("#p_salvation_failed").append("<strong>Fallo en salvacion: </strong>"+data.salvation_failed);
  $("#p_status").append("<strong>Estado: </strong>"+data.status);

  $("#p_personality_traits").append("<strong>Rasgos de Personalidad: </strong>"+data.personality_traits);
  $("#p_ideals").append("<strong>Ideales: </strong>"+data.ideals);
  $("#p_links").append("<strong>Vínculos: </strong>"+data.links);
  $("#p_defects").append("<strong>Defectos: </strong>"+data.defects);


  /*
  alignment:"legal neutral"
armor:17
attributes_default:(3) ['tomar aliento', 'estilo de combate', 'posición de privilegio']
background:"noble"
charisma:2
class:"guerrero"
competencies:"Todas las armaduras,escudos, armas sencillas, armas marciales,naipes."
competition_bonus:2
constitution:2
defects:"Me cuesta resistirme a la tentación de lasriquezas, especialmente el oro. Una granfortuna podría ayudarme a restaurar milegado."
equipment:(14) ['cota de malla', 'hacha de dos manos', 'jabalina', 'jabalina', 'jabalina', 'mochila', 'manta', 'yesquero', 'racion', 'racion', 'cantinflora', 'una muda de ropa de calidad', 'anillo de sellar', 'documento que acredita el linaje']
experience_points:0
force:3
hit_points:12
hit_points_max:12
ideals:"Responsabilidad. Los nobles deben protegeral pueblo llano, no abusar de ellos."
image:"humano-guerrero.png"
initiative:-1
inspiration:0
intelligence:0
language:(3) ['común', 'dracónico', 'enano']
level:1
links:"Mi hacha a dos manos es una herenciafamiliar. Se trata, con mucho, de mi posesiónmás preciada."
name:""
personality_traits:"Mis halagos hacen sentirse importantes ymaravillosos a aquellos con los que hablo.Además, no me gusta ensuciarme. Bajoningún concepto me alojaré en dependenciasinapropiadas a mi alcurnia."
race:"humano"
salvation_charisma:2
salvation_constitution:4
salvation_failed:0
salvation_force:5
salvation_intelligence:0
salvation_skill:-1
salvation_success:0
salvation_wisdom:1
skill:-1
slots:5
speed:30
status:true
temp_hit_points:0
user_id:1
wisdom:1
  */

}
function closeSession(){
  let csrfToken =$('#csrf_token').val();
  $.post('/logout', { _csrf: csrfToken })
   .done(function(response) {
       // Manejar la respuesta del servidor si es necesario
       console.log('Sesión cerrada exitosamente');
       window.location.href = '/login';
       // Puedes redirigir o realizar otras acciones según la respuesta
   })
   .fail(function(xhr, status, error) {
       // Manejar errores si la solicitud falla
       console.error('Error al cerrar sesión:', error);
   });
}
function listAvatars (){
  $.ajax({
      url:'/avatar_all',
      type:'GET',
      success:(json) => {
        // console.log('exito',json);
        // console.log('success',json.success);
        drawAvatarsTable(json.data);
        //     $.toast({
        //         heading: 'Exito',
        //         text: json.message,
        //         showHideTransition: 'slide',
        //         position: 'bottom-right',
        //         icon: 'success'
        //     })
      },
      error:(xhr,status) => {
        console.log('error');

        $.toast({
          heading: 'Error',
          text: xhr.responseJSON.message,
          showHideTransition: 'slide',
          position: 'bottom-right',
          icon: 'info'
        })
      }
    });

}

function drawAvatarsTable(data){
 // console.log("draw avatars",data);
 let table = $('#avatarsTable').DataTable();
 // table.clear().draw();
 table.destroy();
 // $('.placeholder input[type="search"]').val('');

 table = $('#avatarsTable').DataTable({
   searching: false,
   data:data,
   initComplete:function(){
     console.log("avatars cargados con exito ...");
   },
   aoColumns:[
     {
       title:'N',
       render: function(data,type,full,meta){
         let i = parseInt(meta.row);
         return i+1;
       }
     },
     {
       title:'Avatar',
       render: function(data, type, full, meta){
         return full['avatar'];
       }
     },
     {
       title:'Lv. Clase/Raza',
       render: function(data, type, full, meta){
         return "Lv. "+full['nivel']+" "+full['clase']+"/"+full['raza'];
       }
     },
     {
       title:'Option',
       render: function(data, type, full, meta){
         // console.log("full",full);
         let status = '<button onclick="startPlayer('+full['user_id']+','+full['id']+')" type="button" class="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="false">PLAY</button>';
         // for (var i = 0; i < Client.avatars.length; i++) {
           // if(Client.avatars[i].id==full['id']){
           //   status='<button onclick="quitPlayer('+full['id']+')" type="button" class="btn btn-success btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="false">Game</button>';
           // }
         // }
         // console.log('dfawwwwwwwwwwww');
         return status;
       }
     }

   ]

 });
 table.search('');
 // $('.dataTables_filter input[type="search"]').val('');
 // $('.placeholder input[type="search"]').val('');
}

function clearData(table){
  table.search('');
}
