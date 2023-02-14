import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import raSheeba from '../../../img-cursos/raSheeba.jpg';

const RaSheeba = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Ra-Sheeba Reiki</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img className="img-fluid img-curses" src={raSheeba} alt="Ra Sheeba Curso Rainha da Antiga Religião" />
            <p className="paragraph-curses">
              Rasheeba é um sistema poderoso de trabalho com Energia, canalizado por Merilyn Bretherick e Peter Johansen
              em Victoria, Austrália. Os Canalizadores definem o Sistema, “Como uma vibração energética altíssima que
              alcançamos quando acessamos e a filtramos direto de seu vórtice através de nós”. “A última vez que este
              nível foi acessado foi no Egito Antigo quando os Guardiões” finalmente alcançaram este nível. “Os
              Guardiões” receberam a energia, embora o único autorizado a iniciar fosse o Faraó. Após sua morte tudo se
              perdeu. Agora, as Deidades e os Mestres estão prontos para ativar esta energia uma vez mais em nosso
              Planeta, ajudando os Seres Humanos e o Planeta em sua Rota de Ascensão.
            </p>
            <p className="paragraph-curses">
              Quando acessamos esse nível de freqüência de energia, a ENERGIA passa a fluir por nosso corpo como nunca
              fluiu. Essa é a segunda vez no Planeta que a energia “RA” esta sendo combinada com a energia “SHEEBA”. A
              energia sexual “SHEEBA” é criativa, jovial e uma expressão de AMOR. É a parte “feminina” da coluna de
              Energia Universal de CURA que conduz diretamente à Fonte. A “RA” – A Fonte, no Centro do Grande Sol
              Central. “Sheeba” mostra o caminho para “Ra”. Somente através de “Sheeba” podemos acessar “Ra” e encontrar
              nosso verdadeiro Lar.
            </p>
            <p className="paragraph-curses">
              Rasheeba trabalha diretamente nos chakras mudando nosso DNA e partes eletromagnéticas. Isto nos ensina e
              conecta com o Amor. O Amor é o que nos ajuda a progredir por todos os níveis ascensionais.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RaSheeba;
