<?php
require "access.php";

$json = file_get_contents("php://input");
$obj = json_decode($json, true);

try {
    $bdd = new PDO($dsn, $username, $password);
} catch (Exeption $e) {
    die('Erreur : '.$e->getMessage());
}

$see = $bdd->prepare("SELECT * FROM user INNER JOIN gender ON user.gender_id = gender.id INNER JOIN astro ON user.astro_sign_id = astro.id");
$see->execute();

$add = $bdd->prepare("INSERT INTO user (name, first_name, gender_id, astro_sign_id) VALUE (?, ?, ?, ?)");
$add->bindParam(1, $obj["name"]);
$add->bindParam(2, $obj["firstName"]);
$add->bindParam(3, $obj["gender"]);
$add->bindParam(4, $obj["astroSign"]);
$add->execute();

$user_array = array();

$list = $see->fetchAll(PDO::FETCH_ASSOC);

if($obj["value"] == "see"){
    foreach($list as $getList):
    ?>
    
    <section>
        <div>
            <p>Name: <?php echo $getList["name"] ?></p>
            <p>First name: <?php echo $getList["first_name"] ?></p>
            <p>gender: <?php echo $getList["gender"] ?></p>
            <p>First name: <?php echo $getList["astro_sign"] ?></p>
        </div>
        <button value="<?php echo $getList["ID"] ?>" >Delete -</button>
    </section>
    
    <?php
    endforeach;
}
?>