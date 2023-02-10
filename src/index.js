import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

import HomeRainha from './templates/home';
import AboutUs from './templates/aboutUs';
import ImportanciaDieta from './templates/artigos/importancia-da-dieta';

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
        path: '/',
        element: <HomeRainha />,
      },
      {
        path: '/',
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
        element: <HomeRainha />,
      },
      {
        path: '/cursos/karuna-ki',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/reiki-cristao',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/reiki-tibetano',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/cristais-etericos-quanticos',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/kundalini-tantra-reiki',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/iniciacao-yod',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/iniciacao-sagrada-espada-arcanjo-miguel',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/iniciacao-sagrada-chama-violeta',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/iniciacao-sagrada-sete-raios',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/iniciacao-mahalakshmi',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/iniciacao-lorde-ganesha',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/iniciacao-ordem-de-melchizedek',
        element: <HomeRainha />,
      },
      {
        path: '/cursos/sacerdocio-ordem-de-melchizedek',
        element: <HomeRainha />,
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
