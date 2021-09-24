<?php

include "connection.php";

$see = $bdd->prepare("SELECT * FROM user INNER JOIN gender ON user.gender_id = gender.id INNER JOIN astro ON user.astro_sign_id = astro.id");

$see->execute();

$list = $see->fetchAll(PDO::FETCH_ASSOC);

$allData = [];

foreach($list as $getList):

$dataArray = ['id' => $getList["ID"], 'name' => $getList["name"], 'first_name' => $getList["first_name"], 'gender' => $getList["gender"], 'astro' => $getList["astro_sign"]];

array_push($allData, $dataArray);

endforeach;

echo json_encode($allData);

?>