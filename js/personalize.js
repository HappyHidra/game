$(document).ready(function () {
  $.ajax({
    url: "php/getUserData.php", //url страницы
    type: "POST", //метод отправки
    dataType: "html", //формат данных
    success: function (response) {
      const userFullName = document.querySelector("#welcomeText");
      userData = JSON.parse(response);
      userFullName.append(userData.full_name);
      // console.log(userData);
    },
  });

  $.ajax({
    url: "php/getUserHero.php", //url страницы
    type: "POST", //метод отправки
    // dataType: "html", //формат данных
    success: function (response) {
      const userHeroPortrait = document.querySelector("#heroPortrait");
      const userStr = document.querySelector("#userStr");
      const userAgi = document.querySelector("#userAgi");
      const userInt = document.querySelector("#userInt");
      const heroName = document.querySelector("#heroName");
      const heroLevel = document.querySelector("#heroLevel");

      const heroFreePoints = document.querySelector("#heroFreePoints");
      const strPlus = document.querySelector("#strPlus");
      const agiPlus = document.querySelector("#agiPlus");
      const intPlus = document.querySelector("#intPlus");
      // console.log(response);
      let userDataHero = JSON.parse(response);
      if (userDataHero.hero_portrait !== "") {
        $(userHeroPortrait).attr("src", `images/heroes/${userDataHero.hero_portrait}.png`);
      } else $(userHeroPortrait).attr("src", `images/heroes/noHero.png`);

      let currentStr = userDataHero.hero_str;
      let currentAgi = userDataHero.hero_agility;
      let currentInt = userDataHero.hero_int;
      let freePoints = userDataHero.hero_freePoints;

      userStr.append(currentStr);
      userAgi.append(currentAgi);
      userInt.append(currentInt);
      heroName.append(userDataHero.hero_name);
      heroLevel.append(userDataHero.hero_level);

      if (freePoints > 0) {
        strPlus.style.display = "block";
        agiPlus.style.display = "block";
        intPlus.style.display = "block";
        heroFreePoints.innerHTML = `Свободные очки характеристик: ${freePoints}`;

        strPlus.onclick = function () {
          if (freePoints > 0) {
            currentStr++;
            freePoints--;
            $.ajax({
              url: "php/updateHeroStats.php",
              type: "POST",
              data: { currentStr, freePoints },
              success: function (response) {
                if (freePoints == 0) {
                  heroFreePoints.innerHTML = `Характеристики  <br> персонажа: <br> &#9660;`;
                  strPlus.style.display = "none";
                  agiPlus.style.display = "none";
                  intPlus.style.display = "none";
                } else heroFreePoints.innerHTML = `Свободные очки характеристик: ${freePoints}`;
                userStr.innerHTML = `Сила: ${currentStr}`;
              },
            });
          }
        };

        agiPlus.onclick = function () {
          if (freePoints > 0) {
            currentAgi++;
            freePoints--;
            $.ajax({
              url: "php/updateHeroStats.php",
              type: "POST",
              data: { currentAgi, freePoints },
              success: function (response) {
                if (freePoints == 0) {
                  heroFreePoints.innerHTML = `Характеристики  <br> персонажа: <br> &#9660;`;
                  strPlus.style.display = "none";
                  agiPlus.style.display = "none";
                  intPlus.style.display = "none";
                } else heroFreePoints.innerHTML = `Свободные очки характеристик: ${freePoints}`;
                userAgi.innerHTML = `Ловкость: ${currentAgi}`;
              },
            });
          }
        };

        intPlus.onclick = function () {
          if (freePoints > 0) {
            currentInt++;
            freePoints--;
            $.ajax({
              url: "php/updateHeroStats.php",
              type: "POST",
              data: { currentInt, freePoints },
              success: function (response) {
                if (freePoints == 0) {
                  heroFreePoints.innerHTML = `Характеристики  <br> персонажа: <br> &#9660;`;
                  strPlus.style.display = "none";
                  agiPlus.style.display = "none";
                  intPlus.style.display = "none";
                } else heroFreePoints.innerHTML = `Свободные очки характеристик: ${freePoints}`;
                userInt.innerHTML = `Интеллект: ${currentInt}`;
              },
            });
          }
        };
      } else {
        heroFreePoints.innerHTML = `Характеристики  <br> персонажа: <br>	&#9660;`;
        strPlus.style.display = "none";
        agiPlus.style.display = "none";
        intPlus.style.display = "none";
      }
    },
  });

  $("#btnCreateHero").click(function (event) {
    event.preventDefault();
    btnCreateHeroFunc("createHero.php");
    return false;
  });

  function btnCreateHeroFunc(url) {
    document.location.href = url;
  }

  $("#btnLogout").click(function (event) {
    event.preventDefault();
    btnLogoutFunc("index.php");
    return false;
  });

  function btnLogoutFunc(url) {
    const kill_session = () => {
      xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", "includes/session_destroyer.php", false);
      xmlhttp.send();
    };
    kill_session();
    window.location.href = url;
  }

  $("#btnStartGame").click(function (event) {
    event.preventDefault();
    btnStartGameFunc("game.php");
    return false;
  });

  function btnStartGameFunc(url) {
    document.location.href = url;
  }
});
