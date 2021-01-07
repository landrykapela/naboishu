<?php
$html = '<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Travel Booking</title>
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/medium.css" />
    <link rel="stylesheet" href="css/mobile.css" />
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
        ><img class="logo-main" src="images/logo-main.png" alt="Naboishu Logo"
      /></a>
    </div>
    <main>
      <p class="medium-text primary-text">Dear Team,</p>
      <p>A booking request from <b>'.$name.'</b> has been received.</p>
      <p>The following details are provided to process the request:</p>
      <p>Travel Destination: '.$destination.'</p>
      <p>Traveling from: '.$origin.'</p>
      <p>Date of Travel: '.$date.'</p>
      <p>Contact E-email: '.$email.'</p>
      <p>
        Please contact the customer as soon as possible in order to confirm the
        booking.
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
