<?php
header('Content-Type: text/html; charset=utf-8');
require_once("../includes/connection.php");

session_start();

$result  = mysqli_query($connect, "SELECT * FROM user_heroes WHERE user_name='" . $_SESSION['session_username'] . "'");
$res2 = $result->fetch_object();
$_SESSION["session_userPortrait"] = $res2->hero_portrait;
$_SESSION["session_strengthResult"] = $res2->hero_str;
$_SESSION["session_agilityResult"] = $res2->hero_agility;
$_SESSION["session_intResult"] = $res2->hero_int;
$_SESSION["session_heroLevel"] = $res2->hero_level;
$_SESSION["session_heroName"] = $res2->hero_name;
$_SESSION["session_hero_freePoints"] = $res2->hero_freePoints;

$result2  = mysqli_query($connect, "SELECT * FROM user_heroes WHERE user_name='" . $_SESSION['session_username'] . "'");
while ($row = $result2->fetch_object())
        $obj = $row;

session_write_close();
echo json_encode($obj);
