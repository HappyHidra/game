<!DOCTYPE HTML>
<html>
<?php include("includes/header.php");
require_once("includes/connection.php");
session_start(); ?>

<body>

    <div class="container" id="game">
        <div class="row h-100 help justify-content-around no-gutters">
            <div class="col-10 m-auto">
                <h1 id=main-heading>Найди клад на карте!</h1>
            </div>
            <div class="col-2 mr-2 links" id="btnBack">Назад</div>
        </div>
        <div class="container" id="absContainer">
            <img id="map" src="images/World_map.jpg">
            <div id="maps"></div>
        </div>
        <div class='row h-100 help justify-content-around no-gutters'>
            <div class="col m-auto p-0" id="distance">Кликай по карте и читай подсказки!</div>
            <div class="col m-auto p-0" id='clicks'></div>
            <div class="col mr-2 links" id='again'>Начать сначала</div>
        </div>
    </div>

    <script src='js/game.js'></script>
</body>

</html>