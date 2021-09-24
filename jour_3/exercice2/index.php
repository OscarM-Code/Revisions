<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="../../logo.png" type="image/x-icon">
    <title>Exo2</title>
</head>
<body>
    <section>
        <button value="see">See</button>
        <article></article>
    </section>

    <button>Add +</button>
    <form>
        <label>Name:</label>
        <input type="text" >
        <label>First name:</label>
        <input type="text">
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
    
    <script src="scrip.js"></script>
</body>
</html>