<?php
$html = '<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Customer Inquiry</title>
    <link rel="stylesheet" href="https://naboishutravel.co.tz/css/main.css" />
    <link rel="stylesheet" href="https://naboishutravel.co.tz/css/medium.css" />
    <link rel="stylesheet" href="https://naboishutravel.co.tz/css/mobile.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </head>
  <body class="mail">
    <div class="top">
      <a href="index.html"
        ><img class="logo-main" src="https://naboishutravel.co.tz/images/logo-main.png" alt="Naboishu Logo"
      /></a>
    </div>
    <main>
      <p class="medium-text primary-text">Dear Team,</p>
      <p>A customer inquiry from <b>'.$name.'</b> has been received with the following message:</p>
      <p><i> '.$message.'</i></p>
      
      <p>Contact E-email: '.$email.'</p>
      <p>
        Please contact the customer as soon as possible in order to address their need.
      </p>
      <p class="signature">
        <i>If you\'ve received this email by mistake, kindly ignore the
          information in it and report it to: support@neelansoft.co.tz</i
        >
      </p>
      
    </main>
  </body>
</html>';

?>
