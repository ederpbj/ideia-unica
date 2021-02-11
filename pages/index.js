import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


function Home() {
    return (

        <div>
            <h1>Página inicial</h1>
            <Contador />
            <h1>Teste</h1>

            <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>

            <Button color="danger">Danger!</Button>
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador} >Adicionar</button>
        </div>
    )
}

export default Home