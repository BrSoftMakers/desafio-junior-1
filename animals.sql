-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26/10/2021 às 16:04
-- Versão do servidor: 10.4.21-MariaDB
-- Versão do PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `crud`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `animals`
--

CREATE TABLE `animals` (
  `cod_animal` int(5) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `r_e` varchar(200) NOT NULL,
  `genero` varchar(200) NOT NULL,
  `telefone` varchar(10) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `idade` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `animals`
--

INSERT INTO `animals` (`cod_animal`, `nome`, `r_e`, `genero`, `telefone`, `foto`, `idade`) VALUES
(74, 'Miguel II', 'Hamster', 'M', '0000000000', '20211025081056.png', '18 dias'),
(82, 'Lop', 'Calopsita', 'M', '0000000000', '20211026031003.png', '1 ano'),
(85, 'Nix', 'Gato', 'F', '0000000000', '20211026031017.png', '2 meses'),
(90, 'Apollo', 'Cachorro ', 'M', '0000000000', '20211026041054.png', '1 ano');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `animals`
--
ALTER TABLE `animals`
  ADD PRIMARY KEY (`cod_animal`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `animals`
--
ALTER TABLE `animals`
  MODIFY `cod_animal` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
