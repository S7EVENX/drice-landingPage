<?php

if (isset($_POST)) {
    //Ocultar warnings en el  front
    error_reporting(0);

    //Datos formulario
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

    //Asunto
    $asunto = "Contacto desde Dr ice $url_pagina: $mensaje";

    //Configuracion Correo
    $url_pagina = $_SERVER["HTTP_HOST"];
    $to = "driceibarra23@gmail.com";
    $template = "<p> Mensaje desde driceagua.com</p>
    <ul>
    <li>Nombre: <b>$nombre</b></li>
    <li>Correo: <b>$correo</b></li>
    <li>Telefono: <b>$telefono</b></li>
    <p>Mensaje: $mensaje </p>
    </ul>";
    $headers ="MIME-Version:1.0\r\n"."Content-Type:text/html;charset=utf-8\r\n"."From:Dr Ice<no-reply@$url_pagina>";
    $sendMail = mail($to,$asunto,$template,$headers);

    if ($sendMail) {
        $res = [
            "err" => false,
            "message" => "Tu mensaje ha sido enviado!"
        ];
    } else {
        $res = [
            "err" => true,
            "message" => "Hubo un problema al enviar su mensaje, intentelo mas tarde"
        ];
    }

    header('Content-type:application/json');
    echo json_encode($res);
    exit;
}
