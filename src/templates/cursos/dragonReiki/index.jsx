import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import dragonReiki from '../../../img-cursos/dragonReiki.jpg';

const DragonReiki = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Dragon Reiki</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={dragonReiki}
              alt="Dragon Reiki Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">O Dragon Reiki é cercado de misticismo.</p>
            <p className="paragraph-curses">
              Muitos mestres tem ministrado cursos com conteúdo extenso, história, fotografias, técnicas de Uso da
              espada, explanação sobre os tipos de espadas disponíveis e outros conteúdos interessantes.
            </p>
            <p className="paragraph-curses">
              O curso tem a finalidade de ministração do ensinamento do uso da energia Reiki com o uso da Espada.
            </p>
            <p className="paragraph-curses">
              Assim como ocorre em outros tipos de sintonização existentes em que se utiliza a espada, o Dragon Reiki só
              se diferencia dos demais por causa da simbologia que o acompanha.
              <br />
              São 6 símbolos de poder para o nível de praticante e mais um para o de mestrado, totalizando 7 Símbolos.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DragonReiki;
