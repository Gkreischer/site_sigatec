<?php 

    // Carrega PHPMailer
    require_once './PHPMailer-5.2.26/PHPMailerAutoload.php';

    $nome_contato = isset($_POST['nome_contato']) ? $_POST['nome_contato'] : null;

    $email_contato = isset($_POST['email_contato']) ? $_POST['email_contato'] : null;

    $tel_contato = isset($_POST['tel_contato']) ? $_POST['tel_contato'] : null;

    $msg_contato = isset($_POST['msg_contato']) ? $_POST['msg_contato'] : null;

    $resultado = array($nome_contato, $email_contato, $tel_contato, $msg_contato);
    

    $M = new PHPMailer();
    #$M->SMTPDebug = 2; # Somente para debug
    $M->isSMTP(); # Informamos que é SMTP
    $M->Host = 'smtp.gmail.com'; # Colocamos o host de envio de e-mail.
    $M->SMTPAuth = true; # Informamos que terá autenticação de SMTP.
    $M->Username = 'gustavokreischer@gmail.com'; # Usuário
    $M->Password = 'Gka!6!2!3'; # Senha
    $M->Port = 587; # Porta de disparo.
    $M->SMTPSecure = 'tls'; # Caso tenha segurança.
    $M->CharSet = 'UTF-8';
    $M->From = $email_contato; # Remetente do disparo.
    $M->FromName = $nome_contato; # Nome do remetente.
    $M->addAddress('gustavo.mskinformatica@gmail.com', 'Sigatec Informática'); # Destinatário.
    $M->isHTML(); # Informamos que o corpo tem o formato HTML.
    $M->Subject = 'Orçamento de Máquina - Site'; # Assunto da mensagem.
    # Corpo da mensagem:
    $M->Body = "
    <html lang='pt-br'>
        <head>
            <meta charset='utf-8'>
        </head>
        <body>
            <h2>Sigatec Informática</h2>
            <h3>Orçamento de Máquina</h3>
            <p><b>Nome do cliente:</b></p>" . $nome_contato .
            "<p><b>Email:</b></p>" . $email_contato .
            "<p><b>Telefone:</b></p>" . $tel_contato .
            "<p><b>Mensagem:</b></p>" . $msg_contato .
        "</body>
    </html>";
    # Enviamos:
    $resultado = $M->send();
    if ($resultado) {
        echo 'mensagem_enviada';
    }
    else {
        echo 'mensagem_nao_enviada';
    }
    
    
    
?>