$(document).ready(function () {
  const characters = document.querySelectorAll(".characters");
  const attr = document.querySelector("#attr");
  const btnCancel = document.querySelector("#btnCancel");
  const btnSave = document.querySelector("#btnSaveHero");
  const inputHeroName = document.querySelector("#inputHeroName");

  const strengthPlus = document.querySelector("#strengthPlus");
  const strengthMinus = document.querySelector("#strengthMinus");
  const strengthResultHTML = document.querySelector("#strengthResult");

  const agilityPlus = document.querySelector("#agilityPlus");
  const agilityMinus = document.querySelector("#agilityMinus");
  const agilityResultHTML = document.querySelector("#agilityResult");

  const intPlus = document.querySelector("#intelligencePlus");
  const intMinus = document.querySelector("#intMinus");
  const intResultHTML = document.querySelector("#intResult");

  const pointsLeftHMTL = document.querySelector("#pointsLeft");
  pointsLeftHMTL.innerHTML = 10;

  let strengthResult = 0;
  let agilityResult = 0;
  let intResult = 0;
  let chosenHero = "";
  let heroName = "";
  let pointsLeft = 10;

  strengthMinus.onclick = function () {
    if ((strengthResult > 0) & (pointsLeft < 10)) {
      strengthResult--;
      pointsLeft++;
      pointsLeftHMTL.innerHTML = pointsLeft;
      pointsLeftHMTL.style.color = "wheat";
      strengthResultHTML.innerHTML = strengthResult;
    } else return;
  };

  strengthPlus.onclick = function () {
    if ((strengthResult < 10) & (pointsLeft > 0)) {
      strengthResult++;
      pointsLeft--;
      pointsLeftHMTL.innerHTML = pointsLeft;
      pointsLeftHMTL.style.color = "wheat";
      strengthResultHTML.innerHTML = strengthResult;
    } else {
      pointsLeftHMTL.style.color = "red";
      return;
    }
  };

  agilityMinus.onclick = function () {
    if ((agilityResult > 0) & (pointsLeft < 10)) {
      agilityResult--;
      pointsLeft++;
      pointsLeftHMTL.innerHTML = pointsLeft;
      pointsLeftHMTL.style.color = "wheat";
      agilityResultHTML.innerHTML = agilityResult;
    } else return;
  };

  agilityPlus.onclick = function () {
    if ((agilityResult < 10) & (pointsLeft > 0)) {
      agilityResult++;
      pointsLeft--;
      pointsLeftHMTL.innerHTML = pointsLeft;
      pointsLeftHMTL.style.color = "wheat";
      agilityResultHTML.innerHTML = agilityResult;
    } else {
      pointsLeftHMTL.style.color = "red";
      return;
    }
  };

  intMinus.onclick = function () {
    if ((intResult > 0) & (pointsLeft < 10)) {
      intResult--;
      pointsLeft++;
      pointsLeftHMTL.innerHTML = pointsLeft;
      pointsLeftHMTL.style.color = "wheat";
      intResultHTML.innerHTML = intResult;
    } else return;
  };

  intPlus.onclick = function () {
    if ((intResult < 10) & (pointsLeft > 0)) {
      intResult++;
      pointsLeft--;
      pointsLeftHMTL.innerHTML = pointsLeft;
      pointsLeftHMTL.style.color = "wheat";
      intResultHTML.innerHTML = intResult;
    } else {
      pointsLeftHMTL.style.color = "red";
      return;
    }
  };

  for (let character of characters) {
    //В зависимости от кликнутого портрета
    character.onclick = function () {
      chosenHero = character.getAttribute("data-char");
      $(character).siblings().hide("slow"); // скрываем сиблингов (jquery метод)
      if (window.innerWidth < 768) {
        character.getElementsByTagName("img")[0].style.width = "96px";
        character.getElementsByTagName("img")[0].style.height = "96px";
      }
      attr.style.display = "block";
      btnCancel.style.display = "block";
      btnSave.style.display = "block";
    };
  }

  $("#btnBack").click(function (event) {
    event.preventDefault();
    btnBackFunc("userProfile.php");
    return false;
  });

  function btnBackFunc(url) {
    document.location.href = url;
  }

  $("#btnCancel").click(function (event) {
    event.preventDefault();
    btnCancelFunc();
    return false;
  });

  function btnCancelFunc() {
    for (let character of characters) {
      $(character).siblings().show("slow");
      if (window.innerWidth < 768) {
        character.getElementsByTagName("img")[0].style.width = "64px";
        character.getElementsByTagName("img")[0].style.height = "64px";
      }
      attr.style.display = "none";
      btnCancel.style.display = "none";
      btnSave.style.display = "none";
    }

    pointsLeftHMTL.innerHTML = 10;
    pointsLeftHMTL.style.color = "wheat";
    strengthResult = 0;
    agilityResult = 0;
    intResult = 0;
    chosenHero = "";
    pointsLeft = 10;
    inputHeroName.value = "";
    agilityResultHTML.innerHTML = agilityResult;
    strengthResultHTML.innerHTML = strengthResult;
    intResultHTML.innerHTML = intResult;
  }

  $("#btnSaveHero").click(function (event) {
    event.preventDefault();
    btnSaveHeroFunc();
    return false;
  });

  function btnSaveHeroFunc() {
    heroName = inputHeroName.value;
    $.ajax({
      url: "php/createHero.php",
      type: "POST",
      data: { chosenHero, heroName, strengthResult, agilityResult, intResult, pointsLeft },
      success: function (response) {
        document.location.href = "userProfile.php";
      },
    });
  }
});
