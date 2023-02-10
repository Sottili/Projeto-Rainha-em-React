/////////////////////////////////////////////// IMPORTS /////////////////////////////////////////////////////////////

//React//
import React from 'react';

//Css//
import './index.css';

/////////////////////////////////////////// END IMPORTS ////////////////////////////////////////////////////////////

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-footer">
          <div className="col-left">
            <h5 className="footer-title text-center">Endereço</h5>
            <p className="text-footer">Rua São Sabino, 323 – Chácara Belenzinho – São Paulo / SP</p>
            <p className="text-footer">Estamos localizados próximos da Estação Belém e Estação Tatuapé.</p>
          </div>
          <div className="col-mid">
            <h5 className="footer-title text-center">Contato</h5>
            <div className="body-col">
              <p className="text-email">Email: contato@rainhadaantigareligiao.org.br</p>
              <p className="footer-subtitle">Contato Dirigente</p>
              <div className="divider-area-footer"></div>
              <p className="text-footer">(11) 97715-5459 – Glória Frighetto</p>
            </div>
          </div>
          <div className="col-right">
            <h4 className="text-center copyright-footer">
              Rainha da Antiga Religião – Todos os direitos reservados – &copy;2022
            </h4>
            <p className="cnpj">CNPJ: 24.737.059/0001-25</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
