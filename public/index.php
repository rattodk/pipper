<?php 
    header("Access-Control-Allow-Origin: *"); 
    header("Content-Type: application/json; charset=UTF-8"); 
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE"); 
    header("Access-Control-Max-Age: 3600"); 
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); 
    
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