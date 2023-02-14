import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import shamballaMultimensional from '../../../img-cursos/shamballaMultimensional.jpg';

const ShamballaMultimensional = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Shamballa Multidimensional</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={shamballaMultimensional}
              alt="Shamballa Multidimensional Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              Este Reiki é um sistema que foi canalizado na antiga Atlântida por um alto sacerdote do Templo de Cura,
              conhecido hoje pelo nome de Mestre Ascensionado St. Germain.
            </p>
            <p className="paragraph-curses">
              Este sacerdote se elevou aos Templos Centrais da Atlântida, e viajou às montanhas distantes criando seu
              próprio clã composto de Cidadãos Atlantes que chamou Inspirados.
            </p>
            <p className="paragraph-curses">Os Inspirados se desconectaram dos moradores do continente da Atlântida.</p>
            <p className="paragraph-curses">
              Eles queriam encontrar uma técnica e um modo para igualar o desenvolvimento espiritual de todos os
              Atlantes visando acabar com as diferenças raciais que eram avaliadas pelo nível de progresso físico e
              espiritual dos indivíduos da raça Atlante.
            </p>
            <p className="paragraph-curses">
              Muitos dos Atlantes que eram considerados espiritualmente e psiquicamente menos desenvolvidos eram usados
              como escravos pelos sacerdotes, sacerdotisas e pela família Real da Ilha da Atlântida. St. Germain nessa
              época havia canalizado vários símbolos que poderiam ser projetados diretamente no sistema de energia de um
              indivíduo, e que aumentariam sua vibração a um nível suficiente para possibilitar a transcendência do seu
              impedimento espiritual, que, então, passaria a ter uma vibração energética numa freqüência mais alta e
              seria igual a de todos os Atlantes.
            </p>
            <p className="paragraph-curses">
              Ele havia recebido vinte e dois símbolos, um número Mestre. Quando a Atlântida foi destruída St. Germain
              viajou com vários dos irmãos de sua categoria para o Tibet Antigo. Lá eles procuraram continuar esta
              prática de elevar a consciência espiritual das pessoas. Para testar essa prática deram três símbolos a um
              número de indivíduos bem próximo à população Atlante. Muitos deles usaram os símbolos e receberam a
              evolução espiritual que eles trouxeram. Porém, outros usaram este poder de forma negativa, escura e
              perniciosa. Eles perverteram e mudaram os símbolos.
            </p>
            <p className="paragraph-curses">
              St. Germain e os inspirados decidiram neste momento não passar o conjunto dos vinte e dois símbolos
              necessários ao Poder Total, evitando assim que suas mentes fossem tentadas e se corrompessem. O sistema de
              Reiki como é praticado hoje é um sistema incompleto.
            </p>
            <p className="paragraph-curses">
              É um sistema que inclui muitos símbolos, alguns foram tirados diretamente dos registros Akashicos e foram
              dados ao gênero humano através de St., Germain, mas outros que foram inventados, criaram e utilizam um
              tipo diferente de energia.
            </p>
            <p className="paragraph-curses">
              Está sendo divulgado agora, através de St. Germain, que há 352 Símbolos no Sistema de Shamballa completo
              que correspondem aos 352 Níveis / Iniciações vindos da Fonte neste Dia Cósmico. Como em Cima, em Baixo.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShamballaMultimensional;
