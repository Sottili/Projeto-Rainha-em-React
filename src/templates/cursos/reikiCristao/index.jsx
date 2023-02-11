import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import reikiCristao from '../../../img-cursos/reikiCristao.jpg';

const ReikiCristao = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Reiki Cristão – IAD AOUR RIPUI</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={reikiCristao}
              alt="Reiki Cristao Curso Rainha da Antiga Religião"
            />

            <p className="paragraph-curses">
              Técnica de Imposição de Mãos dos Essênios, apelidado de Reiki Cristão ou Imposição de Mãos Cristã; baseada
              na arte de cura e imposição de mãos dos essênios, da época de Jesus.
            </p>
            <p className="paragraph-curses">
              “Vá, e diga que tua Fé te curou!”, Jesus foi o terapeuta do corpo e do espírito..
            </p>
            <p className="paragraph-curses">
              Neste curso apresentamos as técnicas de imposição de mãos, talismãs do Abade Julio Houssaye, que são
              símbolos sagrados, mantras cristãos e seus poderes, benção da água, energização dos alimentos, práticas e
              orações corporais.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReikiCristao;
