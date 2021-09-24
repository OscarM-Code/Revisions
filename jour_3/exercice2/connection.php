<?php

require "access.php";

try {
    $bdd = new PDO($dsn, $username, $password);
} catch (Exeption $e) {
    die('Erreur : '.$e->getMessage());
}

?>