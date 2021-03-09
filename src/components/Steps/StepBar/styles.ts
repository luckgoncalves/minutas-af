import styled, { css } from 'styled-components';

export const Steps = styled.div`
  width: 914px;
  height: 48px;
  
  padding: 11px 86px 13px;
  border-radius: 24px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
  
  background-color: #ffffff;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const Badge = styled.div<{ active: String }>`
  width: 24px;
  height: 24px;
  
  border-radius: 50%;
  margin: 0 8px 0 0;
  padding: 3px 2px;

  color: #fff;
  background-color: ${props => props.active === 'true' ? '#0cb969' : '#808080'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform .2s; /* Animation */

  &:hover {
    transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
`;


export const Separator = styled.div`
  width: 120px;
  height: 0.5px;
  margin: 13px 25px 10px 26px;
  border: solid 0.5px #979797;
`;


const input = css`
  margin-top: 24px;

  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;

  background: none;
  outline: none;

  color: #404040;

  font-size: 14px;

  padding-bottom: 11px;
`;

export const Form = styled.form`

  span {
    color: #777777;
    font-size: 16px;
    line-height: 1.5px;
  }

  fieldset {
    margin: 32px 0;

    display: flex;
    flex-direction: column;

    label {
      color: #222222;
      font-size: 20px;
    }

    input {
     ${input};
    }

    select {
      ${input};
    }

    
  }

`;

export const GroupButtons = styled.div`
  display: flex;
  margin-top: 24px;
  
  button {
    margin-right: 16px;
  }
`;