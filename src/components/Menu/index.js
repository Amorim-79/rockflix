import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import './Menu.css';

import ButtonLink from '../ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="RockFlix Logo"/>
            </Link>

            <ButtonLink className="ButtonLink" to='/cadastro/video' >
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
};

export default Menu;