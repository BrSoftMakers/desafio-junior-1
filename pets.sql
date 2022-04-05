-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Abr-2022 às 17:13
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.28

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
  `id` int(11) NOT NULL,
  `nome_pet` varchar(30) DEFAULT NULL,
  `raca_pet` varchar(30) DEFAULT NULL,
  `idade_pet` varchar(30) DEFAULT NULL,
  `tipo_pet` varchar(30) DEFAULT NULL,
  `nome_dono` varchar(30) DEFAULT NULL,
  `telefone_dono` varchar(30) DEFAULT NULL,
  `endereco_dono` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pets`
--

INSERT INTO `pets` (`id`, `nome_pet`, `raca_pet`, `idade_pet`, `tipo_pet`, `nome_dono`, `telefone_dono`, `endereco_dono`) VALUES
(18, 'Bob', 'pinxer', '10', 'Gato', 'Dhiego', '08193116884', 'Ruaa'),
(20, 'Teste ', 'teste', 'teste', 'Gato', 'teste', 'teste', 'teste'),
(21, 'novo teste', 'novo teste', 'novo ', 'Cachorro', 'teste', 'teste', 'teste');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
