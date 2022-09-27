<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Дальний рубеж </title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
</head>
<?php
require_once("includes/connection.php");
session_start();
// echo session_encode();
if (!isset($_SESSION["session_username"])) :
    header("location:index.php");
else :
?>

    <body>
        <!--USER DATA CONTAINER -->
        <div class="container d-flex h-100 align-middle">
            <div id="welcome">
                <div class="row">
                    <h2 class="col-s-10 col-md-8 m-auto" id="welcomeText">Добро пожаловать,<br> </h2>
                    <div class="col-s-2 col-md-4 m-auto">
                        <div id="btnLogout" class="links">Выйти из аккаунта</div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-4 p-0">
                        <div id="heroClass">Ваш персонаж:<br></div>
                        <div id="heroName"></div>
                        <img id="heroPortrait"></img>
                        <div class="mt-2" id="heroLevel">Уровень: </div>
                    </div>
                    <div class="col-5 m-auto p-0">
                        <div class="row justify-content-start no-gutters">
                            <div id="heroFreePoints">Свободные очки характеристик: </div>
                        </div>
                        <div class="row justify-content-around no-gutters">
                            <!-- <div id=strengthMinus class="col col-sm-1 p-0"><img class="setAttr" src="images/icons/attrminus.jpg"></div> -->
                            <div id="userStr" class="col p-0">Сила: </div>
                            <div id="strPlus" class="col mx-auto p-0"><img class="setAttr" src="images/icons/attrplus.jpg"></div>
                        </div>
                        <div class="row justify-content-center no-gutters">
                            <!-- <div id=agilityMinus class="col col-sm-1 p-0"><img class="setAttr" src="images/icons/attrminus.jpg"></div> -->
                            <div id="userAgi" class="col p-0">Ловкость: </div>
                            <div id="agiPlus" class="col p-0"><img class="setAttr" src="images/icons/attrplus.jpg"></div>
                        </div>
                        <div class="row justify-content-center no-gutters">
                            <!-- <div id=intMinus class="col col-sm-1 p-0"><img class="setAttr" src="images/icons/attrminus.jpg"></div> -->
                            <div id="userInt" class="col p-0">Интеллект: </div>
                            <div id="intPlus" class="col p-0"><img class="setAttr" src="images/icons/attrplus.jpg"></div>
                        </div>
                    </div>
                    <div class="col-3 m-auto p-0">
                        <div id="btnCreateHero" class="links">Создать нового персонажа</div>
                    </div>
                </div>
                <div class="row mt-5 col-xs col-md-4 m-auto">
                    <div id="btnStartGame" class="links">Начать игру</div>
                </div>
            </div>
        </div>
        <div class="resultForm"></div>
        </div>

    <?php endif; ?>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    <script src="js/personalize.js"></script>
    </body>

</html>