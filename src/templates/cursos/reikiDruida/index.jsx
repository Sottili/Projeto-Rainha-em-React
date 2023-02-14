import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import reikiDruida from '../../../img-cursos/reikiDruida.jpg';

const ReikiDruida = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Reiki Druida</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={reikiDruida}
              alt="Reiki Druida Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              O Reiki Celta e o Reiki Druidico são dois estilos de Reiki que combinam a energia de cura Reiki com a
              antiga sabedoria dos Celtas e de seus sacerdotes os Druidas.
            </p>
            <p className="paragraph-curses">
              Pode ser usado para cura, magia e ocultismo trabalhando com plantas, animais, cristais, energias teluricas
              e cósmicas e realização de desejos, prosperidade, equilíbrio de relacionamentos, eliminação de traumas,
              proteção contra miasmas negativos, tonificação dos chakras, etc.
            </p>
            <p className="paragraph-curses">
              Esses estilos usam vibrações da terra de árvores e de energias naturais específicas para criar um ambiente
              satisfatório para cura, paz, equilíbrio e saúde.
            </p>
            <p className="paragraph-curses">
              Esses estilos empregam símbolos do Ogham Céltico, o alfabeto sagrado Celta e dos Druidas criado pelos
              mestres místicos Celtas que mantiveram os segredos da magia que só podiam ser ensinados para os iniciados.
              Este Alfabeto Sagrado esta profundamente conectado com as Árvores, com as quais os Celtas tinham uma forte
              afinidade e grande reverência, acreditando que muitas estavam habitadas por espíritos.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReikiDruida;
