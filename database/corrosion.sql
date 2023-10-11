-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2023 at 08:02 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `corrosion`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(10) NOT NULL,
  `code` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `tutor` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Table created for the courses to be taught';

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `code`, `name`, `tutor`) VALUES
(7, 'PSICOLOGÍA', 'Psicología positiva', 'Juan Camilo Montoya'),
(10, 'ESTRÉS', 'Estrés laboral', 'Eduardo Perez'),
(15, 'BACKEND', 'APIs RESTful con NodeJS', 'Victor Robles');

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
  `id` int(10) NOT NULL,
  `code` varchar(10) NOT NULL,
  `course` int(10) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Table created for the association of subjects and courses';

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`id`, `code`, `course`, `name`) VALUES
(7, '1P', 7, 'Optimismo racional'),
(8, '2P', 7, 'Patrones de pensamiento. Optimismo-Pesimismo.'),
(9, '3P', 7, 'Técnica ABC de Detección de Creencias.'),
(14, '1E', 10, 'Enfoques del estrés'),
(15, '2E', 10, 'Mecanismos de actuación del estrés'),
(16, '3E', 10, 'Fuentes del estrés'),
(17, '4E', 10, 'Afrontamiento: recursos y estrategias más efectivas contra el estrés'),
(18, '5E', 10, 'Herramientas para gestionar el estrés'),
(19, '6E', 10, 'Prevención y protección contra el estrés'),
(20, '1B', 15, 'Primeros pasos con NodeJS'),
(21, '2B', 15, 'Primeros pasos con MongoDB'),
(22, '3B', 15, 'API REST para un Blog (NodeJS, MongoDB, ExpressJS)'),
(23, '4B', 15, 'API RESTful para una Red Social (Node, Express, Mongo, JWT)'),
(24, '5B', 15, 'API RESTful para app de Musica tipo Spotify (Node, Mongo, Express, JWT)'),
(25, '6B', 15, 'Actualizaciones de MongoDB y Mongoose');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`),
  ADD KEY `course` (`course`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `topic`
--
ALTER TABLE `topic`
  ADD CONSTRAINT `topic_ibfk_1` FOREIGN KEY (`course`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
