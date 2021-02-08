import React from 'react';

import LoadingIco from '../../assets/img/loading-ico.svg';

import { Container } from './styles';

const Loading: React.FC = () => {
  
  return (
    <Container>
      <img src={LoadingIco} alt="Loading" />
    </Container>
  )
}

export default Loading;