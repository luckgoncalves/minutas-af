import styled from 'styled-components';


export const Container = styled.div<{ display: String }>`


  display: ${props => props.display==='true' ? 'flex' : 'none'};
 
  width: 914px;
  /* height: 366px; */

  margin: 16px auto 0;
  padding: 3rem;
  
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
`;