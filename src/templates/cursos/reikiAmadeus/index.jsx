import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import reikiAmadeus from '../../../img-cursos/reikiAmadeus.jpg';

const ReikiAmadeus = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Reiki Xamânico - Amadeus</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={reikiAmadeus}
              alt="Reiki Xamanico Amadeus Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              O sistema Ama Deus é de extrema simplicidade, sendo sustentado por uma energia muito amorosa, de grande
              poder e de fácil utilização nas situações mais distintas da vida diária..
            </p>
            <p className="paragraph-curses">
              É composto por rituais xamânicos de cura e diversas meditações que ajudam a focalizar a intenção em
              determinado fim especifico como por exemplo:
            </p>
            <p className="paragraph-curses">
              O sistema Ama Deus é de extrema simplicidade, sendo sustentado por uma energia muito amorosa, de grande
              poder e de fácil utilização nas situações mais distintas da vida diária. É composto por rituais xamânicos
              de cura e diversas meditações que ajudam a focalizar a intenção em determinado fim especifico como por
              exemplo: A ligação à Energia Ama Deus; A cura a distância; A purificação de qualquer coisa que vá para
              dentro do corpo; Ajudar uma pessoa em sofrimento extremo ou em coma; Ajudar a tomar decisões em momentos
              de transição; Encaminhar um espírito desencarnado; Entrar em contato com o guia espiritual; Cura física e
              emocional do coração; Auxilio em situações de emergência; Tratamento de vícios; Tratamento de animais;
              Reequilíbrio dos níveis energéticos do corpo; A cura da terra; Tratamento de conflitos emocionais e
              mentais; Tratamento de doenças com causas desconhecidas; Entender o desconhecido; Harmonizar pessoas com
              estado emocional alterado; Exorcismo; Encontro com espíritos no plano astral; Trabalhar a visão
              espiritual; Ajudar recém-nascidos a se integrarem harmoniosamente com o corpo físico; Proteger-se da
              inveja e de outras energias de baixa vibração; Receber informações espirituais durante os sonhos.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReikiAmadeus;
