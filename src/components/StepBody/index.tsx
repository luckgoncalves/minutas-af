import React from 'react';

import { Container } from './styles';


interface Steps {
  active: Boolean;
}

const StepBody: React.FC<Steps> = ({children, active}) => {
  
  return (
    <Container display={active ? true : false} >
      {children}
    </Container>
  );
}

export default StepBody;