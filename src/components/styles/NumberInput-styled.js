import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    outline: none;
    text-align: center;
    background: transparent;
    border: none;
    font-size: 28px;
    width: 30px;
  }

  input[type='number']::selection {
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.42);
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  button {
    flex-grow: 0.5;
    font-size: 28px;
  }
`;

export default Container;
