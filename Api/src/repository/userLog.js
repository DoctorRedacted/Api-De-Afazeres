import { con } from './connection.js'

export async function logar(id, nome) {
    const comando = `SELECT     id_usuario id,
                                nm_usuario nome
                        FROM    tb_cadastro
                       WHERE    id_usuario = ?
                         AND    nm_usuario = ?`;

  const r = await con.query(comando, [id, nome]);
  return r.data;
}

export async function afazeres() {
  const comando = `SELECT   id_afazer id,
                            ds_afazer afazer
                     FROM   tb_info`;
  const [r] = await con.query(comando);
  return r;
}

export async function cadastrarAfazer(afazer) {
  const comando = `INSERT INTO tb_info (ds_afazer)
                   VALUES (?)`;
  const r = await con.query(comando, [afazer]);
  return r.data;
}

export async function deletaraAfazer(id) {
  const comando = `DELETE FROM tb_info 
                    WHERE id_afazer = ?`;

  const r = await con.query(comando, [id]);
  return r.data;
}