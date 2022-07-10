$(function () {

    var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100;
    
// Percentage Increment Animation
var PercentageID = $("#percent1"),
		start = 0,
		end = 100,
		durataion = time;
		animateValue(PercentageID, start, end, durataion);
		
function animateValue(id, start, end, duration) {
  
	var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);
    
	var timer = setInterval(function() {
		current += increment;
		$(obj).text(current + "%");
		$("#bar1").css('width', current+"%");
      //obj.innerHTML = current;
		if (current == end) {
			clearInterval(timer);
		}
	}, stepTime);
}

// Fading Out Loadbar on Finised
setTimeout(function(){
  $('.pre-loader').fadeOut(300);
}, time);





    $('#deshacer1').hide();
    $('#deshacer2').hide();
    $('#mod').css("display", "none");
    $('#mod2').css("display", "none");
    $('#eye2').hide();
    $('#colorVerde2').hide();
    $('#colorNaranja3').hide();

    $('#input1').on('change', function () {
        var valor = this.value;

        if (valor == 1) {
            $('#precio1').text("3000");
        } else if (valor == 2) {
            $('#precio1').text("5577");
        } else if (valor == 0) {
            $('#precio1').text("0");
        }
        else {
            $('#precio1').text("6423");
        }


    });


    $('#cancelar1').on('click', function () {

        $('#1').css("visibility", "hidden");
        $('#11').css("visibility", "hidden");
        $('#111').css("visibility", "hidden");
        $('#1111').css("visibility", "hidden");
        $('#11111').css("visibility", "hidden");

        $('#deshacer1').fadeIn(500);

    });

     //Boton deshacer1
     $('#deshacer1').on('click', function () {

        $('#1').css("visibility", "visible");
        $('#11').css("visibility", "visible");
        $('#111').css("visibility", "visible");
        $('#1111').css("visibility", "visible");
        $('#11111').css("visibility", "visible");

        $('#deshacer1').hide();

    });



    $('#input2').on('change', function () {
        var valor = this.value;

        if (valor == 1) {
            $('#precio2').text("3000");
        } else if (valor == 2) {
            $('#precio2').text("5577");
        } else if (valor == 0) {
            $('#precio2').text("0");
        }
        else {
            $('#precio2').text("6423");
        }
    });


    $('#cancelar2').on('click', function () {

        $('#2').css("visibility", "hidden");
        $('#22').css("visibility", "hidden");
        $('#222').css("visibility", "hidden");
        $('#2222').css("visibility", "hidden");
        $('#22222').css("visibility", "hidden");

        $('#deshacer2').fadeIn(500);

    });

    //Boton deshacer2
    $('#deshacer2').on('click', function () {

        $('#2').css("visibility", "visible");
        $('#22').css("visibility", "visible");
        $('#222').css("visibility", "visible");
        $('#2222').css("visibility", "visible");
        $('#22222').css("visibility", "visible");

        $('#deshacer2').hide();

    });

    $('#eye').on('click', function () {

        $('#2').css("visibility", "visible");
        $('#22').css("visibility", "visible");
        $('#222').css("visibility", "visible");
        $('#2222').css("visibility", "visible");
        $('#22222').css("visibility", "visible");

        $('#deshacer2').hide();

    });



    $('#eye').click(function(e) {
        $('#mod').css('display', 'block');
        $('#mod2').css('display', 'block');
          $('#eye').hide();
          $('#eye2').show();
   
       
    
      });

      
    $('#eye2').click(function(e) {
        $('#mod').css('display', 'none');
        $('#mod2').css('display', 'none');
          $('#eye').show();
          $('#eye2').hide();
   
       
    
      });


      $('#input2').on('change', function () {
 
  
            $('#total').text("3000");
        
    });
    $('#input1').on('change', function () {
 
  
        $('#total').text("6000");
    
});


$('#verde').on('click', function () {

    $('#colorVerde2').show();
    $('#colorLila1').hide();
    $('#colorNaranja3').hide();
    $('#colorSeleccionado').text('Verde Pastel');
    $('#hexColor').text('#78B159');

});


$('#lila').on('click', function () {

    $('#colorVerde2').hide();
    $('#colorLila1').show();
    $('#colorNaranja3').hide();
    $('#colorSeleccionado').text('Lila');
    $('#hexColor').text('#AA8ED6');

});

$('#naranja').on('click', function () {

    $('#colorVerde2').hide();
    $('#colorLila1').hide();
    $('#colorNaranja3').show();
    $('#colorSeleccionado').text('Naranja Pastel');
    $('#hexColor').text('#FF6A3D');

});







});