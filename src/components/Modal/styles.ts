import styled from 'styled-components';

import { Modal } from 'reactstrap';

export const Container = styled(Modal)`
    .modal-content {

      .modal-header {
        border-bottom: none;
      }

      .modal-footer {
        border-top: none;
      }
    }
`;

export const List = styled.ul`
  list-style: none;

  li {
    display: flex;
    align-items: center;

    p {
      margin: 0;
      font-size: 16px;
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