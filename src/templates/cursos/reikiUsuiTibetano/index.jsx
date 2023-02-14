import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import reikiUsuiTibetano from '../../../img-cursos/reikiUsuiTibetano.jpg';

const ReikiUsuiTibetano = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Reiki Tradiciona Usui Tibetano</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={reikiUsuiTibetano}
              alt="Reiki Usui Tibetano Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              O Reiki é um sistema de harmonização totalmente natural onde há uma reposição energética cuja função é a
              recuperação da saúde, ou manter o equilíbrio da mesma.
            </p>
            <p className="paragraph-curses">REI sabedoria espiritual, ou sabedoria universal.</p>
            <p className="paragraph-curses">
              KI a força vital, o mesmo que CHI, em chinês, mana no Havaí, é a energia vivente que anima todas as coisas
              viventes.
            </p>
            <p className="paragraph-curses">
              O KI anima o corpo e também é a energia principal de nossas emoções, pensamentos e espiritualidade.
            </p>
            <p className="paragraph-curses">REIKI – Energia vital do Universo.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReikiUsuiTibetano;
