import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import reikiAvalon from '../../../img-cursos/reikiAvalon.jpg';

const ReikiAvalon = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Reiki Avalon Excalibur</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={reikiAvalon}
              alt="Reiki Avalon Excalibur Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              Também conhecido como um dos poucos estilos de Reiki sérios que envolvem espada. A Espada Sagrada
              Excalibur.
            </p>
            <p className="paragraph-curses">
              São 9 símbolos fortíssimos e a possibilidade de se consagrar uma espada mística e de poder após a
              formação. É um estilo ligado á magia prática e simbólica, ocultismo e bruxaria pratica.
            </p>
            <p className="paragraph-curses">
              Tem um trabalho profundo de amor próprio (auto-estima) relacionamentos saudáveis, energia de luz.São três
              iniciações com a Espada de Poder que te faz um guerreiro / guerreira de luz.
            </p>
            <p className="paragraph-curses">
              A Espada de Poder, a espada que alquimiza nossos corpos, que é fogo mágico e que abre as portas fechadas.
              Será estudado a espada mágica de Pappus e o trabalho sério com a Espada da libertação (Energias perversas)
              e como inverter um Chakra “desamarrar” a vida de um paciente.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReikiAvalon;
