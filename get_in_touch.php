<?php
$name = $_POST["Name"];
$subject = $_POST["Subject"];
$email = $_POST["EMail"];
$message = $_POST["Message"];
$phone = $_POST["Phone"];

$email_headers = "From: $name <$email>";

 
mail("blairedreira92@gmail.com", $subject, $message, $email_headers);
?>