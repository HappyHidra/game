<?php
require_once("../includes/connection.php");
session_start();
$heroLevel = ++$_SESSION["session_heroLevel"];
$freePoints = ++$_SESSION["session_hero_freePoints"];

mysqli_query($connect, "UPDATE user_heroes SET hero_level = '$heroLevel' WHERE user_name = '" . $_SESSION['session_username'] . "'");
mysqli_query($connect, "UPDATE user_heroes SET hero_freePoints = '$freePoints' WHERE user_name = '" . $_SESSION['session_username'] . "'");

$connect->close();
session_write_close();
echo "ok";
