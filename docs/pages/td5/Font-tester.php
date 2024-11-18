<?php

$message = isset($_GET['message']) ? $_GET['message'] : 'Erreur : Aucun message fourni.';
$color = isset($_GET['color']) ? $_GET['color'] : 'black';
$size = isset($_GET['size']) ? (int)$_GET['size'] : 12;

if (!isset($_GET['color'])) {
    $color = 'black';
}

if (!isset($_GET['size'])) {
    $size = 12;
}

if ($message === 'Erreur : Aucun message fourni.') {
    $color = 'red';
    $size = 16;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['message'], $_GET['color'], $_GET['size'])) {
    $message = htmlspecialchars($_GET['message']);
    $color = htmlspecialchars($_GET['color']);
    $size = (int)$_GET['size'];
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Affichage du Message</title>
    <style>
        .message {
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>Affichage du message personnalisé</h1>

    <p><a href="?message=Message%20rouge&color=red&size=15">Message rouge (taille 15)</a></p>
    <p><a href="?message=Message%20vert&color=green&size=30">Message vert (taille 30)</a></p>
    <p><a href="?message=Message%20bleu&color=blue&size=50">Message bleu (taille 50)</a></p>

    <div class="message" style="color: <?= $color; ?>; font-size: <?= $size; ?>px;">
        <?= $message; ?>
    </div>

    <p><strong>Formulaire de saisie de message</strong></p>
    <form method="get">
        <label for="messageInput">Message :</label>
        <input type="text" id="messageInput" name="message" placeholder="Entrez votre message" value="<?= isset($_GET['message']) ? htmlspecialchars($_GET['message']) : ''; ?>"><br><br>
        
        <label for="colorInput">Couleur :</label>
        <input type="text" id="colorInput" name="color" placeholder="Entrez une couleur" value="<?= isset($_GET['color']) ? htmlspecialchars($_GET['color']) : ''; ?>"><br><br>
        
        <label for="sizeInput">Taille :</label>
        <input type="number" id="sizeInput" name="size" value="<?= isset($_GET['size']) ? $_GET['size'] : 12; ?>" min="1"><br><br>
        
        <button type="submit">Soumettre</button>
    </form>

    <p>
        <a href="?message=<?= urlencode($message) ?>&color=<?= urlencode($color) ?>&size=<?= $size - 1 ?>">-</a>
        <a href="?message=<?= urlencode($message) ?>&color=<?= urlencode($color) ?>&size=<?= $size + 1 ?>">+</a>
    </p>

</body>
</html>
