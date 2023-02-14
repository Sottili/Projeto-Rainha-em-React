import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import reikiElemental from '../../../img-cursos/reikiElemental.jpg';

const ReikiElemental = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Reiki Elemental</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={reikiElemental}
              alt="Reiki Elemental Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              Elemental Reiki é um sistema que trabalha a força dos Seres Elementais da Natureza.
            </p>
            <p className="paragraph-curses">
              Promove uma aproximação do utilizador com os elementais. São usados 8 símbolos dentro os quais quatro são
              para invocar a energia dos elementos naturais e os outros para trabalharem a energia do espírito.
            </p>
            <p className="paragraph-curses">
              Excelente sistema para lidar com a natureza e com a magia natural. O que é Elemental? O nome Elemental
              significa “Espírito Divino”.
            </p>
            <p className="paragraph-curses">
              El=senhor; mental=vibração mental superior. Estes são os espíritos da natureza.
            </p>
            <p className="paragraph-curses">
              Deus, por interferência amorosa de Seres de Luz, concedeu a três Reinos, paralelamente, a oportunidade de
              evolução.
            </p>
            <p className="paragraph-curses">
              Estes três Reinos são: Elemental, Angelical e Humano. A história nos conta sobre os seres elementais,
              desde a mais remota antiguidade. E, os antepassados de toda a humanidade legaram inúmeros relatos a
              respeito dos mesmos. ,entrega ao aluno uma visão ampla, inteligível, desse mundo paralelo ao nosso, mágico
              e poderoso, luminoso e cheio de vida, conhecido cientificamente como Outras Dimensões, que sempre foi
              visitado pelas mentes inspiradas dos grandes Buscadores dos Mistérios.{' '}
            </p>
            <p className="paragraph-curses">
              As práticas, os mantras, os nomes sagrados, as conjurações, inseridos aqui podem ser praticados pelo aluno
              para que perceba a realidade maravilhosa dos Elementais que povoam abundantemente a natureza.
            </p>
            <p className="paragraph-curses">
              Isso serve para nos conscientizarmos mais profundamente ainda sobre a manifestação maravilhosa de Deus em
              Sua Criação.
            </p>
            <p className="paragraph-curses">Onde houver vida e harmonia, ali ele estará.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReikiElemental;
