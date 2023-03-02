<?php
$host = "localhost"; // le nom d'hôte de votre serveur
$dbname = "videotomobileUS"; // le nom de votre base de données
$username = ""; // votre nom d'utilisateur pour accéder à la base de données
$password = ""; // votre mot de passe pour accéder à la base de données

// Tentative de connexion à la base de données
try {
    $conn = new PDO("pgsql:host=$host;dbname=$dbname", $username, $password);
    echo "Connexion réussie !";
} catch(PDOException $e) {
    echo "La connexion a échoué : " . $e->getMessage();
}
?>
