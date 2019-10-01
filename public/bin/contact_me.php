<?php
if (
   empty($_POST['name']) ||
   empty($_POST['email']) ||
   empty($_POST['message'])
) {
   echo "No arguments Provided!";
   return false;
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// create email body and send it
$to = 'matias.ranta123@gmail.com';
$email_subject = "Contact message from matiasranta.com:  $name";
$email_body = "You have received a new message from your website's contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: noreply@matiasranta.com\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>