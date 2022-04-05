CREATE DATABASE  IF NOT EXISTS `classroom` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `classroom`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: classroom
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attendence`
--

DROP TABLE IF EXISTS `attendence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendence` (
  `usn` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `course_id` varchar(20) NOT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`usn`,`date`,`course_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `attendence_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
  CONSTRAINT `attendence_ibfk_2` FOREIGN KEY (`usn`) REFERENCES `student` (`usn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendence`
--

LOCK TABLES `attendence` WRITE;
/*!40000 ALTER TABLE `attendence` DISABLE KEYS */;
INSERT INTO `attendence` VALUES ('1CR19CS02','2022-02-01','18CS53',1),('1CR19CS02','2022-03-27','18CS53',0),('1CR19CS091','2022-01-15','18CS51',1),('1CR19CS091','2022-01-15','18CS52',0),('1CR19CS091','2022-01-15','18CS53',0),('1CR19CS091','2022-01-15','18CS54',1),('1CR19CS091','2022-01-15','18CS56',1),('1CR19CS091','2022-01-16','18CS51',1),('1CR19CS091','2022-01-16','18CS53',1),('1CR19CS091','2022-01-16','18CS54',1),('1CR19CS091','2022-01-16','18CS55',1),('1CR19CS091','2022-01-16','18CS56',1),('1CR19CS091','2022-01-18','18CS52',0),('1CR19CS091','2022-01-18','18CS53',1),('1CR19CS091','2022-01-27','18CS52',0),('1CR19CS091','2022-01-29','18CS52',0),('1CR19CS091','2022-01-30','18CS53',1),('1CR19CS091','2022-01-31','18CS53',0),('1CR19CS091','2022-01-31','18CS54',0),('1CR19CS091','2022-02-01','18CS53',1),('1CR19CS091','2022-03-27','18CS53',1),('1CR19CS101','2022-02-01','18CS53',0),('1CR19CS101','2022-03-27','18CS53',0),('1CR19CS109','2022-02-01','18CS53',0),('1CR19CS109','2022-03-27','18CS53',0),('1CR19CS11','2022-02-01','18CS53',1),('1CR19CS11','2022-03-27','18CS53',0),('1CR19CS116','2022-01-15','18CS51',0),('1CR19CS116','2022-01-15','18CS52',1),('1CR19CS116','2022-01-15','18CS53',0),('1CR19CS116','2022-01-15','18CS54',0),('1CR19CS116','2022-01-15','18CS56',0),('1CR19CS116','2022-01-16','18CS51',0),('1CR19CS116','2022-01-16','18CS53',0),('1CR19CS116','2022-01-16','18CS54',0),('1CR19CS116','2022-01-16','18CS55',0),('1CR19CS116','2022-01-16','18CS56',0),('1CR19CS116','2022-01-18','18CS52',0),('1CR19CS116','2022-01-18','18CS53',1),('1CR19CS116','2022-01-27','18CS52',0),('1CR19CS116','2022-01-29','18CS52',0),('1CR19CS116','2022-01-30','18CS53',0),('1CR19CS116','2022-01-31','18CS53',1),('1CR19CS116','2022-01-31','18CS54',0),('1CR19CS116','2022-02-01','18CS53',0),('1CR19CS116','2022-03-27','18CS53',1),('1CR19CS12','2022-02-01','18CS53',0),('1CR19CS12','2022-03-27','18CS53',0),('1CR19CS120','2022-01-15','18CS51',0),('1CR19CS120','2022-01-15','18CS52',0),('1CR19CS120','2022-01-15','18CS53',0),('1CR19CS120','2022-01-15','18CS54',0),('1CR19CS120','2022-01-15','18CS56',0),('1CR19CS120','2022-01-16','18CS51',0),('1CR19CS120','2022-01-16','18CS53',0),('1CR19CS120','2022-01-16','18CS54',0),('1CR19CS120','2022-01-16','18CS55',1),('1CR19CS120','2022-01-16','18CS56',0),('1CR19CS120','2022-01-18','18CS52',0),('1CR19CS120','2022-01-18','18CS53',0),('1CR19CS120','2022-01-27','18CS52',0),('1CR19CS120','2022-01-29','18CS52',0),('1CR19CS120','2022-01-30','18CS53',0),('1CR19CS120','2022-01-31','18CS53',1),('1CR19CS120','2022-01-31','18CS54',1),('1CR19CS120','2022-02-01','18CS53',0),('1CR19CS120','2022-03-27','18CS53',0),('1CR19CS121','2022-01-15','18CS51',0),('1CR19CS121','2022-01-15','18CS52',0),('1CR19CS121','2022-01-15','18CS53',0),('1CR19CS121','2022-01-15','18CS54',0),('1CR19CS121','2022-01-15','18CS56',0),('1CR19CS121','2022-01-16','18CS51',0),('1CR19CS121','2022-01-16','18CS53',0),('1CR19CS121','2022-01-16','18CS54',0),('1CR19CS121','2022-01-16','18CS55',0),('1CR19CS121','2022-01-16','18CS56',0),('1CR19CS121','2022-01-18','18CS52',0),('1CR19CS121','2022-01-18','18CS53',1),('1CR19CS121','2022-01-27','18CS52',0),('1CR19CS121','2022-01-29','18CS52',0),('1CR19CS121','2022-01-30','18CS53',1),('1CR19CS121','2022-01-31','18CS53',1),('1CR19CS121','2022-01-31','18CS54',1),('1CR19CS121','2022-02-01','18CS53',0),('1CR19CS121','2022-03-27','18CS53',0),('1CR19CS123','2022-01-15','18CS51',0),('1CR19CS123','2022-01-15','18CS52',0),('1CR19CS123','2022-01-15','18CS53',0),('1CR19CS123','2022-01-15','18CS54',0),('1CR19CS123','2022-01-15','18CS56',0),('1CR19CS123','2022-01-16','18CS51',0),('1CR19CS123','2022-01-16','18CS53',0),('1CR19CS123','2022-01-16','18CS54',0),('1CR19CS123','2022-01-16','18CS55',0),('1CR19CS123','2022-01-16','18CS56',0),('1CR19CS123','2022-01-18','18CS52',0),('1CR19CS123','2022-01-18','18CS53',0),('1CR19CS123','2022-01-27','18CS52',0),('1CR19CS123','2022-01-29','18CS52',0),('1CR19CS123','2022-01-30','18CS53',1),('1CR19CS123','2022-01-31','18CS53',1),('1CR19CS123','2022-01-31','18CS54',1),('1CR19CS123','2022-02-01','18CS53',0),('1CR19CS123','2022-03-27','18CS53',0),('1CR19CS124','2022-01-15','18CS51',0),('1CR19CS124','2022-01-15','18CS52',0),('1CR19CS124','2022-01-15','18CS53',0),('1CR19CS124','2022-01-15','18CS54',0),('1CR19CS124','2022-01-15','18CS56',0),('1CR19CS124','2022-01-16','18CS51',0),('1CR19CS124','2022-01-16','18CS53',0),('1CR19CS124','2022-01-16','18CS54',0),('1CR19CS124','2022-01-16','18CS55',0),('1CR19CS124','2022-01-16','18CS56',0),('1CR19CS124','2022-01-18','18CS52',0),('1CR19CS124','2022-01-18','18CS53',0),('1CR19CS124','2022-01-27','18CS52',0),('1CR19CS124','2022-01-29','18CS52',0),('1CR19CS124','2022-01-30','18CS53',1),('1CR19CS124','2022-01-31','18CS53',1),('1CR19CS124','2022-01-31','18CS54',1),('1CR19CS124','2022-02-01','18CS53',0),('1CR19CS124','2022-03-27','18CS53',1),('1CR19CS126','2022-01-15','18CS51',0),('1CR19CS126','2022-01-15','18CS52',0),('1CR19CS126','2022-01-15','18CS53',0),('1CR19CS126','2022-01-15','18CS54',0),('1CR19CS126','2022-01-15','18CS56',0),('1CR19CS126','2022-01-16','18CS51',0),('1CR19CS126','2022-01-16','18CS53',0),('1CR19CS126','2022-01-16','18CS54',0),('1CR19CS126','2022-01-16','18CS55',1),('1CR19CS126','2022-01-16','18CS56',0),('1CR19CS126','2022-01-18','18CS52',0),('1CR19CS126','2022-01-18','18CS53',0),('1CR19CS126','2022-01-27','18CS52',0),('1CR19CS126','2022-01-29','18CS52',0),('1CR19CS126','2022-01-30','18CS53',1),('1CR19CS126','2022-01-31','18CS53',1),('1CR19CS126','2022-01-31','18CS54',1),('1CR19CS126','2022-02-01','18CS53',0),('1CR19CS126','2022-03-27','18CS53',1),('1CR19CS130','2022-01-15','18CS51',0),('1CR19CS130','2022-01-15','18CS52',0),('1CR19CS130','2022-01-15','18CS53',0),('1CR19CS130','2022-01-15','18CS54',0),('1CR19CS130','2022-01-15','18CS56',0),('1CR19CS130','2022-01-16','18CS51',0),('1CR19CS130','2022-01-16','18CS53',0),('1CR19CS130','2022-01-16','18CS54',0),('1CR19CS130','2022-01-16','18CS55',0),('1CR19CS130','2022-01-16','18CS56',0),('1CR19CS130','2022-01-18','18CS52',0),('1CR19CS130','2022-01-18','18CS53',1),('1CR19CS130','2022-01-27','18CS52',0),('1CR19CS130','2022-01-29','18CS52',0),('1CR19CS130','2022-01-30','18CS53',1),('1CR19CS130','2022-01-31','18CS53',1),('1CR19CS130','2022-01-31','18CS54',1),('1CR19CS130','2022-02-01','18CS53',0),('1CR19CS130','2022-03-27','18CS53',1),('1CR19CS131','2022-01-15','18CS51',0),('1CR19CS131','2022-01-15','18CS52',0),('1CR19CS131','2022-01-15','18CS53',0),('1CR19CS131','2022-01-15','18CS54',0),('1CR19CS131','2022-01-15','18CS56',0),('1CR19CS131','2022-01-16','18CS51',0),('1CR19CS131','2022-01-16','18CS53',0),('1CR19CS131','2022-01-16','18CS54',0),('1CR19CS131','2022-01-16','18CS55',0),('1CR19CS131','2022-01-16','18CS56',0),('1CR19CS131','2022-01-18','18CS52',0),('1CR19CS131','2022-01-18','18CS53',0),('1CR19CS131','2022-01-27','18CS52',0),('1CR19CS131','2022-01-29','18CS52',0),('1CR19CS131','2022-01-30','18CS53',1),('1CR19CS131','2022-01-31','18CS53',1),('1CR19CS131','2022-01-31','18CS54',0),('1CR19CS131','2022-02-01','18CS53',0),('1CR19CS131','2022-03-27','18CS53',1),('1CR19CS132','2021-05-03','18CS54',0),('1CR19CS132','2022-01-15','18CS51',0),('1CR19CS132','2022-01-15','18CS52',0),('1CR19CS132','2022-01-15','18CS53',0),('1CR19CS132','2022-01-15','18CS54',0),('1CR19CS132','2022-01-15','18CS56',0),('1CR19CS132','2022-01-16','18CS51',0),('1CR19CS132','2022-01-16','18CS53',0),('1CR19CS132','2022-01-16','18CS54',0),('1CR19CS132','2022-01-16','18CS55',1),('1CR19CS132','2022-01-16','18CS56',0),('1CR19CS132','2022-01-18','18CS52',0),('1CR19CS132','2022-01-18','18CS53',0),('1CR19CS132','2022-01-27','18CS52',1),('1CR19CS132','2022-01-29','18CS52',0),('1CR19CS132','2022-01-30','18CS53',1),('1CR19CS132','2022-01-31','18CS53',1),('1CR19CS132','2022-01-31','18CS54',0),('1CR19CS132','2022-02-01','18CS53',0),('1CR19CS132','2022-03-27','18CS53',1),('1CR19CS144','2022-01-15','18CS52',0),('1CR19CS144','2022-01-28','18CS52',0),('1CR19CS144','2022-01-30','18CS53',1),('1CR19CS145','2022-01-15','18CS52',0),('1CR19CS145','2022-01-28','18CS52',0),('1CR19CS145','2022-01-30','18CS53',1),('1CR19CS148','2022-01-15','18CS52',0),('1CR19CS148','2022-01-28','18CS52',0),('1CR19CS148','2022-01-30','18CS53',0),('1CR19CS149','2022-01-15','18CS52',0),('1CR19CS149','2022-01-28','18CS52',0),('1CR19CS149','2022-01-30','18CS53',0),('1CR19CS151','2022-01-15','18CS52',0),('1CR19CS151','2022-01-28','18CS52',0),('1CR19CS151','2022-01-30','18CS53',0),('1CR19CS158','2022-01-15','18CS52',0),('1CR19CS158','2022-01-28','18CS52',0),('1CR19CS158','2022-01-30','18CS53',0),('1CR19CS160','2022-01-15','18CS52',0),('1CR19CS160','2022-01-28','18CS52',0),('1CR19CS160','2022-01-30','18CS53',1),('1CR19CS161','2022-01-15','18CS52',0),('1CR19CS161','2022-01-28','18CS52',0),('1CR19CS161','2022-01-30','18CS53',0),('1CR19CS162','2022-01-15','18CS52',0),('1CR19CS162','2022-01-28','18CS52',0),('1CR19CS162','2022-01-30','18CS53',1),('1CR19CS168','2022-01-15','18CS52',0),('1CR19CS168','2022-01-28','18CS52',0),('1CR19CS168','2022-01-30','18CS53',0),('1CR19CS18','2022-02-01','18CS53',1),('1CR19CS18','2022-03-27','18CS53',0),('1CR19CS24','2022-02-01','18CS53',1),('1CR19CS24','2022-03-27','18CS53',0),('1CR19CS38','2022-02-01','18CS53',0),('1CR19CS38','2022-03-27','18CS53',0),('1CR19CS41','2022-02-01','18CS53',0),('1CR19CS41','2022-03-27','18CS53',0),('1CR19CS99','2022-02-01','18CS53',1),('1CR19CS99','2022-03-27','18CS53',0);
/*!40000 ALTER TABLE `attendence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class` (
  `class_id` int NOT NULL,
  `sec` char(1) DEFAULT NULL,
  `sem_id` int DEFAULT NULL,
  PRIMARY KEY (`class_id`),
  KEY `sem_id` (`sem_id`),
  CONSTRAINT `class_ibfk_1` FOREIGN KEY (`sem_id`) REFERENCES `semstaff` (`sem_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (1,'A',1),(2,'B',1),(3,'C',1),(4,'A',2),(5,'B',2),(6,'C',2),(7,'A',3),(8,'B',3),(10,'A',4),(11,'B',4),(12,'C',4),(13,'B',5),(14,'C',5),(15,'B',6);
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `course_id` varchar(20) NOT NULL,
  `course_name` varchar(50) DEFAULT NULL,
  `sem` int DEFAULT NULL,
  `dept_id` int DEFAULT NULL,
  PRIMARY KEY (`course_id`),
  KEY `dept_id` (`dept_id`),
  CONSTRAINT `course_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES ('18CS51','Management, Entrepreneurship for IT industry',5,1),('18CS52','Computer Networks and Security',5,1),('18CS53','Database Management System',5,1),('18CS54','Automata Theory and Computability',5,1),('18CS55','Computer Networks and Security',5,1),('18CS56','Unix Programming',5,1);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `dept_id` int NOT NULL,
  `dept_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'Computer Science and Engineering'),(2,'Information Science and Engineering'),(3,'Electronics Communications and Engineering');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semstaff`
--

DROP TABLE IF EXISTS `semstaff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semstaff` (
  `sem_id` int NOT NULL,
  `sem` int DEFAULT NULL,
  `course_id` varchar(20) DEFAULT NULL,
  `staff_id` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`sem_id`),
  KEY `course_id` (`course_id`),
  KEY `staff_id` (`staff_id`),
  CONSTRAINT `semstaff_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
  CONSTRAINT `semstaff_ibfk_2` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`staff_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semstaff`
--

LOCK TABLES `semstaff` WRITE;
/*!40000 ALTER TABLE `semstaff` DISABLE KEYS */;
INSERT INTO `semstaff` VALUES (1,5,'18CS53','1STCS01'),(2,5,'18CS56','1STCS03'),(3,5,'18CS55','1STCS06'),(4,5,'18CS54','1STCS02'),(5,5,'18CS52','1STCS04'),(6,5,'18CS51','1STCS05');
/*!40000 ALTER TABLE `semstaff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `staff_id` varchar(30) NOT NULL,
  `staff_name` varchar(50) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `contact` int DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `dept_id` int DEFAULT NULL,
  PRIMARY KEY (`staff_id`),
  KEY `dept_id` (`dept_id`),
  CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES ('1STCS01','Kartheek G C R','M','kartheek@cmrit.ac.in',953534298,'1234',1),('1STCS02','Sagarika Behera','F','sagarika@gmail.com',4567765,'1234',1),('1STCS03','Smitha N','F','smitha@cmrit.ac.in',2345654,'1234',1),('1STCS04','Shivaraj B','M','shivaraj@cmrit.ac.in',9876677,'1234',1),('1STCS05','Shanthi M B','F','shanthi@cmrit.ac.in',98765456,'1234',1),('1STCS06','Sherly Noel','F','sherly@cmrit.ac.in',98778899,'1234',1);
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `usn` varchar(30) NOT NULL,
  `stud_name` varchar(50) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `contact` int DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `cur_sem` int DEFAULT NULL,
  `section` char(1) DEFAULT NULL,
  `dept_id` int DEFAULT NULL,
  PRIMARY KEY (`usn`),
  KEY `dept_id` (`dept_id`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('1CR19CS02','Aditee Kumari','F','2001-12-12','aditee19cs@cmrit.ac.in','Delhi',987665,'1234',5,'A',1),('1CR19CS091','Manu T','M','2001-02-21','man19cs@cmrit.ac.in','Chitradurga',91123322,'1234',5,'B',1),('1CR19CS101','Komal','F','2001-09-11','komal19cs@cmrit.ac.in','Bangalore',9987665,'1234',5,'A',1),('1CR19CS109','Jayshree','F','2001-02-01','jayashree19cs@cmrit.ac.in','Bangalore',99832111,'1234',5,'A',1),('1CR19CS11','Abhishek Kumar','M','2001-10-23','abhikumar19cs@cmrit.ac.in','Bangalore',99857665,'1234',5,'A',1),('1CR19CS116','Nara Suma','M','2001-07-11','nara19cs@cmrit.ac.in','Bangalore',9987665,'1234',5,'B',1),('1CR19CS12','Abhinav Kumar','M','2001-01-21','abhi19cs@cmrit.ac.in','Bangalore',9987665,'1234',5,'A',1),('1CR19CS120','Poojitha','F','2001-09-21','pooj19cs@cmrit.ac.in','Bangalore',99832111,'1234',5,'B',1),('1CR19CS121','Prashanth N','M','2001-09-13','prah19cs@cmrit.ac.in','Bangalore',99857665,'1234',5,'B',1),('1CR19CS123','Prathik Kumar Mishra','M','2001-03-02','prat19cs@cmrit.ac.in','Delhi',987665,'1234',5,'B',1),('1CR19CS124','Praveen Kumar E S','M','2001-01-02','prav19cs@cmrit.ac.in','Kolar',998765,'1234',5,'B',1),('1CR19CS126','Vishal kiran  R S','M','2001-03-07','visk19cs@cmrit.ac.in','Bangalore',98987665,'1234',5,'B',1),('1CR19CS130','Rakshith','M','2001-09-18','rak19cs@cmrit.ac.in','Bangalore',9980065,'1234',5,'B',1),('1CR19CS131','Rakshith K H','M','2001-12-13','rakh19cs@cmrit.ac.in','Bangalore',9007665,'1234',5,'B',1),('1CR19CS132','Rakshith R','M','2001-07-20','rakr19cs@cmrit.ac.in','Bangalore',9987665,'1234',5,'B',1),('1CR19CS144','Vignesh B','M','2001-02-01','vigesh19cs@cmrit.ac.in','Chitradurga',91123322,'1234',5,'C',1),('1CR19CS145','Tarun S N','M','2001-07-11','tarun19cs@cmrit.ac.in','Bangalore',9987665,'1234',5,'C',1),('1CR19CS148','Yash Negi','M','2000-01-02','yashnegi19cs@cmrit.ac.in','Kolar',998765,'1234',5,'C',1),('1CR19CS149','Varun K C ','M','2000-12-13','varunkc19cs@cmrit.ac.in','Bangalore',9007665,'1234',5,'C',1),('1CR19CS151','Vedant Tripathi','M','2000-12-18','trip19cs@cmrit.ac.in','Bangalore',9980065,'1234',5,'C',1),('1CR19CS158','Vivek Kumar','M','2001-09-07','viskumar19cs@cmrit.ac.in','Bangalore',98987665,'1234',5,'C',1),('1CR19CS160','Yashitha','F','2001-12-02','yashit19cs@cmrit.ac.in','Delhi',987665,'1234',5,'C',1),('1CR19CS161','Yuvraj Sooraj','M','2001-09-23','yuvr19cs@cmrit.ac.in','Bangalore',99857665,'1234',5,'C',1),('1CR19CS162','Zain Ahmed','M','2001-01-20','zain19cs@cmrit.ac.in','Bangalore',9987665,'1234',5,'C',1),('1CR19CS168','Ullas Mishra','M','2001-02-21','ullasmis19cs@cmrit.ac.in','Bangalore',99832111,'1234',5,'C',1),('1CR19CS18','Bhumika A','F','2000-11-02','bhumika19cs@cmrit.ac.in','Kolar',998765,'1234',5,'A',1),('1CR19CS24','Devika S','F','2001-02-12','devika19cs@cmrit.ac.in','Chitradurga',91123322,'1234',5,'A',1),('1CR19CS38','Deepu M','M','2001-12-07','deppu19cs@cmrit.ac.in','Bangalore',98987665,'1234',5,'A',1),('1CR19CS41','Girish G S','M','2000-12-12','girish19cs@cmrit.ac.in','Bangalore',9980065,'1234',5,'A',1),('1CR19CS99','Harsh Raj','M','2000-12-18','raj19cs@cmrit.ac.in','Bangalore',9007665,'1234',5,'A',1);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(20) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `access` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('1CR19CS02','aditee19cs@cmrit.ac.in','1234',1),('1CR19CS091','man19cs@cmrit.ac.in','1234',1),('1CR19CS101','komal19cs@cmrit.ac.in','1234',1),('1CR19CS109','jayashree19cs@cmrit.ac.in','1234',1),('1CR19CS11','abhikumar19cs@cmrit.ac.in','1234',1),('1CR19CS116','nara19cs@cmrit.ac.in','1234',1),('1CR19CS12','abhi19cs@cmrit.ac.in','1234',1),('1CR19CS120','pooj19cs@cmrit.ac.in','1234',1),('1CR19CS121','prah19cs@cmrit.ac.in','1234',1),('1CR19CS122','pratb19cs@cmrit.ac.in','1234',1),('1CR19CS123','prat19cs@cmrit.ac.in','1234',1),('1CR19CS124','prav19cs@cmrit.ac.in','1234',1),('1CR19CS126','visk19cs@cmrit.ac.in','1234',1),('1CR19CS132','rakr19cs@cmrit.ac.in','1234',1),('1CR19CS134','ranj19cs@cmrit.ac.in','1234',1),('1CR19CS144','vigesh19cs@cmrit.ac.in','1234',1),('1CR19CS145','tarun19cs@cmrit.ac.in','1234',1),('1CR19CS148','yashnegi19cs@cmrit.ac.in','1234',1),('1CR19CS149','varunkc19cs@cmrit.ac.in','1234',1),('1CR19CS151','trip19cs@cmrit.ac.in','1234',1),('1CR19CS158','viskumar19cs@cmrit.ac.in','1234',1),('1CR19CS160','yashit19cs@cmrit.ac.in','1234',1),('1CR19CS161','yuvr19cs@cmrit.ac.in','1234',1),('1CR19CS162','zain19cs@cmrit.ac.in','1234',1),('1CR19CS168','ullasmis19cs@cmrit.ac.in','1234',1),('1CR19CS18','bhumika19cs@cmrit.ac.in','1234',1),('1CR19CS24','devika19cs@cmrit.ac.in','1234',1),('1CR19CS38','deppu19cs@cmrit.ac.in','1234',1),('1CR19CS41','girish19cs@cmrit.ac.in','1234',1),('1CR19CS99','raj19cs@cmrit.ac.in','1234',1),('1STCS01','kartheek@cmrit.ac.in','1234',0),('1STCS02','sagarika@gmail.com','1234',0),('1STCS03','smitha@cmrit.ac.in','1234',0),('1STCS04','shivaraj@cmrit.ac.in','1234',0),('1STCS05','shanthi@cmrit.ac.in','1234',0),('1STCS06','sherly@cmrit.ac.in','1234',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-28 19:35:30
