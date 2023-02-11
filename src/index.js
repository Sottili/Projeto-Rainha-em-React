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

// CURSOS //

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
        path: '/',
        element: <HomeRainha />,
      },
      // CURSOS //

      // Reiki //
      {
        path: '/cursos/reiki-tradicional-usui-tibetano',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/mestra-rowena-healing',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/el-morya-healing',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/djwall-khull-cosmo-ascencional',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/teramai-reiki',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/teramai-seichem',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/seichem-seikem-all-love',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/ra-sheeba-reiki"',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/reiki-de-luxor',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/shamballa-multidimencional',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/reiki-xamanico-amadeus',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/reiki-xamanico-huna-reiki',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/reiki-elemental',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/dolphin-reiki',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/reiki-druida',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/reiki-celta',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/reiki-avalon-excalibur',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/dragon-reiki',
        element: <HomeRainha />,
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
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
