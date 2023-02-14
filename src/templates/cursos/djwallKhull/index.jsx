import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import djwallKhull from '../../../img-cursos/djwallKhull.jpg';

const DjwallKhull = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Djwall Khull Cosmo Ascencional</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={djwallKhull}
              alt="Djwall Khull Cosmo Ascencional Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              A Energia do Reiki Cosmo-Ascensional é a linhagem de Reiki que permite o acesso a Cura do Coração, a
              Canalização e Ascensão.
            </p>
            <p className="paragraph-curses">
              As informações contidas nesse CURSO são indicadas a todos os Mestres que servem como canal, elevando seu
              nível vibracional e da Mãe Terra de forma a reduzir o sofrimento e curar a humanidade.
            </p>
            <p className="paragraph-curses">
              Ele pode ajudar todos os estudantes que desejam encarnar estas virtudes, pode trazer a Mestria sobre o
              chakra Laríngeo, assim como ajudar a que receba as bênçãos do espírito santo: a palavra de sabedoria e fé
              contida em nossa herança divina.
            </p>
            <p className="paragraph-curses">
              Os ensinamentos e os símbolos foram recebidos pela Sensitiva e Mestre de Reiki Michele Blanc, através da
              canalização do Mestre Ascensionado DJWAL KHUL ( O TIBETANO ).
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DjwallKhull;
