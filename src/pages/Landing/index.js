import React from 'react';
import { Link } from 'react-router-dom';

import landingBackground from '../../assets/img/landingBackground.jpg';
import { LandingMainContainer, LandingButtonGroup, LandingTitle, LandingSubTitle, LandingContent, ButtonLandingStyled } from './styles';

import PageBase from '../../components/PageBase';
import ButtonLink from '../../components/ButtonLink';

function Landing() {
	return (
		<PageBase>
			<LandingMainContainer backgroundImage={landingBackground}>
				<LandingContent>
					<LandingTitle>Crie sua Própria Flix do jeito que preferir</LandingTitle>
					<LandingSubTitle>
						Com a YourFlix você pode criar categorias e adicionar seus videos favoritos.
						Escolha sua cor favorita e dê o nome que quiser para o seu App...
                	</LandingSubTitle>

					<LandingButtonGroup>
						<ButtonLandingStyled as={Link} to="/register">Criar Conta</ButtonLandingStyled>
						<ButtonLandingStyled as={Link} to="/login">Entrar</ButtonLandingStyled>
					</LandingButtonGroup>
				</LandingContent>
			</LandingMainContainer>
		</PageBase>
	);
}

export default Landing;