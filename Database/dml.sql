USE agendaDB;

INSERT INTO tb_cadastro (id_usuario, nm_usuario)
     VALUES  (1, "Nicholas");
     
SELECT id_usuario id,
       nm_usuario nome
  FROM tb_cadastro
 WHERE id_usuario = 1
   AND nm_usuario = "Nicholas";
     
SELECT id_afazer id,
       ds_afazer afazer
  FROM tb_info;

INSERT INTO tb_info (ds_afazer)
	 VALUES ("ESCOVAR OS DENTES");

DELETE FROM tb_info 
	  WHERE id_afazer = 1;