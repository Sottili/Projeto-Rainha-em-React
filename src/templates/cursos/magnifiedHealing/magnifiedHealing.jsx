import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import magnified from '../../../img-cursos/magnifiedHealing.jpg';

const MagnifiedHealing = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Magnified Healing</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={magnified}
              alt="Magnified Healing Curso Rainha da Antiga Religião"
            />

            <p className="paragraph-curses">
              Cura Magnificada é uma ferramenta de libertação. Por incentivo e inspiração da Mestra Kwan Yin, Deusa da
              Misericórdia e Compaixão, essa cura que era praticada nas mais altas dimensões do universo por Mestres
              Ascensionados, foi trazida e expandida através de Gisele King e Kathrny Anderson nos Estados Unidos.
            </p>
            <p className="paragraph-curses">
              A Cura Magnificada limpa, equilibra, harmoniza todos os chakras, redistribui o cálcio na espinha e ativa o
              sistema nervoso.
            </p>
            <p className="paragraph-curses">
              Nos permite utilizar energias da quinta dimensão que atua segundo a Lei de Misericórdia, para curarmos a
              nós mesmos, aos outros, curarmos à distância e curarmos o planeta. Na prática diária, limpamos nosso Canal
              de Luz, estabelecendo um fluxo com o Altíssimo Deus do Universo, através de nossos chakras que são
              purificados, energizados, conectados.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MagnifiedHealing;
