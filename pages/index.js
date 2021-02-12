import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Container, Row, Col } from 'reactstrap';


function Home() {
    return (

        <div>
            <Container className="themed-container" fluid="sm">
                <Row></Row>
                <Alert color="primary">
                    This is a primary alert — check it out!
                    </Alert>
                <h1>Página inicial</h1>
                <Contador />
                <h1>Teste</h1>

                <Link href="/sobre">
                    <a>Acessar página Sobre</a>
                </Link>

                <Button color="danger">Danger!</Button>


            </Container>
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