import React from 'react';

import './index.css';

import logo from '../../img/logo_rainha.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavbarAll = () => {
  return (
    <>
      <Navbar className="container-navbar" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} className="logo-navbar" alt="logo rainha da antiga religião" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="config-navbar">
              <Nav.Link>
                <Link className="links-navbar" to="/">
                  Inicio
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="links-navbar" to="/quem-somos">
                  Quem Somos
                </Link>
              </Nav.Link>
              <NavDropdown className="dropdown-title" id="basic-nav-dropdown" title="Artigos">
                <NavDropdown.Item>
                  <Link className="links-navbar" to="/orientacoes-de-participacao">
                    Orientações de Participação
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="links-navbar" to="/importancia-da-dieta">
                    Importância da Dieta
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Cursos" id="dropdown-curses">
                <NavDropdown id="dropdown-curses" title="Cursos em Terapias">
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/aromaterapia">
                      AROMATERAPIA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/reflexologia-podal">
                      REFLEXOLOGIA PODAL
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/auricoloterapia-com-cristais">
                      ARICULOTERAPIA COM CRISTAIS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/florais-de-bach">
                      FLORAIS DE BACH
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/florais-de-saint-germain">
                      FLORAIS DE SAINT GERMAIN
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/bambuterapia">
                      BAMBUTERAPIA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/susho-terapia">
                      SUSHÔ TERAPIA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/pedras-quentes">
                      PEDRAS QUENTES
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="dropdown-curses" title="Cursos em Reiki - 1">
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/reiki-tradicional-usui-tibetano">
                      REIKI TRADICIONAL USUI E TIBETANO
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/reiki-celta">
                      REIKI CELTA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/reiki-avalon-excalibur">
                      REIKI AVALON EXCALIBUR
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/dragon-reiki">
                      DRAGON REIKI
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/mestra-rowena-healing">
                      MESTRA ROWENA HEALING
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/el-morya-healing">
                      EL MORYA HEALING
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/djwall-khull-cosmo-ascencional">
                      DJWALL KHULL COSMO ASCENSIONAL
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/teramai-reiki">
                      TERAMAI REIKI
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/teramai-seichem">
                      TERAMAI SEICHEM REIKI
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/seichem-seikem-all-love">
                      SEICHIM SEIKHEM – ALL LOVE
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/ra-sheeba-reiki">
                      RA-SHEEBA REIKI
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/reiki-de-luxor">
                      REIKI DE LUXOR
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/shamballa-multidimencional">
                      SHAMBALLA MULTIDIMENCIONAL
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/reiki-xamanico-amadeus">
                      REIKI XAMÂNICO - AMADEUS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/reiki-xamanico-huna-reiki">
                      REIKI XAMÂNICO – HUNA REIKI
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/reiki-elemental">
                      REIKI ELEMENTAL
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/dolphin-reiki">
                      DOLPHIN REIKI - REIKI DOS GOLFINHOS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/reiki-druida">
                      REIKI DRUIDA
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="dropdown-curses" title="Cursos em Reiki - 2">
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/magnified-healing">
                      MAGNIFIELD HEALING ®
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/karuna-ki">
                      KARUNA KI ®
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/reiki-cristao">
                      REIKI CRISTÃO
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/reiki-tibetano">
                      REIKI TIBETANO
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/cristais-etericos-quanticos">
                      CRISTAIS ETÉRICOS QUÂNTICOS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/kundalini-tantra-reiki">
                      KUNDALINI TANTRA REIKI ®
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/iniciacao-yod">
                      INICIAÇÃO YOD
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/iniciacao-sagrada-espada-arcanjo-miguel">
                      INICIAÇÃO À SAGRADA ESPADA
                      <br /> DE ARCANJO MIGUEL
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/iniciacao-sagrada-chama-violeta">
                      INICIAÇÃO À SAGRADA
                      <br /> CHAMA VIOLETA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/iniciacao-sagrada-sete-raios">
                      INICIAÇÃO SAGRADA AOS
                      <br /> SETE RAIOS CÓSMICOS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/iniciacao-mahalakshmi">
                      INICIAÇÃO À MAHALAKSHMI
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/iniciacao-lorde-ganesha">
                      INICIAÇÃO À LORD GANESHA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/iniciacao-ordem-de-melchizedek">
                      INICIAÇÃO À ORDEM DE
                      <br /> MELCHIZEDEK
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-dropdown" to="/cursos/sacerdocio-ordem-de-melchizedek">
                      SACERDÓCIO À ORDEM DE
                      <br /> MELCHIZEDEK
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="dropdown-curses" title="Cursos em Reiki - 3">
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/reiki-xamanico-mahe">
                      REIKI XAMÂNICO – MAHE’O
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/iniciacao-cla-das-fadas">
                      INICIAÇÃO AO CLÃ DAS FADAS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/merlin-e-a-magia-alquimica-dos-druidas">
                      MERLIN E A MAGIA ALQUIMICA
                      <br /> DOS DRUIDAS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/iniciacao-sagrada-chama-violeta">
                      INICIAÇÃO À SAGRADA CHAMA
                      <br /> VIOLETA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/reiki-alquimico-mestre-saint-germain">
                      REIKI ALQUÍMICO DE MESTRE
                      <br /> SAINT GERMAIN
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/reiki-mestra-pallas-athena">
                      REIKI DE MESTRA PALLAS ATHENA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/reiki-ancestral-hindu">
                      REIKI ANCESTRAL HINDÚ
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/iniciacao-dourada-melchior-melchizedek">
                      INICIAÇÃO DOURADA À MELCHIOR
                      <br /> MELCHIZEDEK
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/reiki-do-essenio">
                      REIKI DOS ESSÊNIO
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/reiki-de-metatron">
                      REIKI DE METATRON
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="dropdown-curses" title="Cursos em Energias">
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/xamanismo-ancestral">
                      XAMANISMO ANCESTRAL
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/benzimento">
                      BENZIMENTO
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/esteira-de-ervas">
                      ESTEIRA DE ERVAS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/esteira-de-cristais">
                      ESTEIRA DE CRISTAIS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/cristais-em-ambientes">
                      CRISTAIS EM AMBIENTES
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="dropdown-curses" title="Cursos Oraculares">
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/runadas-nordicas">
                      RUNAS NÓRDICAS – JORNADA RÚNICA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/pedra-das-bruxas">
                      PEDRAS DAS BRUXAS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/tarot-a-jornada-do-louco">
                      TAROT – A JORNADA DO LOUCO
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="dropdown-curses" title="Cursos em Magias">
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/encantarias-po-magico">
                      ENCANTARIAS COM PÓ MÁGICO
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/encatarias-com-velas">
                      ENCANTARIAS COM VELAS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/encantaria-com-ervas">
                      ENCANTARIAS COM ERVAS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/encantaria-com-cristais">
                      ENCANTARIAS COM CRISTAIS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/magia-com-espelhos">
                      MAGIA COM ESPELHOS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/bruxaria-ancestral">
                      BRUXARIA ANCESTRAL
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/bruxaria-hekatina">
                      BRUXARIA HEKATINA – JORNADA TRIVIA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/bruxaria-italiana">
                      BRUXARIA ITALIANA - STREGONERIA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/bruxaria-natural">
                      BRUXARIA NATURAL
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/seidr-bruxaria-e-magia-nordica">
                      SEIDR – BRUXARIA E MAGIA NÓRDICA
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="dropdown-curses" title="Workshops">
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/runadas-nordicas">
                      HO’OPONOPONO
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/pedra-das-bruxas">
                      INCIAÇÃO AO CACHIMBO SAGRADO
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/tarot-a-jornada-do-louco">
                      FRATERNIDADE BRANCA
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/tarot-a-jornada-do-louco">
                      ANIMAIS DE PODER
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/tarot-a-jornada-do-louco">
                      SAGRADO FEMININO – YONI EGG –<br /> VAPORIZAÇÃO DO ÚTERO
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/tarot-a-jornada-do-louco">
                      CHACRAS
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="dropdown-curses" title="Oficinas">
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/oficina-rape">
                      OFICINA DE FEITIO DE RAPÉ
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/oficina-japamals">
                      OFICINA DE JAPAMALAS
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="links-navbar-disabled" to="/cursos/oficina-vassoura-magica">
                      OFICINA DE VASSOURA MÁGICA
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarAll;
