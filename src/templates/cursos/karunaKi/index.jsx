import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import karuna from '../../../img-cursos/karunaKi.jpg';

const KarunaKi = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Karuna Ki</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img className="img-fluid img-curses" src={karuna} alt="Karuna Ki Curso Rainha da Antiga Religião" />

            <p className="paragraph-curses">
              Em algumas ocasiões em nossas vidas sentimo-nos tendo experiências desagradáveis, e sempre há um terrível
              sentimento de impotência com relação a elas, sentimos que algo ou alguém, fora de nós, criasse essas
              experiências e dificuldades.
            </p>
            <p className="paragraph-curses">
              Porém já ouvimos falar que nós criamos nossa realidade. Criamos nossa realidade, então se quisermos nos
              libertar de experiências desagradáveis temos que equilibrar as nossas partes inconscientes a nossa SOMBRA.
            </p>
            <p className="paragraph-curses">
              Nossa realidade exterior é um reflexo de nossa realidade interior. Esse sistema foi criado por William Lee
              Rand, e através dele trabalhamos com todas as energias dos corpos auricos.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default KarunaKi;
