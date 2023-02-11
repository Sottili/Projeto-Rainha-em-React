import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import iniciacaoOrdemMelchizedek from '../../../img-cursos/iniciacaoOrdemMelchizedek.jpg';

const IniciacaoOrdemMelchizedek = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Iniciação à Ordem de Melchizedek</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={iniciacaoOrdemMelchizedek}
              alt="Iniciação à Ordem de Melchizedek Curso Rainha da Antiga Religião"
            />

            <p className="paragraph-curses">
              Ordem de Melchizedek está encarregada da reprogramação consciencial que é indispensável para ligar a
              criação física com a exteriorização da hierarquia divina.
            </p>
            <p className="paragraph-curses">
              Melchizedek, nosso logos universal, é o Ser que atingiu a maior grau de consciência e evolução neste
              universo.Foi o Rei de Salem, Sacerdote do Altíssimo, contemporâneo de Abraão, Rei da Justiça e da Paz (São
              Paulo, Epístola aos Hebreus, VII, 1-2).
            </p>
            <p className="paragraph-curses">
              É uma das Entidades mais sublimes e elevadas da Hierarquia dos Planos Superiores.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IniciacaoOrdemMelchizedek;
