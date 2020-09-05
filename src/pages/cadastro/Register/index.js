import React from 'react';
import FormGenerator from '../../../components/FormGenerator';
import PageBase from '../../../components/PageBase';

function Register() {
	function handleInputChange() {

	}

	return (
		<PageBase>
			<FormGenerator
				title='Criar conta'
				props={
					[
						{
							label: 'Usuário',
							name: 'user',
							type: 'text',
							required: true,
							onChange: handleInputChange,
						},
						{
							label: 'Senha',
							name: 'password',
							type: 'password',
							required: true,
							onChange: handleInputChange,
						},
						{
							label: 'Confirmar Senha',
							name: 'password',
							type: 'password',
							required: true,
							onChange: handleInputChange,
						},
						{
							label: 'Título da sua Flix',
							name: 'title',
							type: 'text',
							required: true,
							onChange: handleInputChange,
                        },
                        {
							label: 'Cor favorita',
							name: 'color',
							type: 'color',
							required: true,
							onChange: handleInputChange,
						},
					]
				}
			/>
		</PageBase>
	)
}

export default Register;