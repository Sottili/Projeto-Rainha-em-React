import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import iniciacaoSeteRaiosCosmicos from '../../../img-cursos/iniciacaoSeteRaiosCosmicos.jpg';

const IniciacaoSeteRaiosCosmicos = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Iniciação Sagrada aos Sete Raios Cósmicos</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={iniciacaoSeteRaiosCosmicos}
              alt="Iniciação Sagrada aos Sete Raios Cósmicos Curso Rainha da Antiga Religião"
            />

            <p className="paragraph-curses">
              A Iniciação Sagrada aos Sete Raios Cósmicos trabalha com os Sete Mestres, Sete Arcanjos e Sete Elohins.
            </p>
            <p className="paragraph-curses">
              Também trabalha com seres da hierarquia dos iluminados, Buda, Mestre Paulo Veneziano, Melchizedck, Lord
              Maitreia
            </p>
            <p className="paragraph-curses">
              Trazendo manifestações dos raios cósmicos na fisicalidade atraves da energia de cada raio.
            </p>
            <p className="paragraph-curses">
              O curso tem técnicas de proteção, de libertação e de cura, trazidas pela Ancestralidade Branca,
              canalizadas das mais elevadas esferas de luz.
            </p>
            <p className="paragraph-curses">Tem também ativação de mercabah crística.</p>
            <p className="paragraph-curses">
              É um sistema que vem para elevar o padrão de consciência, e descomplicar a idéia de espiritualidade.
            </p>
            <p className="paragraph-curses">
              Trabalha com limpeza de karma, trazendo a compreensão que quanto mais elevado é o sistema de cura vem as
              libertações mais difíceis para serem transmutadas.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IniciacaoSeteRaiosCosmicos;
