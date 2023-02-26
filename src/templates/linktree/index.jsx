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

import fadasCurso from '../../imgLinktree/iniciacaocladasfadas.jpg';
import bruxariaCurso from '../../imgLinktree/Bruxaria Ancestral.jpg';

// Images Rituais //
import arcanjoMiguel from '../../imgLinktree/ArcanjoMiguelFevereiro.jpg';
import encantosCiganos from '../../imgLinktree/encantosCiganos.jpg';
import jornadaTrivia from '../../imgLinktree/bruxariaHekatina.jpg';
import sagradaEspada from '../../imgLinktree/sagradaEspadaMiguel.jpg';
import encantosFadas from '../../imgLinktree/encantosFadas.jpg';
import encantosCelta from '../../imgLinktree/encantosCelta.jpg';

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
                <img style={{ width: '22px', verticalAlign: 'middle', marginRight: '10px' }} src={instagramIcon} />
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
                {/* Card 1 */}
                <Card className="cardCurses" style={{ width: '19rem', height: '740px' }}>
                  <Card.Img variant="top" src={fadasCurso} />
                  <Card.Body>
                    <Card.Title className="customTitle">Iniciação ao clã das Fadas</Card.Title>
                    <Card.Text className="customText">
                      A Fada é um ser mitológico, característicos dos mitos célticos, anglo-saxões, germânicos e
                      nórdicos.
                      <br /> As Fadas fazem reconhecer que todos são amor e são pureza em essência da alma.
                      <br /> Abre o coração, deixa a ilusão e renasça no clã das fadas.
                    </Card.Text>
                    <Card.Text>
                      Data: 25/02/2023
                      <br /> Das 14h às 20h
                    </Card.Text>
                    <div className="wrapContents">
                      <a
                        className="btnInfo"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://t.me/+VfLk82h9duE0ZDYx"
                      >
                        <img
                          style={{ width: '25px', verticalAlign: 'middle', marginRight: '5px' }}
                          src={telegramIcon}
                        />
                        Maiores Informações
                      </a>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="cardCurses" style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={sagradaEspada} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1.1rem' }} className="customTitle">
                      Iniciação à Sagrada espada <br />
                      de
                      <br />
                      Arcanjo Miguel
                    </Card.Title>
                    <Card.Text className="customText">
                      Nesse curso o iniciado recebe a poderosa espada de Arcanjo Miguel, o que permite o poder de cortar
                      fios energéticos.
                      <br /> É feita uma desconexão com o lado das sombras e as amarras que impedem a pessoa de fluir
                      aqui na fisicalidade.
                    </Card.Text>
                    <Card.Text>
                      Data: 04/03/2023
                      <br /> Das 14h às 20h
                    </Card.Text>
                    <div className="wrapContents">
                      <a
                        className="btnInfo"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://t.me/+a8_ONkUy8oowMDdh"
                      >
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
                <Card className="cardCurses" style={{ width: '19rem', height: '930px' }}>
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
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btnInfo"
                        href="https://t.me/+RlxR-WUFnDZiY2Ex"
                      >
                        <img
                          style={{ width: '25px', verticalAlign: 'middle', marginRight: '5px' }}
                          src={telegramIcon}
                        />
                        Maiores Informações
                      </a>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="cardCurses" style={{ width: '19rem', height: '1000px' }}>
                  <Card.Img variant="top" src={jornadaTrivia} />
                  <Card.Body>
                    <Card.Title className="customTitle">Bruxaria Hekatina</Card.Title>
                    <Card.Text className="customText"></Card.Text>
                    <Card.Text>
                      Nesse curso iremos aprender como cultuar, como nos dedicar a Deusa, como consagrar instrumentos,
                      sobre Seus reinos, suas faces – epítetos, sua horda, seus mistérios e seus domíniose, sua magia e
                      sobre a liberdade de praticar a Bruxaria Hekatina.
                      <br /> Esse curso infelizmente não é para quem não tem nenhuma noção de bruxaria, pois se
                      dedicarmos o curso para ensinar o beabá da bruxaria, não conseguiremos passar tudo o que é
                      desejado passar sobre Bruxaria Hekatina.
                    </Card.Text>
                    <Card.Text>
                      Duração: 13 meses – aulas quinzenais às segundas feiras (dia de Hekate) Todas as aulas por áudio
                      aula ou vídeo aula, e todas apostiladas e todas as aulas teremos práticas.
                    </Card.Text>
                    <div className="wrapContents">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btnInfo"
                        href="https://t.me/+MWwhWOKVeVk1MGI5"
                      >
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
                    <Card.Text style={{ marginTop: '30px', marginBottom: '0px' }}>26/02 às 12h</Card.Text>
                    <div className="wrapContents" style={{ margin: '0px' }}>
                      <a target="_blank" rel="noopener noreferrer" className="btnInfoWpp" href="https://rb.gy/0gdxwu">
                        <img style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} src={wppIcon} />
                        Maiores Informações
                      </a>
                      <a target="_blank" rel="noopener noreferrer" className="btnInfo" href="https://t.me/Strega2022">
                        <img
                          style={{ width: '22px', verticalAlign: 'middle', marginRight: '10px' }}
                          src={telegramIcon}
                        />
                        Maiores Informações
                      </a>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="cardCurses" style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={encantosCiganos} />
                  <Card.Body>
                    <Card.Title>
                      Encantos dos <br /> Ciganos
                    </Card.Title>
                    <Card.Text style={{ marginTop: '30px', marginBottom: '0px' }}>05/03 às 12h</Card.Text>
                    <div className="wrapContents">
                      <a target="_blank" rel="noopener noreferrer" className="btnInfoWpp" href="https://rb.gy/vrqhto">
                        <img style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} src={wppIcon} />
                        Maiores Informações
                      </a>
                      <a target="_blank" rel="noopener noreferrer" className="btnInfo" href="https://t.me/Strega2022">
                        <img
                          style={{ width: '22px', verticalAlign: 'middle', marginRight: '10px' }}
                          src={telegramIcon}
                        />
                        Maiores Informações
                      </a>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="cardCurses" style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={encantosFadas} />
                  <Card.Body>
                    <Card.Title>
                      Encanto das <br /> Fadas
                    </Card.Title>
                    <Card.Text style={{ marginTop: '30px', marginBottom: '0px' }}>19/03 às 12h</Card.Text>
                    <div className="wrapContents">
                      <a target="_blank" rel="noopener noreferrer" className="btnInfoWpp" href="https://rb.gy/s12bkf">
                        <img style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} src={wppIcon} />
                        Maiores Informações
                      </a>
                      <a target="_blank" rel="noopener noreferrer" className="btnInfo" href="https://t.me/Strega2022">
                        <img
                          style={{ width: '22px', verticalAlign: 'middle', marginRight: '10px' }}
                          src={telegramIcon}
                        />
                        Maiores Informações
                      </a>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="cardCurses" style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={encantosCelta} />
                  <Card.Body>
                    <Card.Title>
                      Encantos Celta <br /> Leprechauns
                    </Card.Title>
                    <Card.Text style={{ marginTop: '30px', marginBottom: '0px' }}>26/03 às 12h</Card.Text>
                    <div className="wrapContents">
                      <a target="_blank" rel="noopener noreferrer" className="btnInfoWpp" href="https://rb.gy/bysjsa">
                        <img style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} src={wppIcon} />
                        Maiores Informações
                      </a>
                      <a target="_blank" rel="noopener noreferrer" className="btnInfo" href="https://t.me/Strega2022">
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
