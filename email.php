<?php

$to = "rosenberg.martin@icloud.com";
$subject = "Portfolio contact form";

$txt = "Name: " .$_POST["name"] . "\nEmail: " . $_POST["email"] . "\nMessage: \n" . $_POST["message"];
//$txt = $_POST["email"];
//$txt = $_POST["message"];

$headers = "From: noreply@rosenbergmartin.net";

mail($to,$subject,$txt,$headers);
?>