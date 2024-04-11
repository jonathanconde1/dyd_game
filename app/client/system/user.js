$(document).ready(function(){
  console.log("ready user ...");

  $("#register_form").submit(function(e){
    e.preventDefault();
    console.log("sub..");
    createUser();
  });

  function createUser(){
    let param = {
      name : $('#name').val(),
      password : $('#password').val()
    }
    let token = $('#csrfToken').val();
    $.ajax({
      url:'/register_user',
      data:param,
      type:'POST',
      headers: {'X-CSRF-Token': token},
      success:(json) => {
        console.log('exito',json);
        console.log('success',json.success);
            // hideModalUser();
            // listUsers();
            emitInfo('Exito','success',json.message);

      },
      error:(xhr,status) => {
        emitInfo('Error','info',xhr.responseJSON.message);
      }
    });
  }

  function emitInfo(title,type,msn){
    $.toast({
        heading: title,
        text: msn,
        showHideTransition: 'slide',
        position: 'bottom-right',
        icon: type
    })
  }

});
