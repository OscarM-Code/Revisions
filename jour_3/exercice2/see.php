<?php
require "access.php";

$name = $_POST["name"];
$json = file_get_contents("index.php");
$obj = json_decode("json");

try {
    $bdd = new PDO($dsn, $username, $password);
} catch (Exeption $e) {
    die('Erreur : '.$e->getMessage());
}

$req = $bdd->prepare("SELECT * FROM user");
$req->execute();

$user_array = array();

$list = $req->fetchAll(PDO::FETCH_ASSOC);


echo $json;
?>