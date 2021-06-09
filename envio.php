<?php

$Email = "josuegarcia1300@gmail.com";

$Asunto = "Comentarios del Usuario";

$Nombre = $_POST["Fnombre"];
$Apellido = $_POST["Fapellido"];
$Correo = $_POST["Femail"];
$Telefono = $_POST["Ftel"];
$Mensaje = $_POST["Fmensaje"];


/*Concatenado*/

$mensajecompleto = "Nombre del Usuario: "      .$Nombre  ."\n"
					."Apellido del Usuario: "  .$Apellido  ."\n"
					."Correo del Usuario: "    .$Correo  ."\n"
					."Telefono: "              .$Telefono  ."\n"
					."Mensaje del Usuario: "   .$Mensaje;

$paginaredirigida = "agradecimiento.html";

if(mail ($Email,$Asunto,$mensajecompleto))Header("location: $paginaredirigida");
?>