import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

import ButtonLink from '../ButtonLink';
import ButtonBack from '../ButtonBack'

export default function Menu({typeButton}) {
    const title = 'YourFlix';

    return (
        <nav className="Menu">
            <Link to="/" className="Logo" >
                {title}
            </Link>
            {typeButton === 'Link' ?
                <div className="button-group">
                    <ButtonLink className="ButtonLink" to='/cadastro/video' >
                        Novo Vídeo
                    </ButtonLink> 
                    <ButtonLink to='/cadastro/categoria' >
                        Nova Categoria
                    </ButtonLink>
                </div> :
                <ButtonBack to='/' >
                    Voltar
                </ButtonBack>
            }
        </nav>
    );
};
