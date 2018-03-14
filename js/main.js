$(document).ready(function () {

    // Ao clicar, contrai a barra de navegação em aparelhos mobile

    $('.esconde_barra').on('click', function () {

        $('#navbarSupportedContent').removeClass('show');
    });
    // Smooth Scroll
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $('#msg_sucesso').hide();
    $('#msg_erro').hide();
    $('#form_contato').submit(function (e) {

        var dados = $(this);

        form_dados = new FormData(dados[0]);

        $.ajax({
            url: './php/envia_email.php',
            type: 'POST',
            enctype: 'multipart/form-data',
            cache: 'false',
            data: form_dados,
            contentType: false,
            processData: false,

            success: function (result) {
                console.log(result);
                $('#modal_contato').modal('hide');

                if (result === 'mensagem_enviada') {
                    $('#msg_sucesso').show();

                } else {
                    $('#msg_erro').show();

                }

                window.location.href = '#botao_enviar';

            },
            beforeSend: function () {
                $('#modal_contato').modal('show');
            },
            error: function () {
                $('#msg_erro').show();
                $('#modal_contato').modal('hide');
                console.log(result);

            }
        });

        e.preventDefault();
    });

    $('#tabela_precos').on('click', function () {

        $('#modal_precos').modal('show');
    });
});