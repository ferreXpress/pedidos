<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombre = strip_tags(trim($_POST["nombre"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $telefono = strip_tags(trim($_POST["telefono"]));
    $mensaje = trim($_POST["mensaje"]);

    // Configura tu correo
    $destino = "metalmaf.web@gmail.com";
    $asunto = "Nuevo mensaje de contacto desde tu web";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $email\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    $cabeceras = "From: $email";

    if(mail($destino, $asunto, $contenido, $cabeceras)){
        echo "¡Mensaje enviado correctamente!";
    } else{
        echo "Hubo un error al enviar el mensaje. Intenta de nuevo.";
    }
} else {
    echo "Acceso inválido.";
}
?>
