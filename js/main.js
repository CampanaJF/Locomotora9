$(function () {
    $('#input1').on('change', function () {
        var valor = this.value;

        if (valor == 1) {
            $('#precio1').text("3");
        } else if (valor == 2) {
            $('#precio1').text("5");
        } else if (valor == 0) {
            $('#precio1').text("0");
        }
        else {
            $('#precio1').text("6");
        }

   
    });


    $('#cancelar1').on('click', function () {

        $('#item1').hide();

    });



    $('#input2').on('change', function () {
        var valor = this.value;

        if (valor == 1) {
            $('#precio2').text("3");
        } else if (valor == 2) {
            $('#precio2').text("5");
        } else if (valor == 0) {
            $('#precio2').text("0");
        }
        else {
            $('#precio2').text("6");
        }
    });


    $('#cancelar2').on('click', function () {

        $('#item2').hide();

    });





});