import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import rowenaHealing from '../../../img-cursos/rowenaHealing.jpg';

const RowenaHealing = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Mestra Rowena Healing</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={rowenaHealing}
              alt="Mestra Rowena Healing Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              Através da Amorosa Mestra Ascencionada Rowena e das Hostes Celestiais da Redenção foi possível desenvolver
              um sistema de tratamento baseado na misericórdia, na compreensão, para auxiliar na libertação e quebra de
              contratos, libertação de egrégoras de menor evolução e promover um equilíbrio e uma harmonização amorosa
              em nossa vida.
            </p>
            <p className="paragraph-curses">
              Utilizando a técnica diariamente conseguimos ancorar uma energia de paz, equilíbrio emocional,
              tranquilidade em nossa caminhada.
            </p>
            <p className="paragraph-curses">
              No nível I aprendemos técnicas amorosas de libertação, purificação e através de uma profunda modificação
              interna ancoramos um novo padrão de pensamento em nosso ser. Essa transmutação vai ocorrendo de uma forma
              amorosa, amparada pela energia amorosa de Mestra Rowena
            </p>
            <p className="paragraph-curses">
              No nível II aprendemos técnicas de tratamento mais profundas, técnicas destinadas aos que tem como missão
              serem terapeutas, os terapeutas de alma, neste nível aprendemos técnicas de regressão de memória.
            </p>
            <p className="paragraph-curses">
              No nível III o Mestrado é destinado aos que tem a Missão Maior de tratamento do planeta, aos que tem como
              missão levar a energia de purificação a outros orbes. Neste nível ativamos e expandimos nossa Merkabah,
              aprendemos técnicas para retirada de implantes, chips.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RowenaHealing;
