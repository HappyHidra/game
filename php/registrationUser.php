<?php
header('Content-Type: text/html; charset=utf-8');
require_once("../includes/connection.php");
if (!empty($_POST['fullNameReg']) && !empty($_POST['emailReg']) && !empty($_POST['userNameReg']) && !empty($_POST['passwordReg'])) {
    $full_name = $_POST['fullNameReg'];
    $username = $_POST['userNameReg'];
    $email = trim(mb_strtolower($_POST['emailReg']));
    $password = trim($_POST['passwordReg']);
    $password = password_hash($password, PASSWORD_DEFAULT);

    mysqli_autocommit($connect, TRUE);
    //делаем выборку пользователей с введённым ником 
    //если одинаковых нет, тогда создаём
    $uniqUser = $connect->query("SELECT * from `users` WHERE `username` = '$username'");
    $uniqEmail = $connect->query("SELECT * from `users` WHERE `email` = '$email'");
    if ($uniqUser->num_rows == 0 && $uniqEmail->num_rows == 0) {
        $result = mysqli_query($connect, "INSERT INTO users (full_name, email, username, password)
                    VALUES('$full_name', '$email' , '$username', '$password')");
        mysqli_query($connect, "INSERT INTO `user_heroes` (user_name) VALUES ('$username')");
        mysqli_close($connect);
        if ($result) {
            echo ("Пользователь зарегистрирован!");
        } else {
            echo ("Не получилось создать пользователя!");
        }
    } else {
        echo "NotUniq";
    }
} else {
    echo "Заполните все поля!";
}
