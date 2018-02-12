$('#perfil').click(function(e){

  /* START Prevención de doble clic */
  e.preventDefault();
  /* END Prevención de doble clic */

  var error_icon = '<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> ',
      success_icon = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span> ',
      process_icon = '<span class="fa fa-spinner fa-spin" aria-hidden="true"></span> ';

  $('#ajax_perfil').removeClass('alert-danger');
  $('#ajax_perfil').removeClass('alert-warning');
  $('#ajax_perfil').addClass('alert-warning');
  $("#ajax_perfil").html(process_icon  + 'Procesando por favor espere...');
  $('#ajax_perfil').removeClass('hide');

  $.ajax({
    type : "POST",
    url : "api/perfil",
    data : $('#perfil_form').serialize(),
    success : function(json) {
      var obj = jQuery.parseJSON(json);
      if(obj.success == 1) {
        $('#ajax_perfil').html(success_icon + obj.message);
        $("#ajax_perfil").removeClass('alert-warning');
        $("#ajax_perfil").addClass('alert-success');
        setTimeout(function(){
          location.reload();
        },1000);
      } else {
        $('#ajax_perfil').html(error_icon  + obj.message);
        $("#ajax_perfil").removeClass('alert-warning');
        $("#ajax_perfil").addClass('alert-danger');
      }
    },
    error : function() {
      window.alert('#perfil ERORR');
    }
  });
});
