$("#resultado").hide();
$("#resultado1").hide();
$("#resultado2").hide();
$("#resultado3").hide();

  $(document).ready(function(){

  $("#submit").click(function(e){
    e.preventDeFault();

    let codigo=$("#codigo")[0].value;

    if (codigo=="desc"){
      $("#resultado").show();
    }

    else if (codigo=="desc1"){
      $("#resultado1").show();
    }

    else if (codigo=="desc2"){
      $("#resultado2").show();
    }

    else {
      $("#resultado3").show();
    }

  })

})

      

   
