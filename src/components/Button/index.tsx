import React from 'react';

import { Container } from './style';

interface GreetingSettings {
  text: string;
  loading: boolean;
  outlined: boolean;
  onClick: () => void;
}


const Button: React.FC<GreetingSettings> = ({text, loading, outlined, onClick}) => {
  return (
    <Container outlined={`${outlined}`} onClick={onClick}>
      {text}
    </Container>
  );
}

export default Button;