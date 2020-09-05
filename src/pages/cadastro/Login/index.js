import React from 'react';
import FormGenerator from '../../../components/FormGenerator';
import PageBase from '../../../components/PageBase';

function Login() {
	function handleInputChange() {

	}

	return (
		<PageBase>
			<FormGenerator
				title='Login'
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
					]
				}
			/>
		</PageBase>
	)
}

export default Login;