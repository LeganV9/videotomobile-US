<?php

// Connexion à la base de données
$host = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";
$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Vérification des données du formulaire
if (isset($_POST["make"]) && isset($_POST["model"]) && isset($_POST["year"]) && isset($_POST["price"]) && isset($_POST["image_url"]) && isset($_POST["description"])) {
    $make = $_POST["make"];
    $model = $_POST["model"];
    $year = $_POST["year"];
    $price = $_POST["price"];
    $image_url = $_POST["image_url"];
    $description = $_POST["description"];

    // Insertion de la nouvelle annonce dans la base de données
    $sql = "INSERT INTO cars (make, model, year, price, image_url, description) VALUES ('$make', '$model', '$year', '$price', '$image_url', '$description')";
    if ($conn->query($sql) === TRUE) {
        header("Location: confirmation.php");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();

?>
