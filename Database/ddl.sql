CREATE DATABASE agendaDB;
USE agendaDB;

CREATE TABLE tb_cadastro (
	id_usuario       int primary key auto_increment,
    nm_usuario	  	VARCHAR(20) NOT NULL
);

CREATE TABLE tb_info (
	id_afazer		int primary key auto_increment,
    ds_afazer     	VARCHAR(4000)NOT NULL
);	