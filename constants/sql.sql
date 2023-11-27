CREATE DATABASE IF NOT EXISTS `wallet`;

USE `wallet`;

CREATE TABLE IF NOT EXISTS `asks` (json LONGTEXT NOT NULL);

CREATE TABLE IF NOT EXISTS `bids` (json LONGTEXT NOT NULL);

CREATE TABLE IF NOT EXISTS `mugs` (json LONGTEXT NOT NULL);

CREATE TABLE IF NOT EXISTS `pays` (json LONGTEXT NOT NULL);

CREATE TABLE IF NOT EXISTS `peers` (json LONGTEXT NOT NULL);

CREATE TABLE IF NOT EXISTS `positions` (json LONGTEXT NOT NULL);

CREATE TABLE IF NOT EXISTS `till` (json LONGTEXT NOT NULL);

CREATE TABLE IF NOT EXISTS `trades` (json LONGTEXT NOT NULL);

CREATE TABLE IF NOT EXISTS `vault` (json LONGTEXT NOT NULL);

CREATE TABLE IF NOT EXISTS `vows` (json LONGTEXT NOT NULL);