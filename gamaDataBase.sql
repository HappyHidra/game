-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Сен 28 2022 г., 00:20
-- Версия сервера: 10.4.24-MariaDB
-- Версия PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `game`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `full_name`) VALUES
(13, 'w', '$2y$10$btH7L78tegWLS18e7pEbIu.YeEaCcIx0zR9Dyz5B2TlT9g1I5./Le', 'w', 'WiniVidiViciTheSecond'),
(23, 'NataTheGreat', '$2y$10$F5Zc40x2tXAlsDax2DCJ9u0E.driNDHfxWGtHhI9YEVJpf37Xb..K', '345@345.ru', '345');

-- --------------------------------------------------------

--
-- Структура таблицы `user_heroes`
--

CREATE TABLE `user_heroes` (
  `id` int(11) NOT NULL,
  `user_name` varchar(32) NOT NULL,
  `hero_portrait` varchar(32) NOT NULL,
  `hero_str` int(11) NOT NULL,
  `hero_agility` int(11) NOT NULL,
  `hero_int` int(11) NOT NULL,
  `hero_level` int(11) NOT NULL,
  `hero_name` varchar(32) NOT NULL,
  `hero_freePoints` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `user_heroes`
--

INSERT INTO `user_heroes` (`id`, `user_name`, `hero_portrait`, `hero_str`, `hero_agility`, `hero_int`, `hero_level`, `hero_name`, `hero_freePoints`) VALUES
(9, 'w', 'elf', 4, 4, 3, 2, 'HarolThePain', 0),
(11, 'NataTheGreat', '', 0, 0, 0, 0, '', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user_heroes`
--
ALTER TABLE `user_heroes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT для таблицы `user_heroes`
--
ALTER TABLE `user_heroes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
