import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import InputGenerator from './InputGenerator'

export default function FormGenerator({ title, props }) {
	const [inputs, setInputs] = useState([])

	useEffect(() => {
		setInputs(props)
	},[props])
	
	return (
			<FormStyled>
					<FormStyled.Title>{title}</FormStyled.Title>

					{inputs.map((input, index) => (
							<InputGenerator key={index} label={input.label} type={input.type} name={input.name} required={input.required} onChange={input.onChange} options={input.options}/>
					))}
				<FormStyled.Button type='submit'>
					Cadastrar
				</FormStyled.Button>
			</FormStyled>
	)
}

const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 50px 0;
`;

FormStyled.Title = styled.h1`
	text-transform: uppercase;
`;

FormStyled.Button = styled.button`
	background-color: var(--primary);
	margin-left: 200px;
	color: #FFF;
	font-weight: bold;
	text-transform: uppercase;
	width: 100px;
	height: 40px;
	border-radius: 6px;
	border: 0;
	cursor: pointer;
	transition: 0.2s;
	&:hover {
		opacity: 80%;
	}
`;
