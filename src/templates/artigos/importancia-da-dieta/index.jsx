//////////////////////// IMPORTS //////////////////////////////////////////////

// React/ /
import React from 'react';

// Css //
import './index.css';

// Bootstrap //
import { Col, Container, Row } from 'react-bootstrap';

///////////////////// END IMPORTS /////////////////////////////////////////////

const ImportanciaDieta = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h1 className="title-importancia">Importância da Dieta</h1>
          </Col>
          <Col className="subtitle-importancia" xs={12}>
            <h3>A importância da Dieta antes de consagrar Ayahuasca</h3>
          </Col>
          <Col className="mb-5" xs={12} xxl={8} xl={8}>
            <p className="paragraph-importancia">
              Muito se fala na tal dieta, não comer ovo, pepino, chocolate, carne, etc… cada organismo reage de uma
              maneira. Tudo é vibração e nem sempre a pessoa que come um chocolate vai passar mal. As vezes faz-se a
              dieta corretamente, mas no dia do trabalho, acontece uma desarmonia na família e o sujeito toma aquela
              peia.
            </p>
            <p className="paragraph-importancia">
              Porém do lado acadêmico existe algumas explicações a respeito da tal dieta para evitar alguns efeitos
              colaterais indesejados:
            </p>
            <p className="paragraph-importancia">
              Está comprovado que a dieta influencia diretamente na qualidade da experiência e, sem dúvida, o maior
              perigo físico ao ingerir ayahuasca está relacionado com os efeitos da harmala, harmalina e
              tetrahidroharmina que contém, os que cumprem uma importante função inibidora da enzima monoamina oxidasa
              (MAO).
            </p>
            <p className="paragraph-importancia">
              A tiramina é um aminoácido que normalmente é metabolizado pela MAO no intestino. Logo de levar compostos
              inibidores da MAO, a tiramina que se encontra em certos alimentos já não pode ser metabolizada pelo
              organismo enquanto a MAO se encontre inibida. Isto pode causar um acréscimo dos níveis de tiramina na
              sangre. Feito que os altos níveis de tiramina podem afectar a produção natural de noradrenalina, esta
              condição pode conduzir a uma crise hipertensiva. Numa crise hipertensiva a pressão sanguínea pode
              sobressair 180 e o batido cardíaco pode chegar a mais de 100 pulsos por minuto. Quem sofre de uma crise
              hipertensiva geralmente reporta uma terrível enxaqueca, e pode se complicar chegando a produzir
              hemorragias, infartos, problemas neurológicos entre outros.
            </p>
            <p className="paragraph-importancia">
              A tiramina se encontra em queijos, vinhos e geralmente em tudo fermentado. Também as drogas
              simpatomiméticas (MDMA, benzedrina, etc.) podem causar uma crise hipertensiva, além disso de certas ervas
              naturais a dar reações alérgicas. Os alimentos com alto teor de tiramina que devem ser evitados nos dias
              prévios e posteriores de cada sessão: queijos fermentados, molhos picantes, feijões, soja, caviar e
              sucedâneos, chocolate, enlatados, levedura, fígados, figos secos, pescado seco e encharque, banana, café,
              cerveja, vinho rosado e tinto, carnes em geral. Há também alimentos com moderado teor de tiramina a serem
              limitados: frutas (a maioria), produtos lácteos (leite, manteiga, iogurte, queijo fresco, etc.), chá,
              gasosos, vinhos brancos, missó e amendoim.
            </p>
            <p className="paragraph-importancia">
              Um problema mais sério é a possibilidade de interação com outras drogas como o álcool. Uma das interações
              mais perigosas com inibidores da MAO é a modificação de inibidores seletivos de serotonina (SSRIs). Isto
              pode desencadear uma síndrome serotoninérgica, parecida com a crise hipertensiva quanto aos sintomas de
              elevação da pressão, mas com certas diferenças. Sintomas como agonia aguda na ponta-cabeça, sangramento
              pelo nariz, rigidez muscular e febre podem indicar o aparecimento de uma crise hipertensiva, de uma
              síndrome serotoninérgico ou de ambas.
            </p>
            <p className="paragraph-specialAbout">EM RESUMO</p>
            <p className="paragraph-importancia">
              A Tiramina, substância encontrada em alguns alimentos (listados na matéria acima), não é metabolizada pelo
              organismo, pois o mesmo encontra-se alterado para inibir o MAO e deixar o DMT aumentar. Não sendo
              metabolizada, os níveis de Tiramina aumentam trazendo alguns efeitos colaterais desconfortáveis e em
              alguns casos, graves, podendo até mesmo ser fatal.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ImportanciaDieta;
