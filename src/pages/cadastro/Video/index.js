import React from 'react';
import { Link } from 'react-router-dom';

import PageBase from '../../../components/PageBase';

export default function CadastroVideo() {
	return (
		<PageBase>
			<h1>Cadastro de Vídeo</h1>

			<Link to="/cadastro/categoria">
				Cadastrar Categoria
			</Link>
		</PageBase>
	);
};