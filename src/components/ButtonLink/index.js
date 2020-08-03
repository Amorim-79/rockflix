import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function ButtonLink({ className, to, children }) {
	return (
		<ButtonLinkStyled as={Link} className={className} to={to}>
			{children}
		</ButtonLinkStyled>
	);
};

ButtonLink.defaultProps = {
	to: '/',
	className: '',
};

ButtonLink.propTypes = {
	className: PropTypes.string,
	to: PropTypes.string,
	children: PropTypes.node.isRequired,
};

const ButtonLinkStyled = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  margin-right: 20px;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
    margin-right: 0;
  }
`;