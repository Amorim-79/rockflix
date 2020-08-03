import React, { useState } from 'react';

import PageBase from '../../../components/PageBase';
import FormGenerator from '../../../components/FormGenerator';

export default function CadastroVideo() {
	const initialValues = {
		title: '',
		url: '',
		category: '',
	}

	const [formData, setFormData] = useState(initialValues)

	function handleInputChange(e) {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

	return (
		<PageBase>
			
			<FormGenerator 
			title='Novo Vídeo'
			props= {
				[
					{
						label: 'Título',
						name: 'title',
						type: 'text',
						required: true,
						onChange: handleInputChange,
					},
					{
						label: 'URL',
						name: 'url',
						type: 'text',
						required: true,
						onChange: handleInputChange,
					},
					{
						label: 'Categoria',
						name: 'category',
						type: 'select',
						required: true,
						onChange: handleInputChange,
					}
				]
			}
			/>
		</PageBase>
	)
}
