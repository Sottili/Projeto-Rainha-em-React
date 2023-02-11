import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import iniciacaoSagradaEspadaMiguel from '../../../img-cursos/iniciacaoSagradaEspadaMiguel.jpg';

const IniciacaoSagradaEspadaMiguel = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Iniciação à Sagrada Espada de Arcanjo Miguel</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={iniciacaoSagradaEspadaMiguel}
              alt="Iniciacao Sagrada Espada de Arcanjo Miguel Curso Rainha da Antiga Religião"
            />

            <p className="paragraph-curses">Curso de Iniciação à Sagrada Espada de Arcanjo Miguel</p>
            <p className="paragraph-curses">
              Nesse curso o iniciado recebe a poderosa espada de Arcanjo Miguel, o que permite o poder de cortar fios
              energéticos que ligam o paciente/cliente.
            </p>
            <p className="paragraph-curses">
              É feita uma desconexão com o lado das sombras e as amarras que impedem a pessoa de fluir aqui na
              fisicalidade.
              <br />O iniciado também recebe a merkabah de Arcanjo Miguel.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IniciacaoSagradaEspadaMiguel;
