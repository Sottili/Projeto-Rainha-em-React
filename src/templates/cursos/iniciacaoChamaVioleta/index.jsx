import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import iniciacaoChamaVioleta from '../../../img-cursos/iniciacaoChamaVioleta.jpg';

const IniciacaoChamaVioleta = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Iniciação à Sagrada Chama Violeta</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={iniciacaoChamaVioleta}
              alt="Iniciação à Sagrada Chama Violeta Curso Rainha da Antiga Religião"
            />

            <p className="paragraph-curses">
              Esta iniciação propicia uma limpeza karmica profunda, assim como a limpeza e transmutação de registros
              negativos e aspectos nocivos do ego.
            </p>
            <p className="paragraph-curses">
              Ela liberta a pessoa de energias intrusas e externas, e ativa a capacidade de auto proteção desse tipo de
              energias.
            </p>
            <p className="paragraph-curses">
              A energia ancorada nesta iniciação possibilita que a pessoa realize trabalhos em seu próprio ser a também
              trabalhos a nível planetárioa fim de ser um agente transformador no planeta.
            </p>
            <p className="paragraph-curses">
              Uma sintonização ao Sétimo Raio, Mestre Ascensionado Saint Germain, Arcanjo Ezequiel e Ametista.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IniciacaoChamaVioleta;
