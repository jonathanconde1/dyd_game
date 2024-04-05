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
            $.toast({
              heading: 'Exito',
              text: json.message,
              showHideTransition: 'slide',
              position: 'bottom-right',
              icon: 'success'
            })
            

      },
      error:(xhr,status) => {
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

});
