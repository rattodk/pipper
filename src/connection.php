<?php
    require ".env";



    $servername = 'localhost';
    $username = 'root';
    $password = getenv('PASSWORD');
    try {
        $conn = new PDO('mysql:host=$servername;dbname=pipper', $username, $password);

        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'Connected successfully';
    } catch (PDOException $e) {
    echo 'Connection failed:' . $e->getMessage();
    }
?>