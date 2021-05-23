-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Maio-2021 às 04:02
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `soft`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nome_animal` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idade` int(11) DEFAULT NULL,
  `tipo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `raca` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nome_dono` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefone_dono` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`id`, `nome_animal`, `idade`, `tipo`, `raca`, `nome_dono`, `telefone_dono`, `updated_at`, `created_at`) VALUES
(5, 'Luma', 2, 'Cão', 'Pudle', 'João', '9891913234', '2021-05-22 23:38:19', '2021-05-22 21:08:25'),
(7, 'Spike', 4, 'Cachorro', 'pug', 'Davi', '81992030312', '2021-05-22 23:59:09', '2021-05-22 23:59:09'),
(8, 'Chico', 4, 'Gato', 'trad', 'Janaina', '819920303', '2021-05-23 00:00:37', '2021-05-23 00:00:37'),
(9, 'Lop', 4, 'Cachorro', 'pitbull', 'Maria', '(81) 99939-4343', '2021-05-23 02:00:32', '2021-05-23 02:00:32');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
