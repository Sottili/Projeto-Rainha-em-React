import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import iniciacaoMahaLakshmi from '../../../img-cursos/iniciacaoMahaLakshmi.jpg';

const IniciacaoMahaLakshmi = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Iniciação à Maha Lakshmi</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={iniciacaoMahaLakshmi}
              alt="Iniciação à Maha Lakshmi Curso Rainha da Antiga Religião"
            />

            <p className="paragraph-curses">
              Este sistema de cura foi um presente da bondosa deusa Lakshmi, a deusa da fertilidade, prosperidade,
              fartura e abundância divina e seu complemento Divino Vishnu, o deus da sustentação.
            </p>
            <p className="paragraph-curses">
              Ele promove uma reestruturação do sistema de Chakras e dos 4 corpos inferiores e do DNA, dentro da
              consciência divina da boa fortuna.
            </p>
            <p className="paragraph-curses">
              O iniciado se conectará com a fonte do universo, que derramará a energia da Prosperidade e Abundância
              através de si.
            </p>
            <p className="paragraph-curses">
              Terá uma elevação de consciência na real energia da prosperidade e abundância divina através da energia
              Reiki.
            </p>
            <p className="paragraph-curses">
              A iniciação do Reiki da boa fortuna é feita nas bênçãos da deusa Lakshmi, e dos seres de luz do quinto
              raio cósmico.
            </p>
            <p className="paragraph-curses">
              Entoação de mantras e decretos para a prosperidade e outras necessidades.
            </p>
            <p className="paragraph-curses">
              Dicas de Feng Shui, cristais, cerimoniais e comportamento e conexão com o divino na essência da
              prosperidade e da boa fortuna.
            </p>
            <p className="paragraph-curses">
              De acordo com a grande fraternidade branca, lakshmi atua no quinto raio cósmico divino, o raio da cura, da
              verdade e da prosperidade.
            </p>
            <p className="paragraph-curses">
              Um dos principais requisitos para agradar Lakshmi é a doação, a ajuda ao próximo, o compartilhamento.
            </p>
            <p className="paragraph-curses">
              Quanto mais o indivíduo doa mais recebe, porém esta doação deve ser de boa vontade, de coração.
            </p>
            <p className="paragraph-curses">Pessoas avarentas e egoístas não conseguem a aproximação de Lakshmi.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IniciacaoMahaLakshmi;
