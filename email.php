<?php

$to = "rosenberg.martin@icloud.com";
$subject = "Sign for Beta";

$txt = $_POST["email"];

$headers = "From: noreply@rosenbergmartin.net";

mail($to,$subject,$txt,$headers);
?>