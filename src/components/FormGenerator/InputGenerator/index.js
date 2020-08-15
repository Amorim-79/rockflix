import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function InputGenerator({ label, type, name, required, onChange, options }) {
	switch (type) {
		case 'text':
			return InputText(label, name, required, onChange);
		case 'color':
			return InputColor(label, name, required, onChange);
		case 'textarea':
			return InputTextArea(label, name, required, onChange);
		case 'select':
			return InputSelect(label, name, required, onChange, options);
		default:
			return null;
	}
}

function InputText(label, name, required, onChange) {
	return (
		<InputLabelStyled>
			{label}
			<InputTextStyled
				type='text'
				name={name}
				required={required}
				onChange={onChange}
			/>
		</InputLabelStyled>
	);
}

function InputColor(label, name, required, onChange) {
	return (
		<InputLabelStyled>
			{label}
			<InputColorStyled
				type='color'
				name={name}
				required={required}
				onChange={onChange}
			/>
		</InputLabelStyled>
	);
}

function InputTextArea(label, name, required, onChange) {
	return (
		<InputLabelStyled>
			{label}
			<InputTextAreaStyled
				name={name}
				required={required}
				onChange={onChange}
			/>
		</InputLabelStyled>
	);
}

function InputSelect(label, name, required, onChange, options) {
	return (
		<InputLabelStyled>
			{label}
			<InputSelectStyled name={name} required={required} onChange={onChange}>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.key}
					</option>
				))}
			</InputSelectStyled>
		</InputLabelStyled>
	);
}

InputGenerator.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	required: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array,
};

const InputLabelStyled = styled.label`
	font-weight: bold;
	color: #FFF;
`;

const InputTextStyled = styled.input`
	display: block;
	min-height: 40px;
	width: 300px;
	margin-bottom: 20px;
	padding: 5px;
	border-radius: 6px;
	border: 0;
	line-height: 16px;
`;

const InputColorStyled = styled.input`
	display: block;
	min-height: 40px;
   	width: 100px;
	margin-bottom: 20px;
	margin-right: 200px;   
   	padding: 5px;
   	border-radius: 6px;
   	border: 0;
`;

const InputTextAreaStyled = styled.textarea`
	min-height: 80px;
	display: block;
	width: 300px;
	margin-bottom: 20px;
	padding: 5px;
	border-radius: 6px;
	border: 0;
	line-height: 16px;
	resize: none;
`;

const InputSelectStyled = styled.select`
	display: block;
	min-height: 40px;
	width: 300px;
	margin-bottom: 20px;
	padding: 5px;
	border-radius: 6px;
	border: 0;
	line-height: 16px;
`;