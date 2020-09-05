import styled from 'styled-components';

export const LandingMainContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    height: auto;
    min-height: 70vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const LandingContent = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding: 15px;
  }
`

export const LandingTitle = styled.h1`
  
`

export const LandingSubTitle = styled.h1`

`

export const LandingButtonGroup = styled.div`
  display: flex;
`

export const ButtonLandingStyled = styled.button`
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
    padding: 20px;
  }
`;