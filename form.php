<?php

if ($_POST["name"]) {
    $to = "rembispreston@gmail.com";
    $subject = "Website Contact Submission";
    $message = $_POST["email"] . " " . $_POST["phone"];
    $headers = "From: " . $_POST["email"];
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed. Please check your server's email configuration.";
    }
}

?>
