-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 04-Ago-2021 às 06:25
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petlove`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `pet_1`
--

CREATE TABLE `pet_1` (
  `cod_pet` int(11) NOT NULL,
  `nome_pet` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `especie_pet` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `raca_pet` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `idade_pet` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `num_rastreio` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `num_contato` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `nome_tutor` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `pet_1`
--

INSERT INTO `pet_1` (`cod_pet`, `nome_pet`, `especie_pet`, `raca_pet`, `idade_pet`, `num_rastreio`, `num_contato`, `nome_tutor`) VALUES
(55, 'Cachorro', 'cachorro', 'SRD', '3', 'n/a', '(xx) x xxxx-xxxx', 'Tutor1'),
(56, 'gato', 'gato', 'srd', '3', 'n/a', '(xx) x xxxx-xxxx', 'tutor2'),
(57, 'ave', 'ave', 'srd', '3', 'N/A', '(xx) x xxxx-xxxx', 'tutor3'),
(58, 'cobra', 'cobra', 'srd', '4', 'N/A', '(xx) x xxxx-xxxx ', 'tutor3'),
(59, 'roedor 1', 'roedor', 'roedor', '1', 'n/a', '(xx) x xxxx-xxxx', 'tutor5'),
(60, 'roedor 1', 'roedor', 'roedor', '3 meses', 'n/a', '(xx) x xxxx-xxxx ', 'tutor5');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pet_1`
--
ALTER TABLE `pet_1`
  ADD PRIMARY KEY (`cod_pet`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pet_1`
--
ALTER TABLE `pet_1`
  MODIFY `cod_pet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
