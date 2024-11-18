<?php
$message = isset($_GET['message']) ? $_GET['message'] : 'Message par défaut';
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Affichage du message</title>
</head>
<body>
    <h1><?php echo htmlspecialchars($message); ?></h1>

    <p>
        <a href="?message=Premier%20message">Premier message</a><br>
        <a href="?message=Deuxième%20message">Deuxième message</a><br>
        <a href="?message=Troisième%20message">Troisième message</a><br>
    </p>
</body>
</html>
