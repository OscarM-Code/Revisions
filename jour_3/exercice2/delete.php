<?php

include "connection.php";

$json = file_get_contents("php://input");
$obj = json_decode($json, true);

$delete = $bdd->prepare("DELETE FROM user WHERE ID = ?");
$delete->bindParam(1, $obj["id"]);

$delete->execute();

?>