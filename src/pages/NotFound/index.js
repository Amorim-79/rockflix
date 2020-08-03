import React from 'react';
import styled from 'styled-components';

import PageBase from '../../components/PageBase';

export default function NotFound() {
    return(
        <PageBase>
            <NotFoundStyled>
                <NotFoundStyled.Title>Página Não Encontrada</NotFoundStyled.Title>
                <NotFoundStyled.Description>Jogue um pouco meu Flappy Bird</NotFoundStyled.Description>
                <NotFoundStyled.Iframe src="https://amorim-79.github.io/flappy-bird/Flappy-Bird/index.html" ></NotFoundStyled.Iframe>
            </NotFoundStyled>
        </PageBase>
    );
};

const NotFoundStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

NotFoundStyled.Title = styled.h1`
    text-align: center;
`;

NotFoundStyled.Description = styled.span`
    text-align: center;
    font-weight: bold;
`;

NotFoundStyled.Iframe = styled.iframe`
    width: 1000px;
    height: 450px;
    margin-top: 20px;
    margin-bottom: 50px;
    @media (max-width: 800px) {
        width: 300px;
        height: 450px;
  }
`;