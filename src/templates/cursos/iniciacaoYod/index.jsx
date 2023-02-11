import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import iniciacaoYod from '../../../img-cursos/iniciacaoYod.jpg';

const IniciacaoYod = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Iniciacao Yod</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={iniciacaoYod}
              alt="Iniciacao Yod Curso Rainha da Antiga Religião"
            />

            <p className="paragraph-curses">
              A Iniciação Sagrada Yod cria abertura do Chakra Cardíaco para a expansão do Amor Universal, Compaixão e
              Auto perdão.
            </p>
            <p className="paragraph-curses">
              Ajuda a tecer a Ponte de Arco-íris (Anthakarana) entre a Alma e a Mônada, através do restabelecimento da
              conexão entre os Chakras Cardíaco, Ajna (3a Visão), Estrela da Alma e Alma. Promover um contato direto com
              a Linhagem Reiki Egípcia e Atlante, resgatando parte da Energia que ficou esquecida.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IniciacaoYod;
