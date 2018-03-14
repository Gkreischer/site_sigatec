<?php

    $nome_contato = isset($_POST['nome_contato']) ? $_POST['nome_contato'] : null;

    $email_contato = isset($_POST['email_contato']) ? $_POST['email_contato'] : null;

    $tel_contato = isset($_POST['tel_contato']) ? $_POST['tel_contato'] : null;

    $msg_contato = isset($_POST['tel_contato']) ? $_POST['tel_contato'] : null;

    $resultado = array($nome_contato, $email_contato, $tel_contato, $msg_contato);
    
    print_r(json_encode($resultado));

?>