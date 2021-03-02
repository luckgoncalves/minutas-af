import React, { ReactNode } from 'react';

import { Container } from './style';

interface GreetingSettings {
  children: ReactNode;
  loading: boolean;
  outlined: boolean;
  onClick: () => void;
}


const Button: React.FC<GreetingSettings> = ({onClick, loading, outlined, children}) => {
  return (
    <Container
      onClick={onClick} 
      outlined={`${outlined}`}
    >
      {children}
    </Container>
  );
}

export default Button;