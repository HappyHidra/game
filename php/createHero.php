<?php
require_once("../includes/connection.php");

$chosenHero = htmlspecialchars($_POST['chosenHero']);
$strengthResult = htmlspecialchars($_POST['strengthResult']);
$agilityResult = htmlspecialchars($_POST['agilityResult']);
$intResult = htmlspecialchars($_POST['intResult']);
$heroName = htmlspecialchars($_POST['heroName']);
$pointsLeft = htmlspecialchars($_POST['pointsLeft']);

session_start();
$_SESSION["session_userPortrait"] = $chosenHero;
$_SESSION["session_strengthResult"] = $strengthResult;
$_SESSION["session_agilityResult"] = $agilityResult;
$_SESSION["session_intResult"] = $intResult;
$_SESSION["session_heroLevel"] = 1;
$_SESSION["session_heroName"] = $heroName;
$_SESSION["session_hero_freePoints"] = $pointsLeft;

mysqli_autocommit($connect, TRUE);
mysqli_query($connect, "UPDATE user_heroes SET hero_portrait = '$chosenHero' WHERE user_name = '" . $_SESSION['session_username'] . "'");
mysqli_query($connect, "UPDATE user_heroes SET hero_str = '$strengthResult' WHERE user_name = '" . $_SESSION['session_username'] . "'");
mysqli_query($connect, "UPDATE user_heroes SET hero_agility = '$agilityResult' WHERE user_name = '" . $_SESSION['session_username'] . "'");
mysqli_query($connect, "UPDATE user_heroes SET hero_int = '$intResult' WHERE user_name = '" . $_SESSION['session_username'] . "'");
mysqli_query($connect, "UPDATE user_heroes SET hero_name = '$heroName' WHERE user_name = '" . $_SESSION['session_username'] . "'");
mysqli_query($connect, "UPDATE user_heroes SET hero_level = '1' WHERE user_name = '" . $_SESSION['session_username'] . "'");
mysqli_query($connect, "UPDATE user_heroes SET hero_freePoints = '$pointsLeft' WHERE user_name = '" . $_SESSION['session_username'] . "'");

$connect->close();
session_write_close();
echo "ok";
