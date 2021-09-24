<?php

include "connection.php";


$json = file_get_contents("php://input");
$obj = json_decode($json, true);

$add = $bdd->prepare("INSERT INTO user (name, first_name, gender_id, astro_sign_id) VALUE (?, ?, ?, ?)");
$add->bindParam(1, $obj["name"]);
$add->bindParam(2, $obj["firstName"]);
$add->bindParam(3, $obj["gender"]);
$add->bindParam(4, $obj["astroSign"]);

$add->execute();

?>