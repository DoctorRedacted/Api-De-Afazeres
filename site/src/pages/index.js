import { useEffect, useState } from "react"
import { consultar, deletando, postagem } from '../api/userApi.js'
import './index.scss'

export default function Index() {
    const [afazer, setAfazer] = useState(''); 
    const [lista, setLista] = useState('');


    async function enviarClick() {
        const r = await postagem(afazer);
        consultarApi();
        setAfazer('');
    }

    async function consultarApi() {
        const r = await consultar();
        setLista(r);
    }

    async function deletarApi(id) {
        const r = await deletando(id);
        consultarApi();
    }

    function handleEnterPress(e) {
        if (e.keyCode === 13) enviarClick();
    }
    
    useEffect(() => {
        consultarApi();
    });

    return (
        <main className="main-container">
                <h1>API DE AFAZERES DAORA</h1>
                <input style={{textAlign: "center"}} placeholder="INSIRA AQUI" value={afazer} onChange={e => setAfazer(e.target.value)} onKeyDown={handleEnterPress}></input>
                <button className="btn" onClick={enviarClick}>ENVIAR</button>
                {lista.map(item => 
                    <ul style={{listStyle: "none", marginRight: "2em"}}>
                        <li style={{cursor: "pointer"}} onClick={() => deletarApi(item.id)}>{item.afazer}</li>
                    </ul>
                )}
        </main>
    )
};