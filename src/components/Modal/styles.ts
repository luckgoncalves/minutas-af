import styled from 'styled-components';

import { Modal } from 'reactstrap';

export const Container = styled(Modal)`
    margin: auto;
    width: 640px;
    max-width: 100%;
    
    .modal-content {

      .modal-header {
        border-bottom: none;
      }

      .modal-footer {
        border-top: none;
        margin-bottom: 36px;
        padding-bottom: 0;
      }
    }
`;

export const List = styled.ul`
  list-style: none;

  li {
    display: flex;
    align-items: center;

    &:nth-child(2) {
      margin: 42px 0;
    }

    p {
      margin: 0;
      font-size: 16px;
      color: #5d6162;
    }
  }
`;

export const CircleIcon = styled.div`
  width: 49px;
  height: 48px;
  margin: 0 16px 0 0;

  padding: 14px 15px 14px 14px;
  opacity: 0.7;

  border-radius: 50%;
  background-color: #ddecf2;
  color: ${props => props.theme.colors.primary};

  svg {
    width: 20px;
    height: 20px;
  }
`;