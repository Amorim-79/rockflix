import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu'
import Footer from '../Footer'

const  Main = styled.main`
	background-color: var(--black);
	color: var(--white);
	flex: 1;
	padding-top: 35px;
`;

export default function PageBase({ children, typeButton }) {
	return (
		<>
			<Menu typeButton={typeButton}/>

			<Main>
				{children}
			</Main>

			<Footer />
		</>
	);
};