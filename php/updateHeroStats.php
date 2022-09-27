<?php
require_once("../includes/connection.php");
session_start();
$heroStr = $_POST["currentStr"];
$heroAgility = $_POST["currentAgi"];
$heroInt = $_POST["currentInt"];
$freePoints = --$_SESSION["session_hero_freePoints"];

if (isset($heroStr))
    mysqli_query($connect, "UPDATE user_heroes SET hero_str = '$heroStr' WHERE user_name = '" . $_SESSION['session_username'] . "'");
if (isset($heroAgility))
    mysqli_query($connect, "UPDATE user_heroes SET hero_agility = '$heroAgility' WHERE user_name = '" . $_SESSION['session_username'] . "'");
if (isset($heroInt))
    mysqli_query($connect, "UPDATE user_heroes SET hero_int = '$heroInt' WHERE user_name = '" . $_SESSION['session_username'] . "'");

mysqli_query($connect, "UPDATE user_heroes SET hero_freePoints = '$freePoints' WHERE user_name = '" . $_SESSION['session_username'] . "'");

$connect->close();
session_write_close();
echo "ok";
