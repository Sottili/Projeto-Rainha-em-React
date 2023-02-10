//////////////////////// IMPORTS //////////////////////////////////////////////

// React/ /
import React from 'react';

// Css //
import './index.css';

// Bootstrap //
import { Col, Container, Row } from 'react-bootstrap';

///////////////////// END IMPORTS /////////////////////////////////////////////

const HomeRainha = () => {
  return (
    <>
      <Container className="customContainer-home" fluid>
        <Row>
          <Col xs={12}>
            <h1 className="title-home">Rainha da Antiga religião</h1>
          </Col>
          <Col xs={12}>
            <h2 className="second-titleHome">Bem vindos</h2>
          </Col>
          <Col id="col-text-home" xs={12}>
            <Col xxl={8}>
              <div className="content-texts">
                <p className="paragraph">
                  Somos uma casa universalista. Honramos todas as Egrégoras e entendemos que cada povo possui sua linha
                  cultural. Nosso espaço além de trabalhar com a área holística, trabalha com as medicinas sagradas dos
                  indígenas: Ayahuasca, Rapé, Sananga, dentre outras.
                </p>
                <p className="paragraph" id="italic">
                  Não somos uma instituição religiosa, nossa religião é o amor.
                </p>
                <p className="paragraph">
                  Nossa casa acolhe e respeita todas as crenças e religiões, porém, não trabalhamos com religiosidade,
                  mas sim com a espiritualidade em sua verdadeira essência – o universalismo. Após anos de estudos e
                  pesquisas nos fundamentos da Grande Fraternidade Branca, atualmente vertemos nossa atenção e dedicação
                  para a filosofia da Antiga Religião.
                </p>
                <p className="paragraph">
                  O Nome <i>Rainha da Antiga Religião</i>:<br />
                  <u>Rainha,</u> busca honrar a Sagrada Ayahuasca.
                  <br />
                  <u>Antiga Religião</u>, se refere a espiritualidade pura, ancestral, antes dos dogmas. Uma época em
                  que o ser-humano honrava a os astros, as estrelas, as ervas, plantas, cristais e todos os elementos
                  que compõem nossa essência, enfim, A NATUREZA.
                </p>
                <p className="paragraph">
                  Buscamos viver em harmonia e respeito com os seres que habitam este planeta. Sejam eles do reino
                  Mineral, Vegetal, Animal ou Humano. Nossa principal atividade são as Terapias, buscando ajudar ao
                  próximo no sentido de ser tornar um ser-humano mais consciente e capaz de viver amorosa e
                  harmonicamente.
                </p>
              </div>
            </Col>
          </Col>
          <Col xs={12} className="mt-4 space-title">
            <h3>Um pouco do nosso espaço</h3>
          </Col>
          <div className="content-gallery-top">
            <div className="photo1"></div>
            <div className="photo2"></div>
            <div className="photo3"></div>
            <div className="photo4"></div>
          </div>
          <div className="content-gallery-middle">
            <div className="photo5"></div>
            <div className="photo6"></div>
            <div className="photo7"></div>
            <div className="photo8"></div>
          </div>
          <div className="content-gallery-bot">
            <div className="photo9"></div>
            <div className="photo10"></div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default HomeRainha;
