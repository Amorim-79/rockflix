import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../../../components/PageBase';

export default function CadastroCategoria() {
	return (
		<PageBase>
			<h1>Cadastro de Categoria</h1>

			<form>
				<label>
					Nome da Categoria:
          			<input type="text" />
				</label>

				<button>
					Cadastrar
        		</button>
			</form>


			<Link to="/">
				Ir para home
      		</Link>
		</PageBase>
	)
}
