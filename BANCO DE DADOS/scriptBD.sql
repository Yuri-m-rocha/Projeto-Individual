show databases;

create database Naruto;

use Naruto;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar(50),
senha varchar (45)
);

select * from usuario;