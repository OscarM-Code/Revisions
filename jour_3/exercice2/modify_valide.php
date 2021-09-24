<?php

include "connection.php";

$json = file_get_contents("php://input");
$obj = json_decode($json, true);

$modify = $bdd->prepare("UPDATE user SET name = ?, first_name = ?, gender_id = ?, astro_sign_id = ? WHERE ID = ?");
$modify->bindParam(1, $obj["name"]);
$modify->bindParam(2, $obj["firstName"]);
$modify->bindParam(3, $obj["gender"]);
$modify->bindParam(4, $obj["astroSign"]);
$modify->bindParam(5, $obj["id"]);

$modify->execute();

?>