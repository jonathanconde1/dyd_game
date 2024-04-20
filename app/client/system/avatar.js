$(document).ready(function(){
  console.log("load avatars ...");
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

});

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
        console.log('exito',json);
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
 console.log("draw avatars",data);
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
         console.log("full",full);
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
