import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import reikiTibetano from '../../../img-cursos/reikiTibetano.jpg';

const ReikiTibetano = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Reiki Tibetano</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={reikiTibetano}
              alt="Reiki Tibetano Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              Reiki Tibetano é uma técnica de Cura e Ascensão existente no Antigo Tibet. Hoje temos muita informação que
              recebemos de antigas tradições e filosofias. Reiki Tibetano é um sistema completo de canalização de
              energia que nos completa possibilitando Cura, Desenvolvimento, Equilíbrio e Ascensão.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReikiTibetano;
