//////////////////////// IMPORTS //////////////////////////////////////////////

// React/ /
import React from 'react';

// Css //
import './index.css';

// Bootstrap //
import { Col, Container, Row } from 'react-bootstrap';

// Images //
import gloriaFrighetto from '../../img/foto_gloria.jpg';
import fotoCasa from '../../img/casa_arco_iris.png';

///////////////////// END IMPORTS /////////////////////////////////////////////

const AboutUs = () => {
  return (
    <>
      <Container className="container-aboutUs" fluid>
        <Row>
          <Col xs={12}>
            <h1 className="title-aboutUs">Quem somos?</h1>
          </Col>
          <Col id="col-text-home" xs={12}>
            <Col xxl={3}>
              <img className="img-fluid" width={320} src={gloriaFrighetto} alt="Gloria Frighetto Dirigente" />
            </Col>
            <Col className="mt-4" style={{ textAlign: 'center' }} xxl={4}>
              <h3>Gloria Frighetto</h3>
              <p className="paragraph-aboutUs">
                Gloria Frighetto, terapeuta desde 2010, fundou o Céu Rainha da Nova Era em outubro de 2015 com o
                objetivo de levar uma nova consciência de vida para pessoas desde planeta. Buscando reconexão com a
                natureza, harmonia, amor e respeito a todos os seres. Desenvolveu uma conexão com a ancestralidade ao
                longo da sua trajetória e em 2021 mudou o nome da casa para Rainha da Antiga Religião em honra aos
                ancestrais da Antiga Religião para resgatar os estudos e práticas dos ancestrais de linhagens xamânicas
                de muitos povos, inclusive do nosso chão Brasil.
              </p>
            </Col>
            <Col className="mt-4" style={{ textAlign: 'center' }} xxl={4}>
              <h3>Oque fazemos?</h3>
              <p className="paragraph-aboutUs">
                Nossa principal atividade são os trabalhos na linhagem do Neo Xamanismo Universal, com a utilização das
                Medicinas da Floresta como Ayahuasca, Rapé, Sananga, Tabaco,Kambô, Tenda do suor, dentre outras.
                Trabalhamos também com Terapias Alternativas como Alinhamento Energético, Reiki, Cristalterapia,
                Regressão de Memória e TVP, Leitura de Tarot, Terapia Floral, Fitoterapia, Reflexologia,
                Auriculoterapia, e muitas ouras técnicas.
              </p>
            </Col>
          </Col>
          <Row className="row-aboutUs">
            <Col className="title-localization" xs={12} xl={12} xxl={12}>
              <h2>Onde estamos localizados?</h2>
            </Col>
            <Col xs={12} xl={3} xxl={3}>
              <img width={320} className="img-fluid" src={fotoCasa} alt="Foto da Rainha da Antiga religião" />
            </Col>
            <Col xs={12} style={{ textAlign: 'center', marginBottom: '30px' }} xl={3} xxl={3}>
              <p className="paragraph-aboutUs">
                Estamos Localizados próximos as estações de Metrô Tatuapé, Belém e Vila Prudente. Da estação até nossa
                casa leva em torno de 20 minutos de ônibus. Uber (Tatuapé ou Belém) custa aproximadamente R$ 20,00. Uber
                (Estação Oratório-Linha Verde) custa R$ 10,00.
              </p>
              <p className="paragraph-aboutUs">
                Rua São Sabino, 323 – Chácara Belenzinho – São Paulo Ponto de Referência: Caixa Econômica Federal da Rua
                Sapopemba, altura do número 4000
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
