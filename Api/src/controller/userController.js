import { Router } from "express";
import { afazeres, logar, cadastrarAfazer, deletaraAfazer } from "../repository/userLog.js";

const server = Router();


server.post('/afazeres/login', async (req, res) => {
    try {
        const { nome, id } = req.body;
        const r = await logar(nome, id);
        res.send(r);
    } catch (err) {
        res.send("deu erro " + err.message);
    }
});

server.get('/afazeres', async (req, res) => {
    try {
        const r = await afazeres();
        res.send(r);
    } catch (err) {
        res.send("deu erro " + err.message);
    }
});

server.post('/afazeres', async (req, res) => {
    try {
        const { afazer } = req.body;
        const r = await cadastrarAfazer(afazer);
        res.send(r);
    } catch (err) {
        res.send("deu erro " + err.message);
    }
});

server.delete('/afazeres/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const r = await deletaraAfazer(id);
        res.send(r);
    } catch (err) {
        res.send("deu erro " + err.message);
    }
});

export default server;