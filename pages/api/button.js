import styled from 'styled-components'

export const ButtonLight = styled.button`
  background: midnightblue;
  color: white;
  border-radius: 3px;
  padding: 0.5em 1em;
  border: 2px solid midnightblue;
  font-size: 1.2rem;

  &:hover {
    background: aliceblue;
    color: midnightblue;
  }
`;

export const ButtonDark = styled.button`
  background: '#64ffda';
  color: '#222;
  border-radius: 3px;
  padding: 0.5em 1em;
  border: 2px solid '#64ffda';
  font-size: 1.2rem;

  &:hover {
    background: '#0A1929';
    color: '#64ffda';
  }
`;