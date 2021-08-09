-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Ago-2021 às 21:39
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `petshop`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `pets`
--

CREATE TABLE `pets` (
  `id` int(255) NOT NULL,
  `petName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tutorName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tutorContact` text COLLATE utf8_unicode_ci NOT NULL,
  `petAge` int(255) NOT NULL,
  `petType` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `petBreed` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `pets`
--

INSERT INTO `pets` (`id`, `petName`, `tutorName`, `tutorContact`, `petAge`, `petType`, `petBreed`) VALUES
(2, 'Maria do Bairro Oi Soi', 'Cicero Romario', '99 9 9999 9999', 6, 'Gato', 'amarelo e preto'),
(4, 'Bolotas', 'Bel Sobral', '99 9999 9999', 2, 'Cachorro', 'pincher'),
(5, 'Lucian', 'Senna', '00 0000 0000', 30, 'Cachorro', 'da tiro'),
(6, 'Greta', 'Dhiego', '99 9999 9999', 1, 'gato', 'linda'),
(7, 'Dumba', 'Dona Graça', '00 0000 0000', 6, 'Cachorro', 'vira-lata'),
(8, 'Maicon', 'Jordan', '00 0000 0000', 5, 'Cachorro', 'muito grande'),
(13, 'teste', 'teste', 'teste', 0, 'teste', 'teste');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `pets`
--
ALTER TABLE `pets`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
