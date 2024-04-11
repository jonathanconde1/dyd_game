$(document).ready(function(){
  console.log("load avatars ...");
  let usersTable = $("#avatarsTable").DataTable({
    bSort: false,
    aoColumns:[
      { sWidth: "2%" },
      { sWidth: "10%" },
      { sWidth: "10%" },
      { sWidth: "10%" }

    ]
  });

});
