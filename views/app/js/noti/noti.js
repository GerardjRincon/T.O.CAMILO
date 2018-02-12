function noti(){

  $.ajax({
    async:  true, 
    type : "POST",
    url : "api/noti",   
    data: {Uno: 1},                                                                                                                                                                                  
    success : function(json) {
      var obj = jQuery.parseJSON(json);
     var total =0;
      if(obj[0]['Idp']) {
        for (var a = 0; a < obj.length; a++) {
                  
                  if (obj[a]['cantidad'] >= 1) {
                   mult = obj[a]['Precio'] * parseInt(obj[a]['cantidad']);
                    total += mult;
                  }else{
                    total = 0;
                  }
                               
              }


              $('#countt').html(obj.length);
              $('#subtotall').html('$'+total);
              $('#totall').html('$'+total+'&nbsp;');
              $('#chek').removeClass('disabled');
        	body='<div>';
      for (i = 0; i < obj.length; i++) {
         body +='<div class="dropdown-product-item"><i class="dropdown-product-remove"  data-toast data-toast-type="error" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="¡Se ha eliminado correctamente!"><i class="icon-cross"  onclick="eliminar(id='+obj[i]['Idp']+')"></i></i><a class="dropdown-product-thumb" href="shop-single.html"><img src="'+obj[i]['Img']+'"></a>'+
                  '<div class="dropdown-product-info"><a class="dropdown-product-title" href="product/'+obj[i]['Idp']+'">'+obj[i]['Titulo']+'</a><span class="dropdown-product-details">'+obj[i]['cantidad']+' x $'+obj[i]['Precio']+'</span></div>'+
                '</div>'
              }  
             body+='</div>';
              $('#bodynoti').html(body);
             

              
              


        
      } else {

      			$('#countt').html('0');
              $('#subtotall').html('$0');
              $('#totall').html('$0&nbsp;');
              $('#bodynoti').html('<p>No tiene productos en la cesta</p>');
              $('#chek').addClass('disabled');
        
      }
    },
    error : function() {
      console.log('#noti ERORR');
    }
  });

  
}

function eliminar(id) {

  

  $.ajax({
    async:  true, 
    type : "POST",
    url : "api/noti/eliminar",
    data : {i: id},
    success : function(json) {
     var obj = jQuery.parseJSON(json);
      if(obj.success == 1) {
        noti();
      }
    },
    error : function() {
      window.alert('#ejemplo ERORR');
    }
  });
}

function cestapro(idpro) {
  var prod="Id="+idpro;
  $.ajax({
    async:  true,
    url: 'api/noti/agregar',
    type: 'POST',
    data: prod,
    success : function(jjj){
      var obj = jQuery.parseJSON(jjj);
      if (obj.success == 1) {
        
        noti();
      }
    }
  })
  .done(function() {
    console.log("exito");
  })
  .fail(function() {
    console.log("Error");
  })
  .always(function() {
    console.log("complete");
  });
  
}

noti();
 // setInterval(noti,3000);
 setTimeout('noti()',1000);
 $.ajaxSetup({cache: false});



