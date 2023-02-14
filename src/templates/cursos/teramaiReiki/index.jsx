import React from 'react';

import '../curses.css';

import { Container, Row, Col } from 'react-bootstrap';

import teramaiReiki from '../../../img-cursos/teramaiReiki.jpg';

const TeramaiReiki = () => {
  return (
    <>
      <Container fluid className="container-curses">
        <Row className="row-curses">
          <Col xs={12} xxl={12} xl={12}>
            <h1 className="title-curses">Teramai Reiki</h1>
          </Col>
          <Col xs={12} xxl={5} xl={5} md={5}>
            <img
              className="img-fluid img-curses"
              src={teramaiReiki}
              alt="Teramai Reiki Curso Rainha da Antiga Religião"
            />
            <p className="paragraph-curses">
              O Tera mai e Tera mai Seichem é um sistema de cura que associa e unifica a energia utilizada por Xamãs
              hawaianos (kahunas) e por eles denominadas “Seichem”, com as energias das freqüências mais elevadas dos
              quatro elementos (terra, água, fogo e ar).
            </p>
            <p className="paragraph-curses">
              O Teramai Seichem foi introduzido nos EUA por Kathleen Milner desde 1992. Através de canalizações e
              contatos com alguns dos Mestres Ascensos, Confederação Galáctica e os Anjos dos da Eterna Luz, Kathleen
              foi guiada a unificar seus conhecimentos de Seichem (já havia sido iniciada como Mestre em Seichem)
              juntamente com as energias nas quais foi iniciada pelos próprios seres de Luz (Sakara, Sophiel e
              Angeliclight).
            </p>
            <p className="paragraph-curses">
              SAKARA é fogo, a energia de oitavas superiores do fogo utilizada para cura. A energia curativa de Sakara
              trabalha na aura, o campo eletromagnético que cerca o corpo. Uma das propriedades básicas do fogo é
              transformação / transmutação. Sakara queima, transmuta e liberta bloqueios e resistências nos níveis
              físico, etérico, emocional, mental e espiritual.
            </p>
            <p className="paragraph-curses">
              A iniciação na freqüência de Sakara possibilita uma aceleração dos elétrons dos átomos de nosso corpo,
              possibilitando uma amplificação do potencial geral inerente a cada um.ANGELICLIGHT é um raio de cura de
              duas vertentes: o elemento ar/ energia mental e energia diretamente do Reino Angélico. SOPHIEL é a energia
              de oitavas superiores da água. A energia de Sophiel penetra profundamente no corpo astral/emocional
              possibilitando acessar o núcleo de qualquer perturbação a nível emocional. TERA-MAI é a manifestação da
              energia do elemento terra em suas oitavas superiores. É uma energia de aterramento e grownding, que
              auxilia em curas específicas de corpo físico e questões ligadas mais à terceira dimensão.
            </p>
            <p className="paragraph-curses">
              O Teramai Seichem trabalha com todos os quatro raios curativos elementares e símbolos sagrados do
              Xamanismo Hawaiano que auxiliam a alcançar estas freqüências específicas.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TeramaiReiki;
