$(document).ready(function () {
  fetch("php/getUserHero.php", {
    method: "post",
  })
    .then((response) => {
      // console.log(response);
      // Данные отправлены сервером, если код ответа НЕ 200 значит реджектим промис
      if (response.status !== 200) {
        return Promise.reject();
      }
      return response.text();
    })
    .then((response) => {
      let userDataHero = JSON.parse(response);
      let userStats =
        Number(userDataHero.hero_str) + Number(userDataHero.hero_int) + Number(userDataHero.hero_agility);
      // Создаем переменные// адаптивность
      const width = window.innerWidth > 768 ? 500 : 300;
      const height = 400;
      const hint = document.querySelector("#distance");
      // Получить случайное число от 0 до size-1
      const getRandomNumber = (size) => Math.floor(Math.random() * size);
      let clicks = 10 + userStats;
      $("#clicks").text("Осталось кликов: " + clicks);
      // Вычислить расстояние от клика (event) до клада (target)
      const getDistance = (event, target) => {
        const diffX = event.offsetX - target.x;
        const diffY = event.offsetY - target.y;
        return Math.sqrt(diffX * diffX + diffY * diffY);
      };
      // Получить для расстояния строку подсказки
      const getDistanceHint = (event, distance) => {
        let placeX = event.offsetX;
        let placeY = event.offsetY;

        if (distance < 10) {
          $("<div>", {
            css: {
              text: "X",
              backgroundColor: "rgba(255, 6, 6, 0.671)",
              position: "absolute",
              width: 10,
              height: 10,
            },
            offset: {
              top: placeY,
              left: placeX,
            },
          }).appendTo("#maps");
          hint.style.color = "rgba(255, 6, 6, 0.671)";
          return "Обожжешься!";
        }

        if (distance < 20) {
          $("<div>", {
            css: {
              backgroundColor: "rgba(238, 59, 14, 0.664)",
              position: "absolute",
              width: 8,
              height: 8,
            },
            offset: {
              top: placeY,
              left: placeX,
            },
          }).appendTo("#maps");
          hint.style.color = "rgba(238, 59, 14, 0.664)";
          return "Очень горячо";
        }

        if (distance < 40) {
          $("<div>", {
            css: {
              backgroundColor: "rgba(255, 52, 1, 0.966)",
              position: "absolute",
              width: 8,
              height: 8,
            },
            offset: {
              top: placeY,
              left: placeX,
            },
          }).appendTo("#maps");
          hint.style.color = "rgba(255, 52, 1, 0.966)";
          return "Горячо";
        }

        if (distance < 80) {
          $("<div>", {
            css: {
              backgroundColor: "rgba(255, 175, 1, 0.664)",
              position: "absolute",
              width: 8,
              height: 8,
            },
            offset: {
              top: placeY,
              left: placeX,
            },
          }).appendTo("#maps");
          hint.style.color = "rgba(255, 175, 1, 0.664)";
          return "Тепло";
        }

        if (distance < 160) {
          $("<div>", {
            css: {
              backgroundColor: "rgb(1, 153, 255)",
              position: "absolute",
              width: 8,
              height: 8,
            },
            offset: {
              top: placeY,
              left: placeX,
            },
          }).appendTo("#maps");
          hint.style.color = "rgb(1, 153, 255)";
          return "Холодно";
        }

        if (distance < 320) {
          $("<div>", {
            css: {
              backgroundColor: "rgba(1, 120, 255, 0.966)",
              position: "absolute",
              width: 8,
              height: 8,
            },
            offset: {
              top: placeY,
              left: placeX,
            },
          }).appendTo("#maps");
          hint.style.color = "rgba(1, 120, 255, 0.966)";
          return "Очень холодно";
        }

        $("<div>", {
          css: {
            backgroundColor: "blue",
            position: "absolute",
            width: 8,
            height: 8,
          },
          offset: {
            top: placeY,
            left: placeX,
          },
        }).appendTo("#maps");
        hint.style.color = "blue";
        return "Замерзнешь!";
      };

      // Случайная позиция клада
      let target = {
        x: getRandomNumber(width - 15),
        y: getRandomNumber(height - 15),
      };
      // Добавляем элементу img обработчик клика
      $("#map").click(function (event) {
        if (clicks === 0) {
          $("#map").attr("src", "images/death.jpg");
          $("#distance").text("Вы проиграли!");
          $("#again").text("Попытаться ещё раз?");
          return;
        }
        clicks -= 1;
        // Получаем расстояние от места клика до клада
        let distance = getDistance(event, target);
        // Преобразуем расстояние в подсказку
        let distanceHint = getDistanceHint(event, distance);
        // Записываем в элемент #distance новую подсказку
        $("#clicks").text("Осталось кликов: " + clicks);
        $("#distance").text(distanceHint);
        let placeX = event.offsetX;
        let placeY = event.offsetY;
        /////////////////////////////// Клад найден\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        if (distance < 8) {
          $("<div>", {
            css: {
              text: "X",
              color: "black",
              backgroundColor: "red",
              position: "absolute",
              width: 10,
              height: 10,
            },
            offset: {
              top: placeY,
              left: placeX,
            },
          }).appendTo("#maps");

          fetch("php/levelUpHero.php", {
            method: "post",
            body: "levelUp",
          })
            .then((response) => {
              // console.log(response);
              // Данные отправлены сервером, если код ответа НЕ 200 значит реджектим промис
              if (response.status !== 200) {
                return Promise.reject();
              }
              return response.text();
            })
            .then((i) => {
              // Данные отправлены сервером, проблемы с вводом пользователя
              if (i == "ok") {
                // Данные отправлены сервером, вход разрешен
                $("#again").hide();
                $("#clicks").hide();
                $("#map").attr("src", "images/treasure.jpg");
                $("#distance").text("Клад найден! Уровень персонажа повышен!");
                setTimeout(() => {
                  document.location.href = "userProfile.php";
                }, 4000);
              }
            })
            .catch((e) => {
              console.log("Ошибка. Данные от сервера не получены. " + e);
            });
        }
      });

      $("#again").click(function () {
        clicks = 10 + userStats;
        $("#clicks").text("Осталось кликов: " + clicks);
        $("#maps").children().remove();
        $("#map").attr("src", "images/World_map.jpg");
        target = {
          x: getRandomNumber(width),
          y: getRandomNumber(height),
        };
        $("#distance").text("Начинаем сначала!");
        hint.style.color = "rgb(48, 215, 153)";
        console.log(target);
      });

      $("#btnBack").click(function (event) {
        event.preventDefault();
        btnBackFunc("userProfile.php");
        return false;
      });

      function btnBackFunc(url) {
        document.location.href = url;
      }
    })
    .catch((e) => {
      console.log("Ошибка. Данные от сервера не получены. " + e);
    });
});
