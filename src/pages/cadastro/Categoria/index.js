import React, { useState } from 'react';

import PageBase from '../../../components/PageBase';
import FormGenerator from '../../../components/FormGenerator';

export default function CadastroCategoria() {
	const initialValues = {
		name: '',
		description: '',
		color: '#000',
	}

	const [formData, setFormData] = useState(initialValues)

	function handleInputChange(e) {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

	return (
		<PageBase>
			
			<FormGenerator 
			title='Nova Categoria'
			props= {
				[
					{
						label: 'Nome',
						name: 'name',
						type: 'text',
						required: true,
						onChange: handleInputChange,
					},
					{
						label: 'Descrição',
						name: 'description',
						type: 'textarea',
						required: false,
						onChange: handleInputChange,
					},
					{
						label: 'Cor',
						name: 'color',
						type: 'color',
						required: false,
						onChange: handleInputChange,
					}
				]
			}
			/>
		</PageBase>
	)
}
