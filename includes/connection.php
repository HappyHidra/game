<?php
require("constants.php");
header('Content-Type: text/html; charset=utf-8');
$connect = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME); // server
if ($connect->connect_error) {
    die('Error : (' . $connect->connect_errno . ') ' . $connect->connect_error);
} else {
    // echo "Подключились к БД успешно!";
}
/* изменение набора символов на utf8 */
$connect->set_charset("utf8");
