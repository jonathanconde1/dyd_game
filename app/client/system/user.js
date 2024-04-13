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
        if(json.success){
            info.emitInfo('Exito','success',json.message);
        }else{
            info.emitInfo('Peligroddd','warning',json.message);
        }
            // hideModalUser();
            // listUsers();


      },
      error:(xhr,status) => {
        emitInfo('Error','info',xhr.responseJSON.message);
      }
    });
  }

});
