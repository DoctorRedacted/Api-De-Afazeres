import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function consultar() {
    const r = await api.get('/afazeres');
    return r.data;
}

export async function postagem(afazer) {
    const r = await api.post('/afazeres', {
        afazer: afazer
    });
    return r.data;
}

export async function deletando(id) {
    const r = await api.delete(`/afazeres/${id}`);
    return r.data;
}