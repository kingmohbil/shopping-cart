import styled from 'styled-components';

const Container = styled.div`
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;
  transform: translateY(25%);

  h1 {
    color: var(--light-brown);
  }

  h1::selection {
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.42);
  }
`;

export default Container;
