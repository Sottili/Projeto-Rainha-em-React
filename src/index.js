// REACT //

import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS //

import './index.css';

// ROUTER DOM //

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

// TEMPLATES //

import HomeRainha from './templates/home';
import AboutUs from './templates/aboutUs';
import ImportanciaDieta from './templates/artigos/importancia-da-dieta';
import Linktree from './templates/linktree';
import CursesSection from './templates/cursosSection';

// CURSOS //
/*
import MagnifiedHealing from './templates/cursos/magnifiedHealing/magnifiedHealing';
import KarunaKi from './templates/cursos/karunaKi';
import ReikiCristao from './templates/cursos/reikiCristao';
import ReikiTibetano from './templates/cursos/reikiTibetano';
import CristaisEtericos from './templates/cursos/cristaisEtericos';
import Kundalini from './templates/cursos/kundaliniTantra';
import IniciacaoYod from './templates/cursos/iniciacaoYod';
import IniciacaoSagradaEspadaMiguel from './templates/cursos/iniciacaoSagradaEspadaMiguel';
import IniciacaoChamaVioleta from './templates/cursos/iniciacaoChamaVioleta';
import IniciacaoSeteRaiosCosmicos from './templates/cursos/iniciacaoSeteRaiosCosmicos';
import IniciacaoMahaLakshmi from './templates/cursos/iniciacaoMahaLakshmi';
import IniciacaoLordeGanesha from './templates/cursos/iniciacaoLordGanesha';
import IniciacaoOrdemMelchizedek from './templates/cursos/iniciacaoOrdemMelchizedek';
import SacerdocioOrdemMelchizedek from './templates/cursos/sacerdocioOrdemMelchizedek';
import ReikiUsuiTibetano from './templates/cursos/reikiUsuiTibetano';
import ReikiCelta from './templates/cursos/reikiCelta';
import ReikiAvalon from './templates/cursos/reikiAvalonExcalibur';
import DragonReiki from './templates/cursos/dragonReiki';
import RowenaHealing from './templates/cursos/rowenaHealing';
import ElMoryaHealing from './templates/cursos/elMoryaHealing';
import DjwallKhull from './templates/cursos/djwallKhull';
import TeramaiReiki from './templates/cursos/teramaiReiki';
import SeichimSeikhem from './templates/cursos/seichimSeikhem';
import RaSheeba from './templates/cursos/raSheeba';
import ReikiLuxor from './templates/cursos/reikiLuxor';
import ShamballaMultimensional from './templates/cursos/shamballaMultidimensional';
import ReikiAmadeus from './templates/cursos/reikiAmadeus';
import HunaReiki from './templates/cursos/reikiHuna';
import ReikiElemental from './templates/cursos/reikiElemental';
import DolphinReiki from './templates/cursos/dolphinReiki';
import ReikiDruida from './templates/cursos/reikiDruida';
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeRainha />,
      },
      {
        path: '/quem-somos',
        element: <AboutUs />,
      },
      {
        path: '/importancia-da-dieta',
        element: <ImportanciaDieta />,
      },
      {
        path: '/agenda',
        element: <HomeRainha />,
      },
      {
        path: '/cursos',
        element: <CursesSection />,
      },
      // CURSOS //

      // Reiki //
      /* {
        path: '/cursos/reiki-tradicional-usui-tibetano',
        element: <ReikiUsuiTibetano />,
      },
      {
        path: '/cursos/mestra-rowena-healing',
        element: <RowenaHealing />,
      },
      {
        path: '/cursos/el-morya-healing',
        element: <ElMoryaHealing />,
      },
      {
        path: '/cursos/djwall-khull-cosmo-ascencional',
        element: <DjwallKhull />,
      },
      {
        path: '/cursos/teramai-reiki',
        element: <TeramaiReiki />,
      },
      {
        path: '/cursos/seichem-seikem-all-love',
        element: <SeichimSeikhem />,
      },
      {
        path: '/cursos/ra-sheeba-reiki',
        element: <RaSheeba />,
      },
      {
        path: '/cursos/reiki-de-luxor',
        element: <ReikiLuxor />,
      },
      {
        path: '/cursos/shamballa-multidimensional',
        element: <ShamballaMultimensional />,
      },
      {
        path: '/cursos/reiki-xamanico-amadeus',
        element: <ReikiAmadeus />,
      },
      {
        path: '/cursos/reiki-xamanico-huna-reiki',
        element: <HunaReiki />,
      },
      {
        path: '/cursos/reiki-elemental',
        element: <ReikiElemental />,
      },
      {
        path: '/cursos/dolphin-reiki',
        element: <DolphinReiki />,
      },
      {
        path: '/cursos/reiki-druida',
        element: <ReikiDruida />,
      },
      {
        path: '/cursos/reiki-celta',
        element: <ReikiCelta />,
      },
      {
        path: '/cursos/reiki-avalon-excalibur',
        element: <ReikiAvalon />,
      },
      {
        path: '/cursos/dragon-reiki',
        element: <DragonReiki />,
      },
      {
        path: '/cursos/magnified-healing',
        element: <MagnifiedHealing />,
      },
      {
        path: '/cursos/karuna-ki',
        element: <KarunaKi />,
      },
      {
        path: '/cursos/reiki-cristao',
        element: <ReikiCristao />,
      },
      {
        path: '/cursos/reiki-tibetano',
        element: <ReikiTibetano />,
      },
      {
        path: '/cursos/cristais-etericos-quanticos',
        element: <CristaisEtericos />,
      },
      {
        path: '/cursos/kundalini-tantra-reiki',
        element: <Kundalini />,
      },
      {
        path: '/cursos/iniciacao-yod',
        element: <IniciacaoYod />,
      },
      {
        path: '/cursos/iniciacao-sagrada-espada-arcanjo-miguel',
        element: <IniciacaoSagradaEspadaMiguel />,
      },
      {
        path: '/cursos/iniciacao-sagrada-chama-violeta',
        element: <IniciacaoChamaVioleta />,
      },
      {
        path: '/cursos/iniciacao-sagrada-sete-raios',
        element: <IniciacaoSeteRaiosCosmicos />,
      },
      {
        path: '/cursos/iniciacao-mahalakshmi',
        element: <IniciacaoMahaLakshmi />,
      },
      {
        path: '/cursos/iniciacao-lorde-ganesha',
        element: <IniciacaoLordeGanesha />,
      },
      {
        path: '/cursos/iniciacao-ordem-de-melchizedek',
        element: <IniciacaoOrdemMelchizedek />,
      },
      {
        path: '/cursos/sacerdocio-ordem-de-melchizedek',
        element: <SacerdocioOrdemMelchizedek />,
      },*/
    ],
  },
  {
    path: '/linktree',
    element: <Linktree />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
