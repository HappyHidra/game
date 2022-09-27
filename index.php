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

<body>
    <!-- FETCH LOGIN FORM -->
    <div class="container d-flex h-100 align-middle">
        <form action="" id="loginForm" method="POST">
            <div class="form-horizontal">
                <h2>Аккаунт</h2>
                <div class="form-group col">
                    <input type="text" name="username" class="form-control text-center" id="username" placeholder="Введите логин" AUTOCOMPLETE="off" required oninvalid="this.setCustomValidity('Нужно имя')" oninput="setCustomValidity('')">
                </div>
                <h2>Пароль</h2>
                <div class="form-group col">
                    <input type="password" name="password" class="form-control text-center" id="password" AUTOCOMPLETE="off" required oninvalid="this.setCustomValidity('Секретное слово')" oninput="setCustomValidity('')">
                </div>
                <div class="form-group row">
                    <button class="btn btn-default button col" id="btnLogin">Вход</button>
                    <button class="btn btn-default button col" id="btnRegistration">Регистрация</button>
                </div>
            </div>
            <div class="resultForm"></div>
        </form>

        <!-- FETCH REGISTRATION FORM -->
        <form action="" id="regForm" method="POST" name="registerform">
            <h1>Регистрация</h1>
            <p><label for="fullNameReg">Имя пользователя<br>
                    <input class="input" id="fullNameReg" name="fullNameReg" size="32" type="text" value=""></label></p>
            <p><label for="emailReg">E-mail<br>
                    <input class="input" id="emailReg" name="emailReg" size="32" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required></label></p>
            <p><label for="userNameReg">Логин для входа<br>
                    <input class="input" id="userNameReg" name="userNameReg" size="32" type="text" value="" required></label></p>
            <p><label for="passwordReg">Пароль<br>
                    <input class="input" id="passwordReg" name="passwordReg" size="32" type="password" value="" minlength="8" required></label>
            </p>
            <button type="submit" class="btn btn-default button" id="register">Зарегистрироваться</button>
            <div class="row">
                <div class="col-sm-6 m-auto" id="btnRegBack">Уже зарегистрированы</div>
            </div>
            <div class="resultForm"></div>
        </form>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    <script src="js/loginRegistration.js"></script>
</body>

</html>