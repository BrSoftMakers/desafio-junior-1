-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22-Ago-2021 às 23:19
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `whaspets`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `agendamento`
--

CREATE TABLE `agendamento` (
  `id` int(5) NOT NULL,
  `id_pet` int(4) DEFAULT NULL,
  `dia` varchar(10) DEFAULT NULL,
  `hora` varchar(10) DEFAULT NULL,
  `servico` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `agendamento`
--

INSERT INTO `agendamento` (`id`, `id_pet`, `dia`, `hora`, `servico`) VALUES
(2, 14, '23/08/2021', '08:00', 'Banho + tosa');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pet`
--

CREATE TABLE `pet` (
  `id` int(4) NOT NULL,
  `nome` varchar(40) NOT NULL,
  `raca` varchar(20) DEFAULT NULL,
  `idade` varchar(2) DEFAULT NULL,
  `tipo` varchar(6) NOT NULL,
  `id_tutor` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pet`
--

INSERT INTO `pet` (`id`, `nome`, `raca`, `idade`, `tipo`, `id_tutor`) VALUES
(14, 'marley', 'cocker', '4', 'canino', '012'),
(15, 'pretinha', 'não-definida', '3', 'canino', '012');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tutor`
--

CREATE TABLE `tutor` (
  `cpf` varchar(11) NOT NULL,
  `nome_tutor` varchar(40) NOT NULL,
  `telefone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tutor`
--

INSERT INTO `tutor` (`cpf`, `nome_tutor`, `telefone`) VALUES
('011', 'erica', '1112222'),
('012', 'Nilson', '123');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `agendamento`
--
ALTER TABLE `agendamento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pet` (`id_pet`);

--
-- Índices para tabela `pet`
--
ALTER TABLE `pet`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tutor`
--
ALTER TABLE `tutor`
  ADD PRIMARY KEY (`cpf`),
  ADD UNIQUE KEY `nome` (`nome_tutor`),
  ADD UNIQUE KEY `telfone` (`telefone`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `agendamento`
--
ALTER TABLE `agendamento`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `pet`
--
ALTER TABLE `pet`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `agendamento`
--
ALTER TABLE `agendamento`
  ADD CONSTRAINT `agendamento_ibfk_1` FOREIGN KEY (`id_pet`) REFERENCES `pet` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
