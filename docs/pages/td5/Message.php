<?php

function message(string $message){}

$_GET
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Affichage du Message</title>
</head>
<body>
    <h1><?php echo htmlspecialchars($message); ?></h1>

    <h2>3 liens hypertextes :</h2>
    <ul>
        <li><a href="message.php?message=Bonjour, ceci est le premier lien!">lien 1</a></li>
        <li><a href="message.php?message=Voici le deuxième lien!">lien 2</a></li>
        <li><a href="message.php?message=Ceci est le troisième lien!">lien 3</a></li>
    </ul>
</body>
</html>