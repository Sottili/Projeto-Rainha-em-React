import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import iniciacaoLordeGanesha from '../../../img-cursos/iniciacaoLordeGanesha.jpg';

const IniciacaoLordeGanesha = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Iniciação Celestial à Lorde Ganesha</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={iniciacaoLordeGanesha}
              alt="Iniciação Celestial à Lorde Ganesha Curso Rainha da Antiga Religião"
            />

            <p className="paragraph-curses">
              Este sistema de cura é um presente de Lord Ganesha, primeiramente ele remove todos os obstáculos que
              impedem o ser de fluir aqui na fisicalidade. posteriormente trabalha preenchendo com luz, proteção e
              prosperidade.
            </p>
            <p className="paragraph-curses">
              É um sistema simples, de fácil aplicação, sem muitas exigências, pois Lord Ganesha, embora seja um Deus
              cheio de iconografias, sua energia é simples e objetiva.
            </p>
            <p className="paragraph-curses">Vivencie a energia de Lord Ganesha e surpreenda-se.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IniciacaoLordeGanesha;
