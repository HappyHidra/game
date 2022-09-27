$(document).ready(function () {
  $("#btnLogin").click(function (e) {
    e.preventDefault();
    btnLoginFunc("php/loginUser.php");
    return false;
  });

  $("#btnRegistration").click(function (e) {
    e.preventDefault();
    btnRegistrationFunc();
    return false;
  });

  const emailReg = document.getElementById("emailReg");
  const passwordReg = document.getElementById("passwordReg");
  $("#register").click(function (e) {
    if (emailReg.validity.valid && passwordReg.validity.valid) {
      e.preventDefault();
      registrationClickFunc("php/registrationUser.php");
      return false;
    }
  });

  $("#btnRegBack").click(function (e) {
    e.preventDefault();
    btnRegBackFunc();
    return false;
  });
});

let loginForm = document.querySelector("#loginForm");
let registrationForm = document.querySelector("#regForm");
let resultForms = document.querySelectorAll(".resultForm");
const clearResultForms = () => {
  for (let resultForm of resultForms) {
    resultForm.innerHTML = " ";
  }
};

const btnLoginFunc = (url) => {
  let result_form = resultForms[0];
  const data = new URLSearchParams(new FormData(loginForm));
  fetch(url, {
    method: "post",
    body: data,
  })
    .then((response) => {
      console.log(response);
      // Данные отправлены сервером, если код ответа НЕ 200 значит реджектим промис
      if (response.status !== 200) {
        return Promise.reject();
      }
      return response.text();
    })
    .then((i) => {
      // Данные отправлены сервером, проблемы с вводом пользователя
      if (i == "Неправильный пароль!") {
        document.body.style.backgroundBlendMode = "luminosity";
        result_form.innerHTML = i;
      } else if (i == "Заполните поля логин и пароль!") {
        document.body.style.backgroundBlendMode = "luminosity";
        result_form.innerHTML = i;
      } else if (i == "Пользователь не найден") {
        document.body.style.backgroundBlendMode = "luminosity";
        result_form.innerHTML = i;
      } else if (i == "ok") {
        // Данные отправлены сервером, вход разрешен
        window.location.href = "userProfile.php";
      }
    })
    .catch((e) => {
      // Данные не отправлены сервером
      document.body.style.background = "red";
      result_form.innerHTML = "Ошибка. Данные от сервера не получены." + e;
    });
};

const btnRegistrationFunc = () => {
  loginForm.style.display = "none";
  registrationForm.style.display = "block";
  clearResultForms();
};

const btnRegBackFunc = () => {
  loginForm.style.display = "block";
  registrationForm.style.display = "none";
  clearResultForms();
};

const registrationClickFunc = (url) => {
  let result_form = resultForms[1];
  const data = new URLSearchParams(new FormData(regForm));
  // Первым аргументом кладем путь, метод, и данные в body
  fetch(url, {
    method: "post",
    body: data,
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
      // Данные отправлены сервером, пользователь НЕ зарегистрирован
      // console.log(i);
      if (i == "NotUniq") {
        document.body.style.backgroundBlendMode = "luminosity";
        result_form.innerHTML = "Пользователь уже существует. Нужен другой Никнейм";
      } else if (i == "Не получилось создать пользователя!") {
        throw i;
      } else if (i == "Заполните все поля!") {
        result_form.innerHTML = i;
      } else if (i == "Пользователь зарегистрирован!") {
        // Данные отправлены сервером, пользователь зарегистрирован
        document.body.style.backgroundBlendMode = "hard-light";
        result_form.innerHTML = "Данные получены: " + i;
        setTimeout(() => {
          loginForm.style.display = "block";
          registrationForm.style.display = "none";
        }, 1500);
      }
    })
    .catch((e) => {
      // Данные не отправлены сервером
      document.body.style.background = "red";
      result_form.innerHTML = "Ошибка. Данные от сервера не получены." + e;
    });
};
