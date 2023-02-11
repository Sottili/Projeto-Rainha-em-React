import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import cristaisEtericos from '../../../img-cursos/cristaisEtericos.jpg';

const CristaisEtericos = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Cristais Etéricos Quânticos</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={cristaisEtericos}
              alt="Cristais Etéricos Quânticos Curso Rainha da Antiga Religião"
            />

            <p className="paragraph-curses">
              São cristais não físicos muito poderosos, chegam a ser 400% mais fortes do que os Cristais Físicos.
              Exemplo disto são os testes com radiestesia realizados, uma esmeralda terra tem em média 7000 angstroms,
              um ser humano saudável vibra em torno de 6400 angstroms, um reikiano na aplicação 140.000 angstroms, um
              cristal etérico de esmeralda 375.000 angstroms.
            </p>
            <p className="paragraph-curses">
              Enquanto com os cristais físicos é necessário de 12h à 24h para se fazer um elixir, com os cristais
              etéricos, pode-se fazer o mesmo elixir em segundos
            </p>
            <p className="paragraph-curses">
              A forma de ter acesso a essa energia é através de iniciação , assim como no Reiki, é possível a utilização
              desse método com o Reiki e outros sistemas de cura.
            </p>
            <p className="paragraph-curses">
              O Cristais são divididos em 9 níveis, sendo que a primeira iniciação se dá em três etapas do nível 1-3,
              nível 4-6 e nível 7-9, em cada um desses níveis a pessoa é iniciada em um conjunto de Cristais, podendo a
              partir do momento da iniciação utilizar essa maravilhosa energia, para ajudar a si e a outras.
            </p>
            <p className="paragraph-curses">
              Curso muito bom para terapeutas e pessoas que trabalham com cura, tratamentos e que querem ter uma
              ferramenta poderosa em suas as mãos para o trabalho que já realizam.
            </p>
            <p className="paragraph-curses">
              Neste curso a pessoa é sintonizada com a energia de determinados cristais, podendo depois trabalhar com
              cristais que não são físicos – os Cristais Etéricos, que são simplesmente a manifestação da energia pura
              do cristal.
            </p>
            <p className="paragraph-curses">
              Serão também ensinadas as técnicas de trabalho com cristais físicos, deixando a pessoa habilitada a
              trabalhar com qualquer tipo de cristais. Ainda são abordados os Chakras pessoais e transpessoais, os
              cristais mestres, como fazer limpezas energéticas, elixires de cristais (físicos e etéricos), entre outros
              temas.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CristaisEtericos;
