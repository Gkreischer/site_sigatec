$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // Cadastro de clientes
    $('#form_cd_clientes').submit( function (e){
        
        // Aponta para o formulario do cadastro de clientes
        var formulario_data = $(this);
        // Monta o objeto cadastro de clientes com o nome de formdata
        var formdata = new FormData(formulario_data[0]);
        
        $.ajax({
        
            url: './../php/debug_dados.php',
            type: 'POST',
            encytpe: 'multipart/form-data',
            cache: 'false',
            data: formdata,
            contentType: false,
            processData: false,
            dataType: 'json',

            success: function(resultado){

                console.log(resultado);
            },
            beforeSend: function(){

            },
            error: function(result){
                alert('Erro no envio');
            }

        });

        
        
        console.log('Enviado formulario de cadastro de clientes');

        // Desativa reload da página
        e.preventDefault();
    });
});