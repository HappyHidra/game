<!DOCTYPE html>
<html lang="en">
<?php
include("includes/connection.php");
?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Дальний рубеж </title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div class="container d-flex flex-column h-100 align-middle">
        <div class="row">
            <form id=chooseHeroForm>
                <h1>Выберите расу персонажа:</h1>
                <div class="row" id="heroes">
                    <div class="characters col" data-char="ork"><span>Орк</span><br><img src="images/heroes/ork.png"> </div>
                    <div class="characters col" data-char="gnome"><span>Гном</span><br><img src="images/heroes/gnome.png"></div>
                    <div class="characters col" data-char="elf"><span>Эльф</span><br><img src="images/heroes/elf.png"></div>
                    <div class="characters col" data-char="half-ork"><span>Полуорк</span><br><img src="images/heroes/half-ork.png"></div>
                    <div class="characters col" data-char="human"><span>Человек</span><br><img src="images/heroes/human.png"></div>
                    <div class="characters col" data-char="half-elf"><span>Полуэльф</span><br><img src="images/heroes/half-elf.png"></div>
                </div>
            </form>
        </div>

        <div class="row" id="attr">
            <div class="row">
                <div class="col m-auto"><input id="inputHeroName" class="text-center" type="text" placeholder="Введите имя персонажа"></input></div>
            </div>
            <span>Выберите параметры:<br></span>
            <span>Осталось очков: <span id="pointsLeft"> </span></span>
            <div class="row">
                <div class="col-10 p-0">
                    <div class="row justify-content-around no-gutters">
                        <div id=strength class="col-6 p-0"><span>Сила:</span></div>
                        <div id=strengthMinus class="col col-sm-1 p-0"><img class="setAttr" src="images/icons/attrminus.jpg"></div>
                        <div id=strengthResult class="col-1 p-0">0</div>
                        <div id=strengthPlus class="col col-sm-1 p-0"><img class="setAttr" src="images/icons/attrplus.jpg"></div>
                    </div>
                    <div class="row justify-content-around no-gutters">
                        <div id=agility class="col-6 p-0"><span>Ловкость:</span></div>
                        <div id=agilityMinus class="col col-sm-1 p-0"><img class="setAttr" src="images/icons/attrminus.jpg"></div>
                        <div id=agilityResult class="col-1 p-0">0</div>
                        <div id=agilityPlus class="col col-sm-1 p-0"><img class="setAttr" src="images/icons/attrplus.jpg"></div>
                    </div>
                    <div class="row justify-content-around no-gutters">
                        <div id=int class="col-6 p-0"><span>Интеллект:</span></div>
                        <div id=intMinus class="col col-sm-1 p-0"><img class="setAttr" src="images/icons/attrminus.jpg"></div>
                        <div id=intResult class="col-1 p-0">0</div>
                        <div id=intelligencePlus class="col col-sm-1 p-0"><img class="setAttr" src="images/icons/attrplus.jpg"></div>
                    </div>
                </div>
                <div class="col-sm-2 p-0 m-auto">
                    <div type="button" class="links" id="btnCancel">Сбросить</div>
                </div>
            </div>
        </div>
        <div class="row m-auto">
            <div class="col">
                <div type="button" class="links" id="btnBack">Назад</div>
            </div>
            <div class="col">
                <div type="button" class="links" id="btnSaveHero">Сохранить</div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    <script src="js/createHero.js"></script>
</body>

</html>