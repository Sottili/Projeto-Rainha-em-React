import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import sacerdocioOrdemMelchizedek from '../../../img-cursos/sacerdocioOrdemMelchizedek.jpg';

const SacerdocioOrdemMelchizedek = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Sacerdócio á Ordem de Melchizedek</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={sacerdocioOrdemMelchizedek}
              alt="Sacerdócio á Ordem de Melchizedek Curso Rainha da Antiga Religião"
            />

            <p className="paragraph-curses">
              Mais um ciclo de quase 26 mil anos de nossa vida terrestre está chegando ao fim, de acordo com vários
              ensinamentos – chave e de acordo com o Calendário Maia.
            </p>
            <p className="paragraph-curses">
              Precisamos nos preparar! A ORDEM DE MELCHIZEDEK é composta por alguns escolhidos para preparar, conduzir e
              implementar todas as necessidades necessárias à evolução dos seres de nosso Planeta.
            </p>
            <p className="paragraph-curses">
              O SACERDÓCIO NA ORDEM DE MELCHIZEDEK é um trabalho especializado para a formação de muito poucos, para a
              liderança e condução master deste processo.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SacerdocioOrdemMelchizedek;
