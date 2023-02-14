import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import elMoryaHealing from '../../../img-cursos/elMoryaHealing.jpg';

const ElMoryaHealing = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">El Morya Healing</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={elMoryaHealing}
              alt="El Morya Healing Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              EL Morya é Chohan do Primeiro Raio, o raio azul, de poder, benevolência e fé.
            </p>
            <p className="paragraph-curses">
              Traz consigo as qualidades do Raio Azul de Liderança, Uso do Próprio Poder, da Palavra Falada e da entrega
              total à herança divina.
            </p>
            <p className="paragraph-curses">
              Ele pode ajudar todos os estudantes que desejam encarnar estas virtudes, pode trazer a Mestria sobre o
              chakra Laríngeo, assim como ajudar a que receba as bênçãos do espírito santo: a palavra de sabedoria e fé
              contida em nossa herança divina.
            </p>
            <p className="paragraph-curses">Sintonização ao Primeiro Raio:</p>
            <p className="paragraph-curses">MESTRE EL MORYA, ARCANJO MIGUEL E FÉ E ELOHINS HÉRCULES E AMAZONAS.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ElMoryaHealing;
