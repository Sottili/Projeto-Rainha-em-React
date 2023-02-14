import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import dolphinReiki from '../../../img-cursos/dolphinReiki.jpg';

const DolphinReiki = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Dolphin Reiki – Reiki dos Golfinhosl</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={dolphinReiki}
              alt="Dolphin Reiki – Reiki dos Golfinhos Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              Quem são os golfinhos, realmente? os golfinhos são curadores e guardiões dos Mestres da Luz sobre o
              Planeta Terra. São seres multi-dimensionais evoluídos que vivem no Todo. O seu papel é similar ao do Reino
              Angelical. Estão aqui para prestar atenção sobre nós, para nos ajudar e suportar e para nos guiar no
              regresso à Divindade.
            </p>
            <p className="paragraph-curses">
              Seu amor para com a humanidade é profundo. Como os anjos, a influência dos golfinhos transcende o tempo,
              espaço e a fisicalidade. Não é necessário estar na sua presença física para receber os seus presentes.
              Agora, mais do que nunca, toda a humanidade está pronta e quer receber os presentes profundos que os
              golfinhos têm que compartilhar.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DolphinReiki;
