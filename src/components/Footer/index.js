import React from 'react';
import { FooterBase } from './styles';

import LogoAmorim from '../../assets/img/newLogoAmorim 1.svg';

function Footer() {
  return (
    <FooterBase>
      <a href="https://portfolio-amorim.herokuapp.com/" target='_blank' rel="noopener noreferrer">
        <img src={LogoAmorim} alt="Logo Amorim" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
