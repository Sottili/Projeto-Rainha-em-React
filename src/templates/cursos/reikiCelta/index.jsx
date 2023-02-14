import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import reikiCelta from '../../../img-cursos/reikiCelta.jpg';

const ReikiCelta = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Reiki Celta</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img className="img-fluid img-curses" src={reikiCelta} alt="Reiki Celta Curso Rainha da Antiga Religião" />
            <p className="paragraph-curses">
              Reiki Celta é único estilo de Reiki que combina a energia de CURA Reiki com a antiga sabedoria dos Celtas.
            </p>
            <p className="paragraph-curses">
              Pode ser usado para CURA, MANIFESTAÇÃO e ASCENSÃO, trabalhando especialmente bem com: Plantas, Animais,
              Cristais (rede Céltica de Cristais), Energias Telúricas e Cósmicas, Manifestação e Realização de Desejos,
              Prosperidade, Abundância e Fortalecimento de Relacionamentos, Traumas Extremos, Sincronização e Conexão
              com energias Estelares e Planetárias, Proteção contra Energias Negativas, Elementais, Abertura / Limpeza e
              Tonificação dos chakras…
            </p>
            <p className="paragraph-curses">
              Dentre muitas outras aplicações. Contém uma variedade de novas técnicas baseadas no Ritual Céltico e em
              freqüências diversas de energia que permitem tratar de uma gama de assuntos cotidianos como saúde,
              prosperidade, finanças, trabalho, amor e relacionamentos.
            </p>
            <p className="paragraph-curses">
              Celtic Reiki é uma variação do Reiki Usui que usa vibrações da Terra e de Árvores específicas para criar
              um ambiente satisfatório para cura, manifestação, ascensão e conexão.
            </p>
            <p className="paragraph-curses">
              A energia Reiki se identifica a freqüência de várias árvores e plantas para trabalhar conforme a
              canalização e a sabedoria Céltica. Celtic Reiki emprega símbolos derivados do Ogham Céltico, o alfabeto
              sagrado dos Druidas criado pelos líderes espirituais Célticos que mantiveram os segredos usados para
              adivinhação e magia que só podiam ser entendidos pelos iniciados. Este Alfabeto Sagrado está profundamente
              conectado com as Árvores, com as quais os Celtas tinham uma forte afinidade e grande reverência,
              acreditando que muitas ou estavam habitadas por espíritos ou os possuíam.
            </p>
            <p className="paragraph-curses">
              É um Curso Perfeito para a Cura de Plantas e Animais com os quais possui grande afinidade, criando grande
              ressonância com o Curador. Esse Curso de Reiki Céltico o guiará pelas várias freqüências de energia,
              símbolos e técnicas que você irá usar para melhorar e enriquecer sua vida.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReikiCelta;
