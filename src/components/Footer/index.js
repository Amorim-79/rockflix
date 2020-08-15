import React from 'react';
import { FiHeart } from 'react-icons/fi';

import { FooterBase } from './styles';

import LogoAmorim from '../../assets/img/newLogoAmorim 1.svg';

function Footer() {
  return (
    <FooterBase>
      <a href="https://portfolio-amorim.herokuapp.com/" target='_blank' rel="noopener noreferrer">
        <img src={LogoAmorim} alt="Logo Amorim" />
      </a>
      <FooterBase.Title>
        Desenvolvido escutando o melhor do Rock
        <FiHeart size={24} color={'#7159c1'} style={{marginLeft: 5}} />
      </FooterBase.Title>
    </FooterBase>
  );
}

export default Footer;
