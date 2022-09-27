<?php
header('Content-Type: text/html; charset=utf-8');
require_once("../includes/connection.php");

$username = trim(mb_strtolower($_POST['username']));
$password = trim($_POST['password']);
$userData = mysqli_query($connect, "SELECT * FROM users WHERE `username` = '$username'");

if ($userData->num_rows == 0) {
    echo 'Пользователь не найден';
} else {
    $userData = $userData->fetch_assoc();
    if (isset($username) && isset($password)) {
        if (password_verify($password, $userData["password"])) {
            session_start();
            $_SESSION['session_username'] = $username;
            $_SESSION["session_id"] = session_id();
            session_write_close();
            echo "ok"; //то что посылается сервером в ответ
        } else {
            echo "Неправильный пароль!";
        }
    } else {
        echo "Заполните поля логин и пароль!";
    }
}
