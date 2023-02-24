// React //
import React from 'react';

// Css //
import './index.css';

// Components Bootstrap //
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

// React Router Dom //
import { Link } from 'react-router-dom';

// Images //

import logo from '../../img/logoClara.png';
import wppIcon from '../../imgLinktree/whatsappIcon.png';
import telegramIcon from '../../imgLinktree/telegram-logo.png';
import instagramIcon from '../../imgLinktree/instagramIcon.png';

//Images Curses //

import esteiraCurso from '../../imgLinktree/Esteira de Ervas e Cristais b.jpg';
import bruxariaCurso from '../../imgLinktree/Bruxaria Ancestral.jpg';

// Images Rituais //
import arcanjoMiguel from '../../imgLinktree/ArcanjoMiguelFevereiro.jpg';

const Linktree = () => {
  return (
    <>
      <div className="containerLinktree">
        <Row>
          <Col className="col1Linktree" xs={12}>
            <h1 className="titleLinktree">
              Rainha da
              <br /> Antiga Religião
            </h1>
            <img src={logo} style={{ width: '270px', margin: '20px 0' }} alt="Logo rainha" />
            <div className="btn-wrap">
              <Link className="btnLinktree" to="/">
                <img style={{ width: '35px', verticalAlign: 'middle', marginRight: '5px' }} src={logo} />
                Website
              </Link>
              <a className="btnLinktree" href="https://www.instagram.com/rainhadaantigareligiao/">
                <img style={{ width: '25px', verticalAlign: 'middle', marginRight: '5px' }} src={instagramIcon} />
                Instagram
              </a>
            </div>
            <h2 className="subTitleLinktree">
              Para agendamento de
              <br /> cerimônias com Ayahuasca
            </h2>
            <button className="btnGloria">
              <img style={{ width: '35px', verticalAlign: 'middle' }} src={wppIcon} />
              <a href="https://wa.me/5511977155459">Gloria Strega</a>
            </button>
          </Col>
          <div className="allContent">
            <Col className="col2Linktree" style={{ maxWidth: '80%' }}>
              <h3 className="titleAll">Cursos Presenciais</h3>
              <div className="colTest">
                <Card className="cardCurses" style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={esteiraCurso} />
                  <Card.Body>
                    <Card.Title className="customTitle">Curso de Esteira de Ervas e Cristais</Card.Title>
                    <Card.Text className="customText">
                      Nesse curso abordamos conhecimentos gerais, energéticos e terapêuticos das plantas e dos cristais,
                      capacitando benzedeiros e terapeutas, conhecendo seus devidos cuidados na colheita e preparos, sem
                      cunho religioso, porém abordando uma série de conhecimentos espirituais.
                    </Card.Text>
                    <Card.Text>
                      Data: 25/02/2023
                      <br /> Das 14h às 20h
                    </Card.Text>
                    <div className="wrapContents">
                      <a className="btnInfo" href="https://t.me/+eTgvh-zZ56g4ZDcx">
                        <img
                          style={{ width: '25px', verticalAlign: 'middle', marginRight: '5px' }}
                          src={telegramIcon}
                        />
                        Maiores Informações
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col className="col2Linktree">
              <h3 className="titleAll">Cursos Online</h3>
              <div className="colTest">
                <Card className="cardCurses" style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={bruxariaCurso} />
                  <Card.Body>
                    <Card.Title className="customTitle">Bruxaria Ancestral</Card.Title>
                    <Card.Text className="customText">
                      Nesse curso teórico e prático, vamos resgatar o conhecimento dos nossos ancestrais, como eles
                      enxergavam o mundo. Dessa maneira reconectando-se com a natureza, sua magia, nossa linhagem
                      ancestral e com os ancestrais da antiga religião, vamos compreendendo como acessar as energias, se
                      preparar para manipular magias através de rituais, invocações instrumentos de poder e
                      consagrações.
                    </Card.Text>
                    <Card.Text>
                      Duração de 9 meses com
                      <br /> aulas semanais
                    </Card.Text>
                    <Card.Text>
                      Data inicial: 21/02/2023
                      <br /> Às 20h
                    </Card.Text>
                    <div className="wrapContents">
                      <a className="btnInfo" href="https://t.me/+RlxR-WUFnDZiY2Ex">
                        <img
                          style={{ width: '25px', verticalAlign: 'middle', marginRight: '5px' }}
                          src={telegramIcon}
                        />
                        Maiores Informações
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col className="col2Linktree">
              <h3 className="titleAll">Rituais do Mês</h3>
              <div className="colTest">
                <Card className="cardCurses" style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={arcanjoMiguel} />
                  <Card.Body>
                    <Card.Title>O Poder da Ordem Divina Arcanjo Miguel</Card.Title>
                    <Card.Text>26/02 às 12h</Card.Text>
                    <div className="wrapContents">
                      <a className="btnInfoWpp" href="https://rb.gy/0gdxwu">
                        <img style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} src={wppIcon} />
                        Maiores Informações
                      </a>
                      <a className="btnInfo" href="https://t.me/Strega2022">
                        <img
                          style={{ width: '22px', verticalAlign: 'middle', marginRight: '10px' }}
                          src={telegramIcon}
                        />
                        Maiores Informações
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Linktree;
