import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import './Menu.css';

import ButtonLink from '../ButtonLink';
import ButtonBack from '../ButtonBack'

export default function Menu({typeButton}) {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="RockFlix Logo"/>
            </Link>
            {typeButton === 'Link' ?
                <div>
                    <ButtonLink className="ButtonLink" to='/cadastro/video' >
                        Novo Vídeo
                    </ButtonLink> 
                    <ButtonLink to='/cadastro/categoria' >
                        Nova Categoria
                    </ButtonLink>
                </div> :
                <ButtonBack to='/' >
                    Voltar para a Home
                </ButtonBack>
            }
        </nav>
    );
};
