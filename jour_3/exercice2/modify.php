<?php

include "connection.php";

$json = file_get_contents("php://input");
$obj = json_decode($json, true);

$see = $bdd->prepare("SELECT * FROM user INNER JOIN gender ON user.gender_id = gender.id INNER JOIN astro ON user.astro_sign_id = astro.id WHERE user.ID = ?");
$see->bindParam(1, $obj["id"]);
$see->execute();

$list = $see->fetchAll(PDO::FETCH_ASSOC);

foreach($list as $getList):
?>

<form>
    <input type="text" value="<?php echo $getList["name"] ?>">
    <input type="text" value="<?php echo $getList["first_name"] ?>">
    <div>
        <input type="radio" name="gender" value="1" checked>
        <label>Male</label>
    </div>
    <div>
        <input type="radio" name="gender" value="2">
        <label>Female</label>
    </div>
    <select name="astro_sign">
        <option value="1">Libra</option>
        <option value="2">Aries</option>
        <option value="3">Cancer</option>
        <option value="4">Capricorn</option>
        <option value="5">Gemini</option>
        <option value="6">Leo</option>
        <option value="7">Pisces</option>
        <option value="8">Scorpio</option>
        <option value="9">Sagittarius</option>
        <option value="10">Taurus</option>
        <option value="11">Aquarius</option>
        <option value="12">Virgo</option>
    </select>
    <button>Validate</button>
</form>

<?php
endforeach;

?>