$(function () {
    $('#deshacer1').hide();
    $('#deshacer2').hide();

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





});