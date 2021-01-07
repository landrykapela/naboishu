<?php

ini_set("display_errors",1);
require_once('naboishu_api.php');
$date = strtotime(htmlentities($_POST['travel_date'],ENT_QUOTES,'UTF-8'));
$name = htmlentities($_POST['full_name'],ENT_QUOTES,'UTF-8');
$email = filter_var(htmlentities($_POST['email'],ENT_QUOTES,'UTF-8'),FILTER_SANITIZE_EMAIL);
$start_country = htmlentities($_POST['origin'],ENT_QUOTES,'UTF-8');
$start_city = htmlentities($_POST['c_origin'],ENT_QUOTES,'UTF-8');
$origin = $start_city.", ".$start_country;
$dest_country = htmlentities($_POST['destination'],ENT_QUOTES,'UTF-8');
$dest_city = htmlentities($_POST['c_destination'],ENT_QUOTES,'UTF-8');
$destination = $dest_city.", ".$dest_country;

$booking_data = array();
$booking_data['full_name'] = $name;
$booking_data['start_country'] = $start_country;
$booking_data['start_city'] = $start_city;
$booking_data['destination_country'] = $dest_country;
$booking_data['destination_city'] = $dest_city;
$booking_data['contact_email'] = $email;
$booking_data['travel_date'] = $date;
$naboishu = new naboishu();
$booking = $naboishu->createBooking($booking_data);
if($booking['code'] == 0){
    include('email_template.php');
    $body = $html;
    $headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .="From: <noreply@naboishutravel.co.tz" ."\r\n";
    mail('info@naboishutravel.co.tz','Customer Booking',$body,$headers);
}
else{
    echo $booking['msg'];
}
?>