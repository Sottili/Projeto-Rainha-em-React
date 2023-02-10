import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';

import Footer from './components/footer';
import NavbarAll from './components/navbar';

const App = () => {
  return (
    <>
      <NavbarAll />
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
