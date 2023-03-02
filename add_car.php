<?php
// Connexion à la base de données
$db = new PDO('pgsql:host=nom_hote;port=5432;dbname=nom_base', 'nom_utilisateur', 'mot_de_passe');

// Récupération des données envoyées par le formulaire
$make = $_POST['make'];
$model = $_POST['model'];
$year = $_POST['year'];
$price = $_POST['price'];
$image_url = $_POST['image_url'];
$description = $_POST['description'];

// Préparation de la requête SQL d'insertion
$query = "INSERT INTO cars (make, model, year, price, image_url, description) VALUES (:make, :model, :year, :price, :image_url, :description)";
$stmt = $db->prepare($query);

// Bind des valeurs pour éviter les injections SQL
$stmt->bindParam(':make', $make);
$stmt->bindParam(':model', $model);
$stmt->bindParam(':year', $year);
$stmt->bindParam(':price', $price);
$stmt->bindParam(':image_url', $image_url);
$stmt->bindParam(':description', $description);

// Exécution de la requête d'insertion
$stmt->execute();

// Redirection vers la page d'accueil
header('Location: index.html');
exit();
?>
