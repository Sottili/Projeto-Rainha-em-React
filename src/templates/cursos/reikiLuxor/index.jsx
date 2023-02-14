import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import reikiLuxor from '../../../img-cursos/reikiLuxor.jpg';

const ReikiLuxor = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Reiki de Luxor </h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={reikiLuxor}
              alt="Reiki de Luxor Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              O Reiki de Luxor está sobre a proteção e guarda de Mestre Seraphis Bey e toda a Egrégora do quarto raio
              cósmico, toda a fraternidade de Luxor e dos seres de Luz Egípcios.
            </p>
            <p className="paragraph-curses">
              Este sistema de cura, traz antigos conhecimentos egípcios passados por sacerdotes remanescentes desta
              época.
            </p>
            <p className="paragraph-curses">
              É um sistema todo canalizado.
              <br />
              Trabalha com a energia dos mestres combinada com os quatro elementos.
              <br />
              Quatro dos vinte e um símbolos do sistema são interligados com os quatro elementos.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReikiLuxor;
