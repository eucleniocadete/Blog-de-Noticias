-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Ago-2025 às 23:11
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_blog`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_categoria`
--

CREATE TABLE `tb_categoria` (
  `id` int(11) NOT NULL,
  `categoria` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_categoria`
--

INSERT INTO `tb_categoria` (`id`, `categoria`) VALUES
(1, 'Tecnologia'),
(2, 'Saude'),
(3, 'Economia'),
(4, 'Politica'),
(5, 'Entretenimento');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_noticias`
--

CREATE TABLE `tb_noticias` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `conteudo` text DEFAULT NULL,
  `data` date DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_noticias`
--

INSERT INTO `tb_noticias` (`id`, `titulo`, `id_categoria`, `conteudo`, `data`) VALUES
(2, 'Kuanza perde seu valor', 3, 'Nessa manhã de sengunda feira o kuanza perde seu valor em 5% segundo Banco Nacional de Angola.', '2025-06-02'),
(3, 'MPLA candidato a vencer as eleições de 2026', 4, 'Segundo uma pesquisa feita por jornalistas da TV ZIMBO pelos bairros de Luanda, conseguiram observar que 73% da população de Luanda pretende votar para o MPLA nas próximas eleições e 30% a UNITA.', '2025-06-02'),
(4, 'Nova temporada de ONZE', 5, 'Segundo a Disney, a quarta temporada de ON11ZE será lançada próximo ano(data a anunciar). O anuncio foi dado por um trailer postado nas redes socias da empresa Norte-americana.', '2025-06-02'),
(5, 'Hospitais em Luanda estão sem medicamentos', 2, 'Hospitais na capital de Angola estão sem medicamentos e isso causa muitas consequencias, como mortes. A população fica em frente dos hospitais a reclamarem sobre a falta de medicamentos.', '2025-06-02'),
(43, 'Vibe coding vale apena?', 1, '\"Vibe coding\" (ou \"programação em vibe\") é uma abordagem para desenvolvimento de software que usa inteligência artificial (IA), especialmente modelos de linguagem grandes (LLMs), para gerar código a partir de descrições em linguagem natural. Em vez de esc', '2025-06-03'),
(44, 'A economia de angola', 3, 'A economia angolana é fortemente dependente das receitas petrolíferas, com o setor petrolífero a representar a maior parte das exportações e a impulsionar a economia. No entanto, o país está a tentar diversificar a sua economia, explorando outros setores ', '2025-06-03'),
(46, 'Apple relança versão revisada do iOS 26 beta para iPhones mais recentes', 1, 'Em uma movimentação pouco comum, a Apple lançou uma nova compilação do iOS 26 beta 1 apenas alguns dias após a versão inicial ter sido disponibilizada para desenvolvedores.\n\nA atualização não é chamada de “beta 2”, mas sim uma revisão interna da primeira beta, com um número de compilação ligeiramente alterado: passou de 23A5260n para 23A5260u.\n\nEmbora os números de versão sejam quase idênticos, o que indica que nenhuma novidade visível ao usuário foi adicionada, a troca sugere que a Apple identificou algum problema grave nos bastidores — como um bug crítico, uma falha de segurança, ou até códigos que podem ter revelado futuros produtos da empresa.\n\nSe você tem um iPhone mais antigo e está testando o beta, não verá nenhuma atualização por enquanto.\n\nIsso reforça a ideia de que o problema corrigido pode estar relacionado a hardware mais recente ou recursos específicos desses modelos.\n\nA Apple ainda não divulgou detalhes oficiais sobre o motivo dessa revisão, mas como sempre, desenvolvedores e usuários devem continuar atentos ao comportamento do sistema.\n\nEventuais diferenças internas ou melhorias pontuais poderão ser descobertas nos próximos dias com a ajuda da comunidade beta tester.', '2025-06-14');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_usuarios`
--

CREATE TABLE `tb_usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_usuarios`
--

INSERT INTO `tb_usuarios` (`id`, `nome`, `email`, `senha`) VALUES
(4, 'Euclenio', 'euclenio@gkdkd.com', '5555555f55'),
(5, 'Euclenio Cadete', 'euclenio@gmail.com', 'asdfghjkl'),
(6, 'Euclenio Cadete', 'eucleniocadete@gmail.com', 'asdfghjkl'),
(7, 'Euclenio da Silva', 'eucleniocadete5@gmail.com', 'asdfghjkl5'),
(8, 'Euclenio Cadete', 'euclenio6@gmail.com', 'asdfghjklç'),
(9, 'Teste', 'teste@teste.com', '56asdfghjkl.'),
(10, 'Euclenio Cadete', 'e5@gkdkd.com', 'asdfghjklç'),
(11, 'Euclenio Cadete', 'e9@gkdkd.com', 'asdfghjklç'),
(12, 'Euclenio Cadete', 'e2@gkdkd.com', 'asdfghjklç'),
(13, 'Euclenio Cadete', 'e@gkjkd.com', 'asdfghjklç'),
(14, 'Maria Roque', 'mariaroque@gmail.com', 'mariaroque'),
(15, 'Euclenio Cadete', 'eucleniocadete7@gmail.com', '123456789p'),
(16, 'Euclenio Cadete 1', 'eucleniocadete1@gmail.com', 'eucleniocadete1'),
(54, 'Euclénio', 'eucleniocadete99@gmail.com', 'eucle123'),
(56, 'Euclénio', 'eucleniocadete100@gmail.com', 'eucl1233'),
(58, 'Euclénio', 'euclenio200@gmail.com', 'eucl1233'),
(59, 'Euclénio', 'euclenio290@gmail.com', 'euclenio1'),
(60, 'Euclénio', 'euclenio280@gmail.com', '12345678'),
(61, 'Euclénio', 'euclenio281@gmail.com', 'euclenio'),
(64, 'Euclénio', 'EUCLENIOCADETE00@GMAIL.COM', 'euclenio');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_categoria`
--
ALTER TABLE `tb_categoria`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_noticias`
--
ALTER TABLE `tb_noticias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tb_noticias_categoria` (`id_categoria`);

--
-- Índices para tabela `tb_usuarios`
--
ALTER TABLE `tb_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_categoria`
--
ALTER TABLE `tb_categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_noticias`
--
ALTER TABLE `tb_noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de tabela `tb_usuarios`
--
ALTER TABLE `tb_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tb_noticias`
--
ALTER TABLE `tb_noticias`
  ADD CONSTRAINT `fk_tb_noticias_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `tb_categoria` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
