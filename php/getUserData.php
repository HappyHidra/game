<?php
header('Content-Type: text/html; charset=utf-8');
require_once("../includes/connection.php");

session_start();
$result  = mysqli_query($connect, "SELECT * FROM users WHERE username='" . $_SESSION['session_username'] . "'");
$res2 = $result->fetch_object();
$_SESSION["session_full_name"] = $res2->full_name;

$result2  = mysqli_query($connect, "SELECT * FROM users WHERE username='" . $_SESSION['session_username'] . "'");
while ($row = $result2->fetch_object())
        $obj = $row;

session_write_close();
echo json_encode($obj);
