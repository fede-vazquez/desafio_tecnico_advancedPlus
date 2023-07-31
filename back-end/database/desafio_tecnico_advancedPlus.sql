-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: desafio_tecnico_advancedplus
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP DATABASE IF EXISTS desafio_tecnico_advancedplus;
CREATE DATABASE desafio_tecnico_advancedplus;
USE desafio_tecnico_advancedplus;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2023-07-21 20:09:16','2023-07-21 20:09:16'),(2,'user','2023-07-21 20:09:16','2023-07-21 20:09:16');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `dni` int(11) NOT NULL,
  `birth_date` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `rol_id` int(11) NOT NULL DEFAULT 2,
  `avatar` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `active` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `users_FK` (`rol_id`),
  CONSTRAINT `users_FK` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0b43e64e-4445-4a69-9d1a-4c689f183856','Ana','Martínez',44444444,'2000-04-04','ana@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',2,NULL,'2023-07-31 16:08:14','2023-07-31 17:10:48',1),('17e1bca2-3ca9-4f53-a731-2aaaf91eef47','Pedro','Gómez',55555555,'2000-05-05','pedro@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',2,NULL,'2023-07-31 16:08:14','2023-07-31 17:10:48',1),('2eac51d7-ec95-498a-8f9d-34c11c9b178c','Sofía','Rodríguez',10101010,'2000-10-10','sofia@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',2,NULL,'2023-07-31 16:08:14','2023-07-31 17:10:48',1),('47dd5f63-8b62-4ad7-a60c-c0d564e3dd61','Juan','Perez',11111111,'2000-01-01','juan@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',2,NULL,'2023-07-31 16:08:14','2023-07-31 17:10:48',1),('47dd5f66-8b62-4ad7-a60c-c0d564e3dd61','Roberto','Perez',11181111,'2000-01-01','juan1@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',2,NULL,'2023-07-31 16:08:14','2023-07-31 17:10:48',1),('53a48236-49c9-4b35-a159-98b8db8c2aef','Diego','Ramírez',77777777,'2000-07-07','diego@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',2,NULL,'2023-07-31 16:08:14','2023-07-31 17:10:48',1),('850ac45b-5eaf-4da0-b25f-9416a70b6f0b','Eduardo','Gutiérrez',12121212,'2000-11-11','eduardo@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',2,NULL,'2023-07-31 16:08:14','2023-07-31 17:10:48',1),('934c9b5f-5243-4b26-a8e2-cbae80630d48','Laura','Hernández',66666666,'2000-06-06','laura@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',2,NULL,'2023-07-31 16:08:14','2023-07-31 17:10:48',1),('9a8d47be-0c5a-4a5d-8a6f-34a7c2ff0e0d','María','Lopez',22222222,'2000-02-02','maria@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',2,NULL,'2023-07-31 16:08:14','2023-07-31 17:10:48',1),('9dd68768-0c76-4d97-800f-c1ba3f8b869e','Federico','Vazquez',42574577,'2000-04-04','fedenv2000@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',1,NULL,'2023-07-31 13:08:14','2023-07-31 14:10:48',1),('a97e6f67-5991-497a-a563-17047090a7c6','Usuario','Normal',12345678,'2000-04-04','user@user.com','$2a$08$bc82ak3ig26/JgNbKvvWHOGTIiDpNRbbAZkvpy3kXQCctLeHrmHb6',2,'','2023-07-31 15:01:30','2023-07-31 15:01:51',1),('baeb7f3e-0214-42d1-bac3-8d3d5c591b46','Carolina','Sanchez',88888888,'2000-08-08','carolina@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',2,NULL,'2023-07-31 16:08:14','2023-07-31 17:10:48',1),('bc08c88e-3f39-4d3c-a928-438d82e5d5b2','Andrés','Fernández',99999999,'2000-09-09','andres@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',2,NULL,'2023-07-31 16:08:14','2023-07-31 17:10:48',1),('be49dd79-02e4-4f1a-be10-0a84e77ca9c6','Administrador','Administrador',12345678,'2000-04-04','admin@admin.com','$2a$08$WzwJSEFgUqnO9DAMLVuHjuoWGUncYt3MirDsvjzdEWM3lsI6MFrBW',1,'','2023-07-31 15:00:22','2023-07-31 15:01:51',1),('c2f149b1-743b-49eb-bc42-3b91a1bc8a95','Carlos','González',33333333,'2000-03-03','carlos@gmail.com','$2a$08$HxXB7DEZ1IZoaATXQDGz9uHa5ANMQBSJXI6pEm5pLmEFZKAlDWNN2',2,NULL,'2023-07-31 16:08:14','2023-07-31 17:10:48',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'desafio_tecnico_advancedplus'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-31 12:02:51
