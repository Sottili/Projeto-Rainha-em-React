import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import hunaReiki from '../../../img-cursos/hunaReiki.jpg';

const HunaReiki = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Huna Reiki</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img className="img-fluid img-curses" src={hunaReiki} alt="Huna Reiki Curso Rainha da Antiga Religião" />
            <p className="paragraph-curses">
              O método de cura espiritual das ilhas polinésias , conhecido como huna, significa “segredo” e existe há
              mais de 5000 anos. É um sofisticado sistema de manipulação de energia com ênfase na conectividade da
              espiritualidade cósmica do ser humano com a terra, seu corpo e suas emoções.
            </p>
            <p className="paragraph-curses">
              Integra mente, corpo e espírito em ações e materializações para a felicidade pessoal e de nossa
              “teia-de-vida”. Nos ensina a celebrar a vida no plano físico e a ver a espiritualidade em todas as coisas,
              nas materializações. Acredita que a chave para viver uma vida integral esta em despertar e integrar nosso
              eu inferior ( subconsciente ), com o médio (consciente ) e o superior ( espiritual ou superconsciente).
              Através dessa integração, huna esta centrada no amor e enxerga o ser humano, a natureza e o divino como
              partes harmoniosas de uma mesma comunidade cósmica. Huna nos fornece um conjunto de práticas shamanicas
              simples mas profundamente transformacionais, que nos abre e amplia o mundo espiritual.
            </p>
            <p className="paragraph-curses">
              Historicamente o kahuna é o mestre espiritual guardião do conhecimento huna e da tradição.
            </p>
            <p className="paragraph-curses">
              Quando os ingleses se instalaram nas ilhas havaianas a prática huna foi proibida e o kahunas tiveram que
              trabalhar na clandestinidade.
            </p>
            <p className="paragraph-curses">
              Assim, a sabedoria espiritual huna ficou oculta por muitos anos. Hoje, nessa nova idade do planeta, a
              prática huna uma vez mais emerge. Através de muitos poucos eleitos – para nos ajudar a curar a nós e ao
              todo de forma abrangente e total.
            </p>
            <p className="paragraph-curses">
              Como brilhantemente cita Max Freedom Long: Se você não está utilizando o método huna, você está
              trabalhando com um esforço muito maior do que precisaria
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HunaReiki;
