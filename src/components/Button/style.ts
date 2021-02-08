import styled from 'styled-components';

interface Props {
  outlined: string;
}

export const Container = styled.button<Props>`
  min-width: 188px;
  height: 45px;
  cursor: pointer;

  padding: 13px 103px 13px 104px;
  
  border-radius: 2px;
  border: none;
  
  background-color: ${props => props.outlined === 'true' ? 'transparent' : props.theme.colors.primary};
  color: ${props => props.outlined === 'true' ? '#808080' : '#fff'};
  border: ${props => props.outlined === 'true' ? '1px solid #808080' : 'none'};

  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;

  font-style: normal;
  text-align: center;

  display: flex;
  align-items: center;  


  transition: transform .2s; /* Animation */

  &:hover {
   opacity: 0.8;
  }

`;
