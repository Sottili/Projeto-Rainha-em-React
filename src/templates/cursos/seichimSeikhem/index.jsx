import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import seichimSeikhem from '../../../img-cursos/seichimSeikhem.jpg';

const SeichimSeikhem = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Seichim Seikhem - All Love</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={seichimSeikhem}
              alt="Seichim Seikem - All Love Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              Mais conhecido como Reiki Egípcio, o Sekhm é uma palavra egípcia cujo significado é poder. No Egito o
              termo é utilizado para designar energia essencial disponível no universo e presente em toda vida, é a
              energia criadora.
            </p>
            <p className="paragraph-curses">Para os chineses é o Ki ou Chi, para os indianos é o Prana.</p>
            <p className="paragraph-curses">
              Seichim é a energia de luz viva, é um poderoso sistema de cura e sabedoria utilizado no Egito antigo.
            </p>
            <p className="paragraph-curses">
              O Skhm é uma forma avançada de telepatia direcionada para a cura, é um sistema que alcança as mais altas
              vibrações de nosso universo ( a partir da sexta dimensão) e possibilita a canalização destas frequências
              para a cura e harmonização do ser humano em todos os níveis.
            </p>
            <p className="paragraph-curses">
              Possibilita o contato direto com o EU SUPERIOR e curas nos níveis da alma e da mônada.
            </p>
            <p className="paragraph-curses">
              Atinge os corpos físico, emocional, mental, espiritual, búdico, átmico e monádico.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SeichimSeikhem;
