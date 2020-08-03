import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import styled from 'styled-components';

export default function ButtonBack({ to, width , children }) {
    return (
        <ButtonBackStyled as={Link} to={to} width={width}>
            <FiArrowLeft size={20} style={{marginRight: 5}}/>
            {children}
        </ButtonBackStyled>
    );
}

const ButtonBackStyled = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 12px 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    width: ${props => props.width}px;
    transition: opacity .3s;
    margin-top: 0;
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
  }
`;